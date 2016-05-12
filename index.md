---
layout: default
title: Home
---

<article class="posts">
  {% for post in site.posts %}
  <div class="post">
    <a name="{{ post.title | downcase | url_encode }}"><h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>
    
    {{ post.content }}
  </div></a>
  {% endfor %}
</article>