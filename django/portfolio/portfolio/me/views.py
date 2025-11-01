from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def aboutme(request):
    # return HttpResponse("it me hi")
    return render(request, 'me.html')