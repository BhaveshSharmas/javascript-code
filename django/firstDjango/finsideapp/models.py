from django.db import models

from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Varietyd(models.Model):
    choices = [
        ("ML","MASALA"),
        ("EL","ELAICHI"),
        ("SM","SIMPLE"),
        ("BT","BLACKTEA"),
    ]
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='cars/')
    date_added = models.DateField(default=timezone.now)
    type = models.CharField(max_length=2,choices=choices)
    description = models.TextField(default='')
    price = models.TextField(default=0)

def __str__(self):
    return self.name

# 1 to Many
class ProductReview(models.Model):
    chai = models.ForeignKey(Varietyd,on_delete=models.CASCADE,related_name="reviews")
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    rating = models.IntegerField()
    commect = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)
    
def __str__(self):
    return f'{self.user.username} review for {self.chai.name}'

# many to many

class Store(models.Model):
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=50)
    variety = models.ManyToManyField(Varietyd,related_name='stores')

def __str__(self):
    return self.name

# one to one

class Certificate(models.Model):
    chai = models.OneToOneField(Varietyd,on_delete=models.CASCADE, related_name='certificate')
    certificate_number = models.CharField(max_length=50)
    issued_date = models.DateTimeField(default=timezone.now)
    valit_until = models.DateTimeField()

def __str__(self):
    return f'certificate for {self.name.chai}'
