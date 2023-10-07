up.report:
	docker-compose up report -d --build

exec.report:
	docker exec -it devops-days_report /bin/bash

down:
	docker-compose down
