---
layout: layout/default
title: Home
tags: home
---

# Does it Beep?

## Fans

<ul class="teaser-links">
  {%- for fan in collections.fan -%}
    <li>
      <h6>
        <a href="{{ fan.url }}">{{ fan.data.title }}</a>
      </h6>
      <p>{{ fan.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>

## Power Supplies

<ul class="teaser-links">
  {%- for ups in collections.ups -%}
    <li>
      <h6>
        <a href="{{ ups.url }}">{{ ups.data.title }}</a>
      </h6>
      <p>{{ ups.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>

## About

Some otherwise very well liked home appliances do ALL THIS UNREASONABLE BEEPING that might upset you or your dog or whoever. You can use Wirecutter or something to read more detailed reviews and recommendations like a regular modern consumer, but really, does the damn thing beep or not.

You can contribute your own agonies by opening a [new Github issue](https://github.com/axfelix/doesitbeep/issues/new/choose), which this site can automatically build from!