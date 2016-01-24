**initial.js**
==========
Simple jQuery plugin to make Gmail like text avatars for profile pictures.
Forked from
[judesfernando/initial.js](https://github.com/judesfernando/initial.js).  This
version uses bitmap data from canvas because it makes it a lot easier to pull in
custom fonts (`@font-face`).

# Usage

## Markup

>  &lt;img data-name=&quot;Eazy E&quot; class=&quot;profile&quot;/&gt;

## jQuery code

> $('.profile').initial();


# Options

Below options can be overridden with data-attributes inside the image
element. Refer to the "data-attribute" column for related data-attribute for
each option.

| Option          | data-attribute        | Description                          | Default          |
|-----------------|-----------------------|--------------------------------------|------------------|
| name            | data-name             | A name, like "Firstname Lastname"[1] | "Jane Doe"       |
| height          | data-height           | Desired height of the picture        | "100px"          |
| width           | data-width            | Width of the picture                 | "100px"          |
| textColor       | data-text-color       | Color of the text                    | "#ffffff"        |
| backgroundColor | data-background-color | Color of the background              | "#222222"        |
| fontSize        | data-font-size        | `font-size` to use                   | 50               |
| fontFamily      | data-font-family      | `font-family` to use                 | "sans-serif"     |



[1]:
Yeah, I've read
[Falsehoods Programmers Believe About Names](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
and it troubles me.  The regular expression won't work at all if there is only a
firstname or lastname.  This is just a quick hack for a project I'm working on,
take a look at the regular expression used to split a name into initials if you
want to get it to do something fancier.
