
from django.urls import path
from . import views

urlpatterns = [
    path('', views.insidePage, name='insidePage'),
    path('<int:chaiId>/',views.detail, name='chai_details'),
    path('store/',views.store_view, name='storeVeiw')
]
