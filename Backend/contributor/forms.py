from django import forms 
from .models import Patient

# creating a form 
class ContributorForm(forms.ModelForm): 
	class Meta:
            model = Patient
            fields = '__all__'