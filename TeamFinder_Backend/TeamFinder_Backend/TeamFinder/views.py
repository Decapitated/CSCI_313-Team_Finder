#from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from rest_framework import viewsets, generics
from rest_framework import permissions
from TeamFinder_Backend.TeamFinder.serializers import UserSerializer, GroupSerializer, PartySerializer, PartyMemberSerializer
from TeamFinder_Backend.TeamFinder.models import Party, PartyMember

class UserList(generics.ListAPIView):
    """
    API endpoint that allows users to be viewd or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class PartyList(generics.ListCreateAPIView):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)

class PartyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
    permission_classes = [permissions.IsAuthenticated]

def get_party_members(req, party_id):
    filtered = PartyMember.objects.filter(party_id=party_id)
    serializer = PartyMemberSerializer(filtered, many = True)
    return JsonResponse({'members': serializer.data})