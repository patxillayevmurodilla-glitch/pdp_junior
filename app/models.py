from django.db import models

class Ustoz(models.Model):
    img = models.ImageField()
    name = models.CharField()
    text = models.TextField()

    def __str__(self):
        return self.name


class Contact(models.Model):
    name = models.CharField()
    course = models.CharField(null=True, blank=True)
    phone_number = models.CharField()

    def __str__(self):
        return self.name

class Portfolio(models.Model):
    img = models.ImageField()
    title = models.CharField()
    author = models.CharField()
    img_author = models.ImageField()
    description = models.TextField()

    def __str__(self):
        return self.title
