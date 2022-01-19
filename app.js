require('newrelic');

const app = require("express")();
const express = require('express')

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send('<html> <head> <title>White noise!</title> <style> body { width: 35em; margin: 0 auto; font-family: Tahoma, Verdana, Arial, sans-serif; } </style> </head> <body> <h1><pre>Huh!?</pre></h1> <div class="tenor-gif-embed" data-postid="16501253" data-share-method="host" data-width="100%" data-aspect-ratio="1.6168831168831168"><a href="https://tenor.com/view/the-it-crowd-huh-what-peek-stare-gif-16501253">The It Crowd Huh GIF</a> from <a href="https://tenor.com/search/theitcrowd-gifs">Theitcrowd GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script> <p><em>Thank you for visiting.</em></p> </body> </html>');
});

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
