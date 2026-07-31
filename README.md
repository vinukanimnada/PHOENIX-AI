# PHOENIX AI

Free general-purpose AI chatbot — chat with it like Claude/ChatGPT, plus an image generation mode. Your Gemini API key stays hidden on the server; users never see or enter a key.

## What it uses
- **Chat:** Google Gemini API (free tier), called through a hidden backend function — key never reaches the browser
- **Image generation:** Pollinations.ai (completely free, no key needed)
- **Hosting:** Vercel (free tier — supports the backend function GitHub Pages can't run)

## Setup — Vercel deployment

1. Get a free Gemini API key at https://aistudio.google.com ("Get API Key" → "Create API Key").
2. Push this whole folder (`index.html`, `api/chat.js`, `package.json`) to a GitHub repo.
3. Go to https://vercel.com, sign up/log in with GitHub.
4. Click **"Add New" → "Project"**, import your `phoenix-ai` repo.
5. Before deploying, expand **"Environment Variables"** and add:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** (paste your Gemini key)
6. Click **Deploy**. Vercel gives you a live URL like `https://phoenix-ai.vercel.app` within a minute.

## Using the app
1. Open the live URL — no sign-up, no key entry, just start chatting.
2. Switch to **🎨 Image** mode to generate pictures instead of chatting.
3. **Clear chat** resets the conversation.

## Notes
- Your Gemini key lives only in Vercel's environment variables — it's never sent to or visible in the browser.
- All visitors share your key's free-tier rate limit. Fine for personal/demo use or a small group; heavy public traffic may hit Gemini's free-tier limits.
- To customize branding further (colors, name, logo), edit the `:root` CSS variables and the `<h1>`/glyph SVG near the top of `index.html`.
- If you ever want per-user keys again instead (each visitor supplies their own), that's a simpler static-only setup — just ask.
