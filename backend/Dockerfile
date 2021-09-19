FROM python:3.8

COPY flavour_flow ./flavour_flow
COPY requirements.txt ./
COPY certs ./certs

RUN pip install -r requirements.txt

EXPOSE 8080

CMD ["python", "./flavour_flow/manage.py", "runserver", "0.0.0.0:8080"]