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
- React Icons
- kamranahmedse/developer-roadmap (https://github.com/kamranahmedse/developer-roadmap)
- react-chartjs-2

## How to run on your local

1. Install docker

2. Setup Environment

   ```
   echo "" > .env
   ```

3. Run Docker images

   ```bash
   make up.web
   ```

   or

   ```bash
   docker-compose up web -d
   ```

4. Run access docker container

   ```bash
   make exec.web
   ```

   or

   ```bash
   docker exec -it devops-days_web /bin/bash
   ```

5. Install packages

   ```bash
   npm i
   ```

6. Run CSS monitor

   ```bash
   npm run css
   ```

7. Run develop server (using other term or stop CSS monitor)

   ```bash
   npm start
   ```

8. Go to website via your browser

   ```
   localhost:8008
   ```

9. Enjoy!

## How to run grafana on your local

1. Setup Environment

   ```
   echo "MONGODB_URL=XXX" > .env
   echo "GF_SECURITY_ADMIN_USER=YYY" >> .env
   echo "GF_SECURITY_ADMIN_PASSWORD=ZZZ" >> .env
   ```

2. Run server via docker-composer

   ```
   docker-compose up -d --remove-orphans
   ```

3. Using default account to login

   ```
   user: YYY
   password: ZZZ
   ```

4. Setting resource path

5. Go to dashboard

6. Enjoy!
