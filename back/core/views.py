from django.shortcuts import render
from .models import Post, Draft
from .serializer import postSerializer, draftSerializer
from rest_framework import viewsets

# Create your views here.


class postsViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = postSerializer


class draftsViewset(viewsets.ModelViewSet):
    queryset = Draft.objects.all()
    serializer_class = draftSerializer
