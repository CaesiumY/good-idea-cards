
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import postsViewset, draftsViewset

router = DefaultRouter()
router.register('posts', postsViewset)
router.register('drafts', draftsViewset)

urlpatterns = [
    path('', include(router.urls))
]
