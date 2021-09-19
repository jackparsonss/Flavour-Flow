import uuid
import dataclasses
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator


class UserManager(BaseUserManager):
    def create_user(self, username=None, password=None, email=None):
        if not email:
            raise ValueError('Users must have an email address')
        
        user = self.model(username=username, email=email,)
        user.set_password(password)
        user.save(using=self._db)
        return user


@dataclasses.dataclass
class User(AbstractBaseUser, PermissionsMixin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __str__(self):
        return self.username

    username = models.CharField(
        primary_key=True,
        verbose_name='username',
        max_length=150,
        unique=True,
    )
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    
    objects = UserManager()


class FoodItem(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    name = models.CharField(max_length=50)
    aisle = models.CharField(max_length=30)
    image = models.ImageField()


class Ingredient(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    food_item = models.ForeignKey(
        FoodItem, on_delete=models.CASCADE, related_name="food_item2")

    amount = models.DecimalField(max_digits=5, decimal_places=2)
    unit = models.CharField(max_length=20)
    name_amount_unit = models.CharField(max_length=80)


class Recipe(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    title = models.CharField(max_length=100)
    image = models.ImageField()
    username = models.ManyToManyField(User, blank=True)

    ingredients = models.ManyToManyField(Ingredient, related_name="ingred")
    ingredient_cnt = models.IntegerField()

    missed_ingredients = models.ManyToManyField(Ingredient, related_name="missingred")
    missed_ingredient_cnt = models.IntegerField()

    used_ingredients = models.ManyToManyField(Ingredient, related_name="usedingred")
    used_ingredient_cnt = models.IntegerField()

    saved_at = models.DateField(blank=True)
