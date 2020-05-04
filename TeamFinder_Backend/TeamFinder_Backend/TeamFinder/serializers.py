from django.contrib.auth.models import User, Group
from rest_framework import serializers
from TeamFinder_Backend.TeamFinder.models import Party, PartyMember

class UserSerializer(serializers.ModelSerializer):
    #party = serializers.PrimaryKeyRelatedField(many = True, queryset = Party.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username']

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

class PartySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source = 'owner.username')
    class Meta:
        model = Party
        fields = ['id', 'owner', 'created', 'title', 'description', 'game', 'max_players', 'reserved_players']

class PartyMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartyMember
        fields = ['party', 'member']