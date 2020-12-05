# Restaurant Challenge

This project is an example of restaurant data 

## RUN UPP

#### BUILD FE-RESTAURANTS
```
docker build -t thomas/fe-restaurants -f fe-restaurants/Dockerfile fe-restaurants
```

#### BUILD BE-RESTAURANTS
```
docker build -t thomas/be-restaurants -f restaurants/Dockerfile restaurants
```

#### RUN DOCKER-COMPOSE
```
docker-compose -f docker-compose.yml up -d
```

#### CONNECT TO APP
```
http://localhost
```

## TESTING APP

#### BUILD BE-RESTAURANTS
```
docker build -t thomas/be-restaurants -f restaurants/Dockerfile restaurants
```
#### RUN BE-RESTAURANTS 
```
docker run -p 8080:8080 thomas/be-restaurants:latest
```
#### RUN FE-RESTAURANTS LOCALLY
```
cd fe-restaurants && npm run start:test
```
###Cypress:

##### RUN CYPRESS LOCALLY
```
cd fe-restaurants && npm run cy:run
```
##### OPEN CYPRESS LOCALLY
```
cd fe-restaurants && npm run cy:open
```
