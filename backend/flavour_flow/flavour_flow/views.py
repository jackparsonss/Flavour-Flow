from django.http import JsonResponse, HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import View, CreateView
from django.views.decorators.csrf import csrf_exempt
from django.db import Error, IntegrityError
from django.db.transaction import atomic
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from psycopg2 import errorcodes
import json
import sys
import time

from .models import *
from .forms import *


def home(request):
    return render(request, '', {})


class SignupView(CreateView):
    def post(self, request, *args, **kwargs):
        template_name = ''
        form = SignupForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password1')
            uuid_object = uuid.uuid1()
            username = uuid_object.hex

            try:
                user = User.object.create_user(username=username,email=email, password=password)
                result = "You've signed up successfully"
                return render(request, template_name, {'form':form, 'result':result})

            except IntegrityError:
                error = 'This email is already being used'
                return render(request, template_name, {'form':form, 'result':result})

        return render(request, template_name, {'form':form})

    def get(self, request, *args, **kwargs):
        template_name = ''
        form = SignupForm(request.POST)
        return render(request, template_name, {'form':form})


class LoginView(View):
    def post(self, request, *args, **kwargs):
        template_name = ''
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(request, email=email, password=password)

            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                return render(request, template_name, {'context': "Incorrect email or password"})

    def get(self, request, *args, **kwargs):
        template_name = ''
        form = LoginForm(request.POST)
        return render(request, template_name, {'context':'get'})

