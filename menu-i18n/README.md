# Extension: menu-i18n

Provides facilities for internationalization of the MathJax contextual menu,
with string substitution data specified in a JSON file.

This extension is EXPERIMENTAL -- use with caution.

# Configuration:

    MathJax.Hub.Config({
        MathMenu: {
            menuTranslationFile: "menudata.js"
        },
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/menu-i18n/menu-i18n.js"]
    });

# Usage:

File `menudata.js`:

    // MathJax header and footer lines REQUIRED
    // change only URL in loadComplete() to match this file
    MathJax.Menu.ITEM.prototype.labelTranslations =
    // begin JSON menu label translation data
    {
        "Original Menu Item Label Text" : "Replacement Text", ...
    }
    // end JSON data
    ; 
    MathJax.Ajax.loadComplete("menudata.js");

See [sample](http://leathrum.github.com/mathjax-ext-contrib/menu-i18n/sample.html)
and [second sample](http://leathrum.github.com/mathjax-ext-contrib/menu-i18n/sample2.html)

This extension has been tested with MathJax versions 1.1 and 2.0 on the CDN.

# History:

*6 Apr 2012* -- initial upload to GitHub  
further history maintained there

