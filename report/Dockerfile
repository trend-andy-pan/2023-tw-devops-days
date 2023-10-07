FROM --platform=linux/amd64 nikolaik/python-nodejs:python3.9-nodejs18-slim

COPY ./ /app
WORKDIR /app/basic_rendering

RUN pip install -r requirements.txt
RUN npm i
RUN apt-get update -y && apt-get install -y chromium
RUN apt-get install -y fontconfig fonts-wqy-zenhei
RUN fc-cache -fv
