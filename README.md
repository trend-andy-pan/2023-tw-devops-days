## Introduction

This is the questionnaire source code for 2023 DevOps Days
If you have any suggestions, please get in touch with us. Thank you!

## Resource

- Grafana
- JamesOsgood/mongodb-grafana (https://github.com/JamesOsgood/mongodb-grafana)
- MongoDB Atlas
- React
- NextUI
- Tailwind CSS
- React Hook Form

## How to run on your local

1. Install docker

2. Go to questionnaires folder

   ```bash
   cd questionnaires
   ```
3. Setup Environment
   ```
   echo "MONGODB_URL=XXXX" > .env
   ```

4. Run Docker images

   ```bash
   make up
   ```

   or

   ```bash
   docker-compose up -d
   ```

5. Run access docker container

   ```bash
   make exec
   ```

   or

   ```bash
   docker exec -it devops-days_questionnaires /bin/bash
   ```

6. Install packages

   ```bash
   npm i
   ```

7. Run CSS monitor

   ```bash
   npm run css
   ```

8. Run develop server (using other term or stop CSS monitor)

   ```bash
   npm start
   ```

9.  Go to website via your browser

   ```
   localhost:8008
   ```

10.  Enjoy!

## How to run grafana on your local

1. Run server via docker-composer

   ```
   docker-compose up -d --remove-orphans
   ```

2. Using default account to login

   ```
   admin
   admin
   ```

3. Setting resource path

4. Go to dashboard

5. Enjoy!
