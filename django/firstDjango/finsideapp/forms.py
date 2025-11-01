from django import forms
from .models import Varietyd

class VarietyForm(forms.Form):
    chai_variety = forms.ModelChoiceField(queryset=Varietyd.objects.all(), label = "Select_Chai_Variety")