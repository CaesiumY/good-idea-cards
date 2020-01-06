
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import postsViewset, draftsViewset, searchViewset

router = DefaultRouter()
router.register('posts', postsViewset)
router.register('drafts', draftsViewset)
router.register('search', searchViewset)

urlpatterns = [
    path('', include(router.urls))
]
