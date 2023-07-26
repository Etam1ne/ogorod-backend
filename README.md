# About
This server side of my part-educational application with purpose of collecting Information from the microcontrollers of my Internet of Things (IoT) network. The microcontrollers are NodeMCUs with quite simple code written on C++. Also using Clean Architecture principles.
### Technologies used:
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)

### Structure
```
├───src
│   ├───controllers
│   ├───core
│   │   ├───abstract
│   │   ├───dtos
│   │   └───entities
│   ├───frameworks
│   │   └───data-services
│   │       └───mongo
│   │           └───models
│   ├───services
│   │   └───data-services
│   └───use-cases
│       └───soil-moisture
└───test
```
