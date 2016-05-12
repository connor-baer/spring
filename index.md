---
layout: default
title: Home
---

<article class="ctnr-wide content">
  {% for post in site.posts %}
  <div class="post">
    <img class="post-image" src="{{ post.image }}">
    <span name="{{ post.title | downcase | url_encode }}">
    {{ post.content }}
    </span>
  </div>
  {% endfor %}
</article>