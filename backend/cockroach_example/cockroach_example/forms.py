from backend.cockroach_example.cockroach_example.models import User
from django.forms import forms

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        widgets = {
            'password': forms.PasswordInput(),
        }