# Instagram Bulk Unlike

Automate the bulk removal of liked Instagram posts directly from your browser using a lightweight JavaScript console script.

> ⚠️ This project is unofficial and is not affiliated with Instagram or Meta.

## Features

- ✅ Bulk unlike Instagram posts
- ✅ Configurable batch size
- ✅ Automatic scrolling
- ✅ Handles temporary Instagram error dialogs
- ✅ Adjustable delays
- ✅ No installation required
- ✅ Runs entirely in your browser

> ⚠️ This project is unofficial and is not affiliated with Instagram or Meta.

## Requirements

- Google Chrome, Microsoft Edge, or Firefox
- Desktop browser
- Logged into your Instagram account

## Usage

1. Open Instagram.
2. Navigate to:

	```
	Profile
	→ Your Activity
	→ Likes
	```

3. Press **F12** or **Ctrl + Shift + J** to open Developer Tools.
4. Open the **Console** tab.
5. Copy the contents of `script.js`.
6. Paste it into the console.
7. Press **Enter**.

The script will automatically:

- Click **Select**
- Select liked posts
- Click **Unlike**
- Confirm the action
- Repeat until no liked posts remain

## Configuration

You can customize these values at the top of the script:

```javascript
const DELETION_BATCH_SIZE = 20;
const DELAY_BETWEEN_ACTIONS_MS = 1500;
const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 300;
```

Increase the delays if Instagram starts showing temporary errors.

## Disclaimer

This project is provided for educational purposes only.

Using browser automation may violate Instagram's Terms of Use. Use this script at your own risk.

Instagram frequently updates its interface, so this script may require maintenance over time.

## License

MIT License
