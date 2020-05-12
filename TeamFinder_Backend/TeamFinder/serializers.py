from rest_framework import serializers
from TeamFinder.models import Party, PartyMember

class PartySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    owner = serializers.IntegerField(read_only=True)
    created = serializers.DateField(read_only=True)
    title = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    game = serializers.CharField(read_only=True)
    max_players = serializers.IntegerField(read_only=True)
    reserved_players = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        return Party.objects.create(**validated_data)