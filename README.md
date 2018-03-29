# Viaplay frontend task

## How to run 

### Using docker 
1. Clone repository using `git clone - https://github.com/abhishek-rs/viaplay-app.git`
2. While in the project folder run `docker-compose up -d --build`
3. Open `localhost:3000` on your browser

### Using npm 
1. Clone repository using `git clone - https://github.com/abhishek-rs/viaplay-app.git`
2. While in the project folder run `npm install`
3. After install is complete, run `npm start`
4. Open `localhost:3000` on your browser

## Technology used 
1. React 
2. Sass 
3. Docker

## Features completed

1. Fetch all the blocks of movies available at `https://content.viaplay.se/pcdash-se/film` and fetch the first page of movies in each of these blocks from the block's dedicated endpoint `https://content.viaplay.se/pcdash-se/film?blockId=XXXXXXX&partial=1&pageNumber=1`
2. These movies are displayed according to their blocks in two layouts - grid or carousel
3. The layouts can be switched using a switch available at the top of each block. 
4. Data displayed for each movie - title, imdb rating, link to imdb page, year, duration and synopsis. 
5. Dockerised. 

## Improvements I could have done with more time

1. Better carousel implementation. Current one does not work will with small screens as the number of items in carousel is large. 
2. Better design overall. 
3. Individual movie pages with more info about the movie. 

## External react modules used 

1. React toggle switch - https://www.npmjs.com/package/react-toggle-switch 
2. React slick - https://github.com/akiran/react-slick 
3. Create-react-app - https://github.com/facebook/create-react-app 

