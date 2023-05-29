---
layout: default
custom-css:
    - lightbox.min
    - home
custom-js:
    - lightbox.min
end-of-body-script: site/contact-form.js
---

<section>
    <img src="{{ '/assets/site/hero.jpg' | relative_url }}" />
    <div>
        <h1>Collin Jinks</h1>
        <h2>Pianist, Pedagogue</h2>
    </div>
</section>

<section markdown="1">

{% include home-page-summary.md %}

[Read more about Collin >>]({{ site.baseurl }}{% link bio.md %})
{: class="more"}

</section>

<section id="media" markdown="1">

<div id="image-gallery">
{%- for image in site.data.image-gallery -%}
    {%- assign url = 'assets/media/' | append: image.image | relative_url -%}
    <a href="{{ url }}" data-jslghtbx="{{ url }}" data-jslghtbx-group="a" data-jslghtbx-caption="<a href='{{ url }}' download class='download'>Download image</a>"><img src="{{ 'assets/media/' | append: image.thumb | relative_url }}" /></a>
{%- endfor -%}
</div>
<script>
    var lightbox = new Lightbox();
    lightbox.load();
</script>

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwI-iirY4eU?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</figure>

[More from Collin's YouTube Channel >>](https://www.youtube.com/channel/UCBfqD5p8R6vZYgHdX6zY7YQ)
{: class="more"}

</section>

<section id="contact-me">

<h2>Contact me</h2>

<form id="contact-form" action="https://formspree.io/f/xvonnywb" method="POST">
    <input type="text" id="name" name="name" placeholder="Name (required)" required />
    <input type="email" id="email" name="email" placeholder="Email (required)" required />
    <textarea name="message" placeholder="Message (required)" required ></textarea>
    <input type="text" name="_gotcha" class="gotcha" />
    <input type="submit" name="submit" value="Send" />
    <div id="contact-form-success" class="contact-form-response">{% include site/contact-me-form-submission-response-success.md %}</div>
    <div id="contact-form-failure" class="contact-form-response">{% include site/contact-me-form-submission-response-failure.md %}</div>
</form>

</section>
