from django.contrib import admin
from .models import Varietyd,ProductReview,Store,Certificate

# Register your models here.
# customized classes
class ReviewInLine(admin.TabularInline):
    model = ProductReview
    extra = 2

class ChaiVarietyAdmin(admin.ModelAdmin):
    list_display = ('name','type','date_added')
    inlines = [ReviewInLine]

class StoreAdmin(admin.ModelAdmin):
    list_display = ('name','location')
    filter_horizontal = ('variety',)

class CertificationAdmin(admin.ModelAdmin):
    list_display = ('chai','certificate_number')


admin.site.register(Varietyd,ChaiVarietyAdmin)
# admin.site.register(ProductReview,ReviewInLine)
admin.site.register(Store,StoreAdmin)
admin.site.register(Certificate,CertificationAdmin)

