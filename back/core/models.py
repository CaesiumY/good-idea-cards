from django.db import models

# Create your models here.


class Post(models.Model):
    author = models.CharField(max_length=10)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add="true")

    def __str__(self):
        return '{}: {}'.format(self.author, self.content)


class Draft(models.Model):
    author = models.CharField(max_length=10)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add="true")

    def __str__(self):
        return '{}: {}'.format(self.author, self.content)
