from rest_framework import serializers
from django.contrib.auth.models import User
from TeamFinder.models import Party, PartyMember

class PartySerializer(serializers.ModelSerializer):
    members = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Party
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'