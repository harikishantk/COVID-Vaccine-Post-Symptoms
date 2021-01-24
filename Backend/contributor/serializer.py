from rest_framework import serializers 
from . models import *

class ReactSerializer(serializers.ModelSerializer): 
	class Meta: 
		model = Patient
		fields = ['name', 'age', 'gender', 'date', 'allergic', 'race', 'vaccine', 'symptoms', 'proof', 'comment'] 
