# Instagram Bulk Unlike

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Browser](https://img.shields.io/badge/Browser-Chrome%20%7C%20Edge%20%7C%20Firefox-blue)

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

## Requirements

- Google Chrome, Microsoft Edge, or Firefox
- Desktop browser
- Logged into your Instagram account

## Usage

1. Open Instagram.
2. Go to **Profile → Your Activity → Likes**.
3. Press **F12** or **Ctrl + Shift + J**.
4. Open the **Console** tab.
5. Paste the contents of `script.js`.
6. Press **Enter**.

The script will automatically:

- Click **Select**
- Select liked posts
- Click **Unlike**
- Confirm the action
- Repeat until no liked posts remain

## Configuration

You can customize these values at the top of the script:

| Variable | Description | Default |
|----------|-------------|---------|
| `DELETION_BATCH_SIZE` | Likes processed per batch | `20` |
| `DELAY_BETWEEN_ACTIONS_MS` | Delay between actions | `1500 ms` |
| `DELAY_BETWEEN_CHECKBOX_CLICKS_MS` | Delay between checkbox clicks | `300 ms` |

Increase the delays if Instagram starts showing temporary errors.

## Browser Support

| Browser | Status |
|----------|--------|
| Chrome | ✅ |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Untested |

## Project Structure

```text
instagram-bulk-unlike/
├── README.md
├── LICENSE
├── script.js
├── .gitignore
└── screenshots/
```

## Screenshots

![Before running script](screenshots/before.png)
![Script running](screenshots/running.png)

Demo: [screenshots/demo.gif](screenshots/demo.gif)

## Disclaimer

This project is provided for educational purposes only.

This project is intended for educational purposes and personal account management. Users are responsible for complying with Instagram's Terms of Use.

Instagram frequently updates its interface, so this script may require maintenance over time.

## How It Works

The script uses a few core browser automation techniques:

- DOM traversal to find the relevant controls and post containers.
- Event handling to simulate the clicks needed to trigger the UI.
- `async`/`await` with configurable delays to keep the interaction pace stable.
- Basic dialog handling to dismiss temporary prompts when they appear.

## Limitations

- The script depends on Instagram's current interface structure.
- It may need updates if Instagram changes its UI or selectors.
- It is not affiliated with or endorsed by Instagram or Meta.

## License

MIT License
