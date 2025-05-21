require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const urlDatabase = {};
let shortUrlCounter = 1;

const validateUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post("/api/shorturl", function(req, res) {
  const url = req.body.url;
  const validate = validateUrl(url);
  
  if (!validateUrl(url)) {
    return res.json({error: "invalid url"});
  }

  const shorturl = shortUrlCounter++;
  urlDatabase[shorturl] = url;

  res.json({
    original_url: url,
    short_url: shorturl 
  })

});

app.get("/api/shorturl/:short_url", function(req, res) {
  const shortUrlParam = parseInt(req.params.short_url);
  const url = urlDatabase[shortUrlParam]; 

  if (url === undefined) {
    return res.json({error: "invalid short url"});
  }

  res.redirect(url);

});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
