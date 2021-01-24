from django.db import models

# Create your models here.
class Patient(models.Model):
    GENDER = (
        ('M','Male'),
        ('F','Female'),
        ('T','Transgender')
    )

    VACCINE = (
        ('1','Comirnaty'),
        ('2','Moderna COVID-19 Vaccine'),
        ('3','CoronaVac'),
        ('4','COVID-19 Vaccine AstraZeneca'),
        ('5','Sputnik V'),
        ('6','BBIBP-CorV'),
        ('7','EpiVacCorona'),
        ('8','Covaxin')
    )

    SYMPTOMS = (
        ('fatigue','Fatigue'),
        ('headache','Headache'),
        ('pain','Muscle Pain'),
        ('fever','Fever'),
        ('Pain Around the Injection Site' , (
                                        ('swell','Swellness'),
                                        ('red','Redness'),
                                        ('sore','Soreness'),
                                            )
        ),
    )

    name = models.CharField(max_length=30)
    age = models.IntegerField()
    gender = models.CharField(max_length=3,choices=GENDER)
    date = models.DateField()
    allergic = models.TextField(max_length=200, blank = True)
    race = models.CharField(max_length=25)
    vaccine = models.CharField(max_length=10,choices=VACCINE)
    symptoms = models.CharField(max_length=10,choices=SYMPTOMS)
    proof = models.FileField()
    comment = models.TextField(max_length = 200, blank = True)