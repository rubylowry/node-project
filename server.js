//core modules
 const http = require('http'); //provides server
 const fs = require('fs'); //use this for file transaction
 const path = require('path');
 const qs = require('querystring');

const server = http.createServer((req, res) =>{
	// res.writeHead(200, {'Content-Type' : 'text/plain'});
	// res.write('Hello world');
	// res.end();

	console.log(`${req.method} request for ${req.url}`)

	// If the user is trying to access a page
	if(req.method === 'GET'){
		// If the user is trying to view the index
		if(req.url === '/'){
			// Finds and reads the home page of the website
			fs.readFile('./public/index.html' , 'UTF-8' , (err,data) =>{
				// If there is an error, it will be dispalyed on the server in the console
				if(err) throw err;
				// If the content matches, then the html file will be displayed
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		}
		// If the user is trying to access the about page on the website

		else if(req.url === '/about.html'){
			fs.readFile('./public/about.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		         } else if (req.url.match ('/node_modules/')) {
			       const nodePath = path.join(__dirname, req.url);
			       fs.readFile(nodePath , 'UTF-8' , (err,data) =>{
				       if(err) throw err;
				       res.writeHead(200, {'Content-Type' : 'text/css'});
				       res.end(data);
						 })
					 // Gets the css for the pages
					 } else if (req.url.match ('/css/')) {
			                    const cssPath = path.join(__dirname, 'public', req.url);
			                    fs.readFile(cssPath , 'UTF-8' , (err,data) =>{
				                    if(err) throw err;
				                    res.writeHead(200, {'Content-Type' : 'text/css'});
				                    res.end(data);
							})
						} else if (req.url.match ('/img/')) {
																				const imgPath = path.join(__dirname, 'public', req.url);
																				fs.readFile(imgPath , 'UTF-8' , (err,data) =>{
																					if(err) throw err;
																					res.writeHead(200, {'Content-Type' : 'image/jpeg'});
																					res.end(data);
														})
													} else if (req.url.match ('/js/')) {
																											const jsPath = path.join(__dirname, 'public', req.url);
																											fs.readFile(jsPath , 'UTF-8' , (err,data) =>{
																												if(err) throw err;
																												res.writeHead(200, {'Content-Type' : 'text/js'});
																												res.end(data);
																					})
          }
		// If the user is trying to access the index page from any other page on the site
		else if(req.url === '/index.html'){
			fs.readFile('./public/index.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		         } else if (req.url.match ('/node_modules/')) {
			         const nodePath = path.join(__dirname, req.url);
			         fs.readFile(nodePath , 'UTF-8' , (err,data) =>{
				         if(err) throw err;
				         res.writeHead(200, {'Content-Type' : 'text/css'});
				         res.end(data);
			         })
							 // Gets the css for the pages
							 } else if (req.url.match ('/css/')) {
					                    const cssPath = path.join(__dirname, 'public', req.url);
					                    fs.readFile(cssPath , 'UTF-8' , (err,data) =>{
						                    if(err) throw err;
						                    res.writeHead(200, {'Content-Type' : 'text/css'});
						                    res.end(data);
									})
								} else if (req.url.match (/images/)) {
																						const imgPath = path.join(__dirname, 'public', req.url);
																						fs.readFile(imgPath, (err,data) =>{
																							if(err) throw err;
																							res.writeHead(200, {'Content-Type' : 'image/jpg'});
																							res.end(data);
																})
															} else if (req.url.match ('/js/')) {
																													const jsPath = path.join(__dirname, 'public', req.url);
																													fs.readFile(jsPath , 'UTF-8' , (err,data) =>{
																														if(err) throw err;
																														res.writeHead(200, {'Content-Type' : 'text/js'});
																														res.end(data);
																							})
		}
		else if(req.url === '/contactPage.html'){
			fs.readFile('./public/contactPage.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		          } else if (req.url.match ('/node_modules/')) {
			          const nodePath = path.join(__dirname, req.url);
			          fs.readFile(nodePath , 'UTF-8' , (err,data) =>{
				          if(err) throw err;
				          res.writeHead(200, {'Content-Type' : 'text/css'});
				          res.end(data);
			          })
								// Gets the css for the pages
 							         } else if (req.url.match ('/css/')) {
 					                            const cssPath = path.join(__dirname, 'public', req.url);
 					                            fs.readFile(cssPath , 'UTF-8' , (err,data) =>{
 						                            if(err) throw err;
 						                            res.writeHead(200, {'Content-Type' : 'text/css'});
 						                            res.end(data);
 							        		})
												} else if (req.url.match ('/img/')) {
												            								const imgPath = path.join(__dirname, 'public', req.url);
												            								fs.readFile(imgPath , 'UTF-8' , (err,data) =>{
												            									if(err) throw err;
												            									res.writeHead(200, {'Content-Type' : 'image/jpeg'});
												            									res.end(data);
												            		})
																			} else if (req.url.match ('/js/')) {
																																	const jsPath = path.join(__dirname, 'public', req.url);
																																	fs.readFile(jsPath , 'UTF-8' , (err,data) =>{
																																		if(err) throw err;
																																		res.writeHead(200, {'Content-Type' : 'text/js'});
																																		res.end(data);
																											})
		                                                }

																									} else if (req.method === 'POST'){

 																							     if (req.url === '/sendForm') {
 																							       // console.log('form submitted');
 																							       let body = '';

 																							       req.on('data', function(data){
 																							         body +=data;
 																							         // body = body + data
 																							       });

 																							       req.on('end', function(){
 																							         console.log('form data ends');
 																							         console.log(body.toString());
																											 const formData = qs.parse(body.toString());
																							         console.log(formData);

 																							       })

 																							     }
 																							   }
     });  // Method ends here

// Usually use port 3000 for setting up our http server
server.listen(3000);
console.log('running node server at port3000');
