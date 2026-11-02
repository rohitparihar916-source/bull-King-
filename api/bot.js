export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("BULL KING Bot is running!");
  }

  const token = process.env.BOT_TOKEN;
  const message = req.body?.message;

  if (!token) {
    return res.status(500).send("Bot token missing");
  }

  if (message?.text === "/start") {
    const chatId = message.chat.id;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🐂 WELCOME TO BULL KING!\n\n🔥 Game mein aapka swagat hai!\n\n💰 Coins kamao\n⚡ Energy badhao\n👑 King bano!\n\n👇 Hamare Social Media ko follow karo:",
        reply_markup: {
          inline_keyboard: [
  [{ text: "📸 Instagram", url: "https://www.instagram.com/khati_miti_yade_/" }],
  [{ text: "▶️ YouTube", url: "https://www.youtube.com/@RohitParihar1759" }],
  [{ text: "📘 Facebook", url: "https://www.facebook.com/share/14zK9ddGNEP/" }],
  [{ text: "✈️ Telegram", url: "https://t.me/earnwithrohit94" }],
  [{ text: "🎮 PLAY GAME", web_app: { url: "https://bull-king.vercel.app/" } }]
]
        }
      })
    });
  }

  return res.status(200).send("OK");
}