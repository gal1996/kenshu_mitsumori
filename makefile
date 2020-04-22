start:
	docker build . -t original_alpine_nginx  
	docker run -d -p 80:80 --name sample_container original_alpine_nginx

stop:
	docker stop sample_container
	docker rm -f sample_container
	docker rmi original_alpine_nginx

