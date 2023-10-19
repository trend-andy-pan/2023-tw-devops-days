up.report:
	docker-compose up report -d --build

up.web:
	docker-compose up web -d --build

exec.report:
	docker exec -it devops-days_report /bin/bash

exec.web:
	docker exec -it devops-days_web /bin/bash

up.grafana:
	docker-compose up grafana-mongodb-proxy -d --build


exec.grafana:
	docker exec -it devops-days_grafana-mongodb-proxy /bin/bash

down:
	docker-compose down
