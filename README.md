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

#### BUILD BE-FILE-SAFE 
```
docker build -t bricchi/be-file-safe -f filesafe/Dockerfile filesafe
```
#### RUN BE-FILE-SAFE 
```
docker run -p 8080:8080 bricchi/be-file-safe:latest
```
#### RUN FE-SECURE-SAFE LOCALLY
```
cd secure-safe && npm run start:test
```
###Cypress:

##### RUN CYPRESS LOCALLY
```
cd secure-safe && npm run cy:run
```
##### OPEN CYPRESS LOCALLY
```
cd secure-safe && npm run cy:open
```
