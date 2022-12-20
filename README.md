# My-own-secret-cafe

서울인근 공부하기좋은 카페리스트 확보를 위해 만든 프로젝트입니다.

카페내의 콘센트의 갯수와 세미나룸 보유여부 오픈시간,마감시간 등을 제공합니다.

# 목차

1. [사용기술](#사용기술)
2. [프로젝트 ERD](#project-erd)
3. [엔드포인트](#end-point)
4. [프로젝트 실행방법](#프로젝트-실행방법)

# 사용기술

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">

<img src="https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=amazon ec2&logoColor=white"> <img src="https://img.shields.io/badge/amazon rds-527FFF?style=for-the-badge&logo=amazon rds&logoColor=white"> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"><img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white">

# Project ERD

<img width="847" alt="image" src="https://user-images.githubusercontent.com/100751719/208654572-46c9ed05-15e8-4842-98b3-8290a29bd0cb.png">

# End Point

[swagger](http://3.34.188.98/api/docs)로 대체합니다.

# 프로젝트 실행방법

### 실행전 준비사항

1. docker-compose가 설치되어 있어야합니다.
2. mysql이 설치되어 있어야합니다.

### 실행방법

1. sample.env를 보고 .env파일에 필요한 정보를 입력합니다

2. docker-compose로 빌드합니다.

```
docker-compose up --build
```
