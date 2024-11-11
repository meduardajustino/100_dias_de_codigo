from django.shortcuts import render, get_object_or_404, redirect
from .models import Post

def home(request):
    posts = Post.objects.all()
    return render(request, 'blog/home.html', {'posts': posts})

def post_detail(request, id):
    post = get_object_or_400(Post, id=id)
    return render(request, 'blog/post_detail.html', {'post': post})

def new_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            form = PostForm()
            return render(request, 'blog/new_post.html', {'form': form})