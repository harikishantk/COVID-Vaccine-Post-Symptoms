from django.shortcuts import render
from django.views.generic.edit import FormView 
from .forms import ContributorForm
from .models import Patient

def form(response):
    form = ContributorForm()
    if response.method == 'POST':
            print(response.POST)
            form = ContributorForm(response.POST, response.FILES)
            if form.is_valid():
                form.save()

    context = {'form':form}
    return render(response, 'contributor_form.html', context)
