---
layout: page
title: Blog
eyebrow: Insight
subtitle: Approfondimenti su design, sviluppo e strategia digitale.
permalink: /blog/
pagination:
  enabled: true
  collection: posts
  per_page: 3
---

{% if paginator.posts.size > 0 %}
<ul class="blog-list">
  {% for post in paginator.posts %}
  <li class="blog-item">
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="Anteprima {{ post.title }}" class="blog-thumb" />
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="blog-title">{{ post.title }}</a>
    <span class="blog-date">{{ post.date | date: "%d %b %Y" }}</span>
    <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
  </li>
  {% endfor %}
</ul>

<nav class="pagination">
  {% if paginator.previous_page %}
  <a class="pagination-link" href="{{ paginator.previous_page_path | relative_url }}">← Pagina precedente</a>
  {% endif %}
  <span class="pagination-status">Pagina {{ paginator.page }} di {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
  <a class="pagination-link" href="{{ paginator.next_page_path | relative_url }}">Pagina successiva →</a>
  {% endif %}
</nav>
{% else %}
<p class="lead">Nessun articolo pubblicato al momento. Torna presto.</p>
{% endif %}
