#! /bin/bash

git pull origin main

npm install

npx vite build
