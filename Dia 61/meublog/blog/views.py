from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms import PostForm

def home(request):
    posts = Post.objects.all()
    return render(request, 'blog/home.html', {'posts': posts})

def post_detail(request, id):
    post = get_object_or_404(Post, id=id)
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
    
def edit_post(request, id):
    post = get_object_or_404(Post, id=id)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('post_detail', id=post.id)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/edit_post.html', {'form': form})
        