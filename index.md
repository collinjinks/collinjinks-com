---
layout: default
custom-css: home
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

![Image](https://dummyimage.com/100x100/2ac3ae/feffff?font=bebas&retina=1&text=Image+1)
![Image](https://dummyimage.com/100x100/2ac3ae/feffff?font=bebas&retina=1&text=Image+2)

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwI-iirY4eU?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</figure>

[More from Collin's YouTube Channel >>](https://www.youtube.com/channel/UCBfqD5p8R6vZYgHdX6zY7YQ)
{: class="more"}

</section>

<section id="contact-me">

<h2>Contact me</h2>

<form>
    <input type="text" placeholder="Name (required)" required />
    <input type="email" placeholder="Email (required)" required />
    <textarea placeholder="Message (required)" required ></textarea>
    <button>Send</button>
</form>

</section>