from django.urls import path, include
from . import views 

app_name = 'contributor'
urlpatterns = [ 
    path('form/', views.form, name='form'),
    path('results/', views.results, name='results')
]
