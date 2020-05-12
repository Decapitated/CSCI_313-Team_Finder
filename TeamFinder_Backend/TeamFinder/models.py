from django.db import models

# Create your models here.
class Party(models.Model):
    owner = models.CharField(max_length = 100)
    created = models.DateField(auto_now_add = True)
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 400)
    game = models.CharField(max_length = 100)
    max_players = models.IntegerField()
    reserved_players = models.IntegerField()

class PartyMember(models.Model):
    party = models.IntegerField()
    member = models.CharField(max_length = 100)