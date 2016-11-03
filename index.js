'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
	
	if (req.url === '/redirect?url=google') {
		res.writeHead(302, {
			'Location': 'https://www.google.co.jp/'
		});
	} else if (req.url === '/redirect?url=niconico') {
		res.writeHead(302, {
			'Location': 'http://www.nicovideo.jp/'
		});
	} else {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'charset': 'utf-8'
		});
		res.write(
			'<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"></head><body>' + 
			'<form method="get" action="/redirect">' + 
			'<input type="radio" name="url" value="niconico" checked="checked">ニコニコ動画<br>' + 
			'<input type="radio" name="url" value="google">Google<br>' + 
			'<button type="submit">移動</button></form></body><html>'
		);
	}
	res.end();
	
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

