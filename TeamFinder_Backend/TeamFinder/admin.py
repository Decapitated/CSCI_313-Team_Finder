from django.contrib import admin
from .models import Party, PartyMember
# Register your models here.
admin.site.register(Party)
admin.site.register(PartyMember)