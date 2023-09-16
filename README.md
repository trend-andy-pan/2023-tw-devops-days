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

3. Run Docker images

   ```bash
   make up
   ```

   or

   ```bash
   docker-compose up -d
   ```

4. Run access docker container

   ```bash
   make exec
   ```

   or

   ```bash
   docker exec -it devops-days_questionnaires /bin/bash
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
