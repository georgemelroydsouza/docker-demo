# php-docker-demo
Simple Project to start a php apache server for your project

Run

docker build -t newagefarming -f docker/Dockerfile . ~ to build the image

docker run --rm -p 8080:80 newagefarming


OR

docker-compose up --build -d


Open the browser and type http://localhost:8080
