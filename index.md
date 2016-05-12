---
layout: default
title: Home
---

<article class="ctnr-wide content">
  {% for post in site.posts %}
  <div class="post">
    <span name="{{ post.title | downcase | url_encode }}">
    {{ post.content }}
    </span>
  </div>
  {% endfor %}
</article>