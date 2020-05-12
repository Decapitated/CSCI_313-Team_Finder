from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser


from django.contrib.auth.models import User
from .models import Party, PartyMember
from .serializers import PartySerializer

# Create your views here.
def index(request):
    return HttpResponse('Hello world!')

def get_party(request, pk):
    if request.method == 'GET':
        try:
            party = Party.objects.get(pk = pk)
            serializer = PartySerializer(party)
            return JsonResponse(serializer.data)
        except Party.DoesNotExist:
            return HttpResponse(status=404)