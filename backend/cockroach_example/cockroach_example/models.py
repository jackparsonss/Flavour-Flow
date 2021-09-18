from django.db import models
import uuid

class User(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=32)
    created_at = models.DateField()


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
        FoodItem, on_delete=models.CASCADE)

    amount = models.DecimalField(max_digits=5, decimal_places=2)
    unit = models.CharField(max_field=20)
    name_amount_unit = models.CharField(max_field=80)


class Recipe(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    title = models.CharField(max_length=100)
    image = models.ImageField()
    user_id = models.ManyToManyField(User, blank=True)

    ingredients = models.ManyToManyField(Ingredient)
    ingredient_cnt = models.IntegerField()

    missed_ingredients = models.ManyToManyField(Ingredient)
    missed_ingredient_cnt = models.IntegerField()

    used_ingredients = models.ManyToManyField(Ingredient)
    used_ingredient_cnt = models.IntegerField()

    saved_at = models.DateField(blank=True)


# class Customers(models.Model):
#     id = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False)
#     name = models.CharField(max_length=250)


# class Products(models.Model):
#     id = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False)
#     name = models.CharField(max_length=250)
#     price = models.DecimalField(max_digits=18, decimal_places=2)


# class Orders(models.Model):
#     id = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False)
#     subtotal = models.DecimalField(max_digits=18, decimal_places=2)
#     customer = models.ForeignKey(
#         Customers, on_delete=models.CASCADE, null=True)
#     product = models.ManyToManyField(Products)
