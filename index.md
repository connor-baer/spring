---
layout: home
title: It's Spring!
---

{% for post in site.posts %}
{% assign length = site.posts.size %}
{% assign lengthID = site.posts.size | plus: 1%}
  <div id="js-{{ forloop.index }}" class="post -fixed{% if forloop.index == 1 %} -first{% endif %}{% if forloop.index == length %} -last{% endif %}">
    <span id="{{ post.url | remove: '/' }}">
    {% if forloop.index != 1 %}
      <div class="post-header ctnr-golden">
        <h1 class="post-title">{{ post.title }}</h1>
      </div>
    {% endif %}
    </span>
    <img class="post-image" style="z-index: {{ lengthID | minus: forloop.index }}" src="{{ site.baseurl }}/img/{{post.image}}.jpg" srcset="{{ site.baseurl }}/img/{{post.image}}.jpg 900w, {{ site.baseurl }}/img/{{post.image}}1500w.jpg 1500w, {{ site.baseurl }}/img/{{post.image}}600w.jpg 600w" sizes="(min-width: 768px) 50vw, 100vw">
    <div class="ctnr-wide">
    {{ post.content }}
    </div>
  </div>
{% endfor %}