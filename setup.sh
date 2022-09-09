cd api
npm install --legacy-peer-deps

cd ../client
npm install  --legacy-peer-deps

cd ..
docker-compose up --build

