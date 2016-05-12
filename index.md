---
layout: default
title: Home
---

<article class="ctnr-wide content">
  {% for post in site.posts %}
  <div class="post">
    <img class="post-image" src="{{ site.baseurl }}/img/{{post.image}}.jpg" srcset="{{ site.baseurl }}/img/{{post.image}}.jpg 900w, {{ site.baseurl }}/img/{{post.image}}1500w.jpg 1500w, {{ site.baseurl }}/img/{{post.image}}600w.jpg 600w" sizes="(min-width: 768px) 50vw, 100vw">
    <span name="{{ post.title | downcase | url_encode }}">
    {{ post.content }}
    </span>
  </div>
  {% endfor %}
</article>