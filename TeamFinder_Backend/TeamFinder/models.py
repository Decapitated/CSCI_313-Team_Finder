from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Party(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 400)
    game = models.CharField(max_length = 100)
    max_players = models.IntegerField()
    reserved_players = models.IntegerField()

class PartyMember(models.Model):
    party = models.ForeignKey(Party, related_name='members', on_delete=models.CASCADE)
    member = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.member.username