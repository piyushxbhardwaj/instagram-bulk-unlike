const DELETION_BATCH_SIZE = 20;
const DELAY_BETWEEN_ACTIONS_MS = 1500;
const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 300;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const clickElement = (element) => {
  if (!element) {
    return false;
  }

  element.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
  element.click();
  return true;
};

const getButtonByText = (text) => {
  const buttons = Array.from(document.querySelectorAll('button, div[role="button"]'));
  return buttons.find((button) => button.textContent?.trim() === text);
};

const getSelectablePosts = () => {
  const postLinks = Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"], a[href*="/tv/"]'));
  return postLinks
    .map((link) => link.closest('div'))
    .filter(Boolean)
    .slice(0, DELETION_BATCH_SIZE);
};

const selectVisiblePosts = async () => {
  const posts = getSelectablePosts();

  for (const post of posts) {
    const checkbox = post.querySelector('input[type="checkbox"], svg[aria-label], button');
    if (checkbox) {
      clickElement(checkbox);
      await sleep(DELAY_BETWEEN_CHECKBOX_CLICKS_MS);
    }
  }

  return posts.length;
};

const dismissDialogIfPresent = () => {
  const buttons = Array.from(document.querySelectorAll('button, div[role="button"]'));
  const dismissButton = buttons.find((button) => /ok|close|dismiss|not now/i.test(button.textContent || ''));

  if (dismissButton) {
    clickElement(dismissButton);
    return true;
  }

  return false;
};

const run = async () => {
  console.log('Instagram bulk unlike started. Open the Likes page and keep the tab visible.');

  while (true) {
    const selectButton = getButtonByText('Select');
    if (selectButton) {
      clickElement(selectButton);
      await sleep(DELAY_BETWEEN_ACTIONS_MS);
    }

    const selectedCount = await selectVisiblePosts();
    if (selectedCount === 0) {
      console.log('No more visible liked posts found.');
      break;
    }

    const unlikeButton = getButtonByText('Unlike');
    if (unlikeButton) {
      clickElement(unlikeButton);
      await sleep(DELAY_BETWEEN_ACTIONS_MS);
    }

    if (dismissDialogIfPresent()) {
      await sleep(DELAY_BETWEEN_ACTIONS_MS);
    }

    window.scrollBy(0, window.innerHeight);
    await sleep(DELAY_BETWEEN_ACTIONS_MS);
  }
};

run().catch((error) => {
  console.error('Instagram bulk unlike failed:', error);
});