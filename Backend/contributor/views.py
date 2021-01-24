from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views.generic.edit import FormView 
from .forms import ContributorForm
from django.core import serializers
from django.contrib import messages
from .models import Patient

def form(response):
    form = ContributorForm()
    if response.method == 'POST':
            print(response.POST)
            form = ContributorForm(response.POST, response.FILES)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect('/admin')
                

    context = {'form':form}
    return render(response, 'contributor_form.html', context)


def results(response):
    queryset = Patient.objects.all()
    results = serializers.serialize('json', queryset)
    return HttpResponse(results, content_type="text/json-comment-filtered")

