from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player

def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password_confirm = data.get("password_confirm", "").strip()
    if not username or not password:
        return JsonResponse({
            'result' : 'username and password cannot be null'
        })
    if password != password_confirm:
        return JsonResponse({
            'result' : 'The passwords you entered do not match'
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result' : 'username cannot be used'
        })
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo="https://cdn.acwing.com/media/article/image/2021/11/18/1_ea3d5e7448-logo64x64_2.png")
    login(request, user)
    return JsonResponse({
        'result' : 'success',
    })
