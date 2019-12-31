from django.shortcuts import render
from .models import Post, Draft
from .serializer import postSerializer, draftSerializer
from rest_framework import viewsets, filters
import random

# Create your views here.


def pickRandom():
    return random.randrange(1, Post.objects.all().count() + 1)


class postsViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = postSerializer

    def get_queryset(self):
        return Post.objects.all().filter(id=pickRandom())


class draftsViewset(viewsets.ModelViewSet):
    queryset = Draft.objects.all()
    serializer_class = draftSerializer
