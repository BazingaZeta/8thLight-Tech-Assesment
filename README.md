# Google Books API Search

#BACK-END

-package.json is holding informations about the app. 
"start": "node server.js" 
          ^--- This file is gonna hold what is gonna start the application
"express" is the framework to write our back-end


-Procfile is the file used by heroku to understand where to start.

-server.js will require express, set the ports (Heroku will set its port, and if it can not set the port , 8080 port will be used.
  express.static(__dirname) will allow to use static files (css for example)
  
  then the routes are set, setting as a response the rendering of the index.html

#FRONT-END

The front end is based on the .html file, that holds a simple search box for the query, .css is used to style the website and script.js is holding 
the engine that let the query work and prints out the results on the webpage.
