# Canvas Grab 📥

**Canvas Grab** is a lightweight Chromium extension designed to help you quickly download text content and assets directly from web pages, specifically optimized for environments like Gemini Canvas.

## 🚀 Features

- **One-Click Download**: Adds a convenient "Grab Content" button to the page interface.
- **Smart Filenaming**: Automatically generates filenames using the page title and a precise timestamp (e.g., `grab-PageTitle-2023-10-27T10-30-00.txt`).
- **SPA Support**: Uses a `MutationObserver` to ensure the download button remains available even as the page dynamically updates or re-renders.
- **Lightweight**: Minimal permissions (`activeTab`, `downloads`) and no external dependencies.

## 🛠️ Installation

1.  **Clone or Download** this repository to your local machine.
2.  Open your Chromium-based browser (Chrome, Edge, Brave, etc.).
3.  Navigate to `chrome://extensions`.
4.  Enable **Developer mode** in the top right corner.
5.  Click **Load unpacked**.
6.  Select the directory where you saved `canvas-grab`.

## 📖 Usage

1.  Navigate to any webpage (or the specific tool you want to grab from).
2.  Look for the **"📥 Grab Content"** button floating on the page.
3.  Click the button.
4.  The textual content of the page will be instantly downloaded as a `.txt` file to your default download location.

## 📝 Permissions

- `activeTab`: To access the content of the current tab when the user interacts with the extension.
- `downloads`: To trigger the download of the captured content.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements, such as grabbing specific asset types or adding more configuration options, feel free to fork the repo and submit a pull request.
