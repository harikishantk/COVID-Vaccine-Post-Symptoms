from django.db import models


# Create your models here.
class Patient(models.Model):
    GENDER = (
        ('M','Male'),
        ('F','Female'),
        ('T','Transgender')
    )

    VACCINE = (
        ('1','Pfizer'),
        ('2','Moderna COVID-19 Vaccine'),
    )


    name = models.CharField(max_length=30)
    age = models.IntegerField()
    gender = models.CharField(max_length=3,choices=GENDER)
    date = models.DateField()
    allergic = models.TextField(max_length=200, blank = True)
    race = models.CharField(max_length=25)
    vaccine = models.CharField(max_length=10,choices=VACCINE)
    is_headache = models.BooleanField("Headache",default = False)
    is_fatigue = models.BooleanField("Fatigue",default = False)
    is_muscle_pain = models.BooleanField("Muscle Pain",default = False)
    is_fever = models.BooleanField("Fever",default = False)
    is_pain_around = models.BooleanField("Pain Around Injection Site",default = False)
    proof = models.FileField()
    comment = models.TextField(max_length = 200, blank = True)