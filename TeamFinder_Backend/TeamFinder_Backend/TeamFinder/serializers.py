from django.contrib.auth.models import User, Group
from rest_framework import serializers
from TeamFinder_Backend.TeamFinder.models import Party

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PartySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Party
        fields = ['url', 'title', 'description', 'game', 'max_players', 'reserved_players']