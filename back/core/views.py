from django.shortcuts import render
from django.db.models import Q
from .models import Post, Draft
from .serializer import postSerializer, draftSerializer, searchSerializer
from rest_framework import viewsets, filters
import random

# Create your views here.


def isValidQueryParams(param):
    return param != '' and param is not None


def filterQuery(request):
    qs = Post.objects.all()
    searchQuery = request.GET.get('search_query')
    if isValidQueryParams(searchQuery):
        qs = qs.filter(Q(author__icontains=searchQuery) | Q(
            content__icontains=searchQuery) | Q(id__icontains=searchQuery)).distinct()

    return qs


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


class searchViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = searchSerializer

    def get_queryset(self):
        qs = filterQuery(self.request)
        return qs
