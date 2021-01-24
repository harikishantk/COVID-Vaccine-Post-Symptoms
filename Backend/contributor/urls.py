from django.urls import path
from . import views 

app_name = 'contributor'
urlpatterns = [ 
    path('form/', views.form, name='form'),
]
