FROM python:3.8

COPY cockroach_example ./cockroach_example
COPY requirements.txt ./
COPY certs ./certs

RUN pip install -r requirements.txt

EXPOSE 8080

CMD ["python", "./cockroach_example/manage.py", "runserver", "0.0.0.0:8080"]