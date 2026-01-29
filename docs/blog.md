---
layout: page
title: Blog
eyebrow: Insight
subtitle: Approfondimenti su design, sviluppo e strategia digitale.
permalink: /blog/
---

{% if site.posts.size > 0 %}
<ul class="blog-list">
  {% for post in site.posts %}
  <li class="blog-item">
    <a href="{{ post.url | relative_url }}" class="blog-title">{{ post.title }}</a>
    <span class="blog-date">{{ post.date | date: "%d %b %Y" }}</span>
    <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="lead">Nessun articolo pubblicato al momento. Torna presto.</p>
{% endif %}
