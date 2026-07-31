# PHOENIX AI

Free general-purpose AI chatbot — chat with it like Claude/ChatGPT, plus an image generation mode. No server, no cost — runs entirely in the browser.

## What it uses
- **Chat:** Google Gemini API (free tier — get a key at https://aistudio.google.com) — keeps full conversation history for multi-turn chat
- **Image generation:** Pollinations.ai (completely free, no key needed)
- **Hosting:** GitHub Pages (free)

## Setup — GitHub Pages deployment

1. Create a new GitHub repository (e.g. `phoenix-ai`).
2. Upload `index.html` to the repo (drag-and-drop on github.com, or `git push`).
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. GitHub gives you a live URL like `https://yourusername.github.io/phoenix-ai/` within a minute or two.

## Using the app
1. Open the live URL.
2. Click **"API key"** in the header and paste your free Gemini API key (only needed for Chat mode — Image mode works with no key).
3. Type a message and hit **Send**, or press Enter. Use **Clear chat** to start a new conversation.
4. Switch to **🎨 Image** mode to generate pictures instead of chatting.

## Notes
- The API key is kept only in browser memory for that tab — it clears on refresh, nothing is stored or sent anywhere except directly to Google's API.
- Gemini's free tier has rate limits (requests per minute/day) — fine for personal/demo use, may need upgrading for heavy traffic.
- To customize branding further (colors, name, logo), edit the `:root` CSS variables and the `<h1>`/glyph SVG at the top of `index.html`.
