**initial.js**
==========
Simple jQuery plugin to make Gmail like text avatars for profile pictures.

---

[Demo][1]
--
Browser compatibility
---

 - Chrome
 - Firefox
 - Opera 9+
 - Safari 3.2+
 - iOS Safari 3.2+
 - Android Browser 3+ 

Usage
--
 
**Markup**

>  &lt;img data-name=&quot;Steve&quot; class=&quot;profile&quot;/&gt;

**jQuery code**

 > $('.profile').initial(); 


  [1]: http://judelicio.us/initial.js/
  
  Options
--
**Below options can be overridden with data-attributes inside the image element. Refer to the "data-attribute" column for related data-attribute for each option**

| Option      | data-attribute   | Description                                                    | Default                                                                                            |
|-------------|------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| name        | data-name        | Name of the user which the profile picture should be generated | Name                                                                                               |
| height      | data-height      | Height of the picture                                          | 100                                                                                                |
| width       | data-width       | Width of the picture                                           | 100                                                                                                |
| charCount   | data-char-count  | Number of characherts to be shown in the picture.              | 1                                                                                                  |
| textColor   | data-text-color  | Color of the text                                              | #ffffff                                                                                            |
| backgroundColor   | data-background-color  | Color of the background.  Randomised based on seed from the name if not given.                                              | null                                                                                            |
| fontSize    | data-font-size   | Font size of the character(s)                                  | 60                                                                                                 |
| fontWeight  | data-font-weight | Font weight of the character(s)                                | 400                                                                                                |
| radius      | data-radius      | Rounded corners                                                | 0                                                                                                  |
| seed        | data-seed        | Number to randomize the background color                       | 0                                                                                                  |

