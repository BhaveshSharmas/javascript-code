from django.shortcuts import render
from .models import Varietyd,Store
from django.shortcuts import get_object_or_404
from .forms import VarietyForm

def insidePage(request):
    datas = Varietyd.objects.all()
    return render(request, 'finsideapp/f.html',{'datas': datas})

def detail(request,chaiId):
    chai = get_object_or_404(Varietyd,pk=chaiId)
    return render(request,'finsideapp/detail.html',{'chai':chai})

def store_view(request):
    store = None
    if request.method == 'POST':
        form = VarietyForm(request.POST)
        if form.is_valid():
            chai_variety = form.cleaned_data['chai_variety']
            store = Store.objects.filter(variety=chai_variety)
    else:
        form = VarietyForm()
    return render(request, 'finsideapp/form.html',{'store':store, 'form':form})


# Create your views here.
