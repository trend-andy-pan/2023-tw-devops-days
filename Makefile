up.report:
	docker-compose up report -d --build

up.web:
	docker-compose up web -d --build

exec.report:
	docker exec -it devops-days_report /bin/bash

exec.web:
	docker exec -it devops-days_web /bin/bash

down:
	docker-compose down
