from django.db import models

# Create your models here.
class Party(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    game = models.CharField(max_length=100)
    max_players = models.IntegerField()
    reserved_players = models.IntegerField(default=0)

    class Meta:
        ordering = ['created']