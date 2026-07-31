// Vercel serverless function — keeps the Gemini API key hidden on the server.
// The browser never sees this key; it only talks to /api/chat.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Set it in Vercel project settings.' });
  }

  const { contents } = req.body;
  if (!contents) {
    return res.status(400).json({ error: 'Missing "contents" in request body.' });
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      }
    );
    const data = await geminiRes.json();
    if (data.error) {
      return res.status(geminiRes.status).json({ error: data.error.message });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
