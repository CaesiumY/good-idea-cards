from rest_framework import serializers
from .models import Post, Draft


class postSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class draftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Draft
        fields = '__all__'
