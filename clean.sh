docker-compose down --volumes

sleep 5

# remove all stopped containers
docker rm $(docker ps --filter status=exited -q)

# remove all docker images
# docker rmi $(docker images -a -q)