from django.contrib.auth.models import User

User.objects.filter(username='bhasha').exists()