# Simple NextJS demo with express

## Local dev
*nodemon required*

* `npm install`
* `npm run dev`


## Docker
### Build Docker image
* `docker build -t <your username>/node-web-app .`

### Run the image
* `docker run -p 49160:3000 -d <your username>/node-web-app`

### Test
* Visit http://localhost:49160/
