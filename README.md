# AI PR Title Generator - Chrome Extension

Automatically generate better pull request titles based on your commit messages using AI.

---

## Features

- ✨ Adds a "Generate Title" button beside the pull request title field.
- ✨ Analyzes all commit messages in the PR.
- ✨ Sends them to Azure OpenAI Service to suggest a concise and descriptive PR title.
- ✨ Smartly detects if you are on a PR creation page before injecting anything.
- ✨ Clean, native GitHub-style UI with a smooth loading indicator.

---

## Setup Instructions

1. **Clone or Download** this repository.

2. **Get a Azure OpenAI Service API Key**

   - Go to [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service).
   - Sign up and create an API token.

3. **Update `background.js`**

   - Replace `api_key` with your actual Azure OpenAI service token.
   - Replace `url` with your actual Azure OpenAI service url

4. **Load the Extension in Chrome**

   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (top right).
   - Click **Load unpacked**.
   - Select the project folder.

5. **Usage**
   - Navigate to a GitHub pull request creation page.
   - You'll see a ✨ **Generate Title** button next to the title input.
   - Click it to auto-generate a PR title based on your commits!

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

<!-- Thanks to Hugging Face for their amazing AI models. -->

---

## License

MIT License — feel free to use, improve, and contribute!
