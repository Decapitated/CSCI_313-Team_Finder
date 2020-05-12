from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('party/<int:pk>/', views.get_party, name='get_party'),
    path('user/<int:pk>/', views.get_user, name='get_user')
]