# AI PR Title Generator - Chrome Extension

Automatically generate better pull request titles based on your commit messages using AI.

---

## Features

- ✨ Adds a "Generate Title" button beside the pull request title field.
- ✨ Analyzes all commit messages in the PR.
- ✨ Sends the messages to an AI model (OpenAI or Azure OpenAI) to generate a meaningful title.
- ✨ Smartly detects if you are on a PR creation page before injecting anything.
- ✨ Clean, native GitHub-style UI with a smooth loading indicator.

---

## Setup Instructions

1. **Clone or Download** this repository.

2. **Get an API Key**

   - For OpenAI: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
   - For Azure OpenAI: Set up a resource in Azure and generate an endpoint and key.

3. **Configure the Extension**
   Open `background.js` and edit the following configuration:

   ```js
   const config = {
     provider: 'openai', // or "azure"
     apiKey: 'YOUR_API_KEY_HERE',
     endpoint: '', // required only for Azure
     model: 'gpt-3.5-turbo', // or your Azure deployment name
   }
   ```

4. **Load the Extension in Chrome**

   - Go to `chrome://extensions/`
   - Enable **Developer mode** (top right corner).
   - Click **Load unpacked**.
   - Select the root folder of this project.

5. **Usage**

   - Open a GitHub pull request creation page.
   - You’ll see a ✨ **Generate Title** button next to the PR title input field.
   - Click it to generate a title based on your commits!

---

## Project Structure

```bash
/
|-- manifest.json        # Chrome extension manifest
|-- background.js        # Handles API calls to Hugging Face
|-- content_script.js    # Injects button and handles UI logic
|-- popup.html           # Basic popup page (optional)
|-- icon.png             # (Optional) Icon if you want to add one
```

---

## Future Improvements

- [ ] Better error handling when API is down.
- [ ] Add model selection for custom behaviors.
- [ ] Allow editing the AI prompt directly from popup.html.
- [ ] Auto-generate PR description based on commits (not just title).

---

## Credits

Built with ☕️ and JavaScript.

---

## License

MIT License — feel free to use, improve, and contribute!
