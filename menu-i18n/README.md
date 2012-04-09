# Extension: menu-i18n

Provides facilities for internationalization of the MathJax contextual menu,
with string substitution data specified in JavaScript or JSON format.

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

Three samples are provided, each of which demonstrates a different way of using this extension for string substitution
in the MathJax menu.  The samples do not actually internationalize the menu, but instead each demonstrates with a few
simple string substitutions into the menu labels.  The implication for internationalization should be clear:  the
string substitutions can be used to translate the menu labels into other languages.

The [first sample](http://leathrum.github.com/mathjax-ext-contrib/menu-i18n/sample.html) uses a static
configuration as shown above, loading the menu label substitutions in the form of a JavaScript file with
the `menuTranslationFile` configuration field.  This is the simplest approach, but each language translation
needs its own HTML page with each HTML page loading a different JavaScript file.

The [second sample](http://cs.jsu.edu/mathjax-ext/github/menu-i18n/sample2/sample2.html) uses a server-side PHP script
to generate the JavaScript dynamically.  In this case, the PHP script wraps the MathJax-required JavaScript header
and footer lines around a JSON file specified in a URL parameter. 
A minor hack is needed in this sample:  the `menuTranslationFile` URL in the configuration points to the PHP
script with the URL parameter, so the URL ends in `&m.js` in order to "trick" MathJax into thinking that this
is an ordinary JavaScript file of the sort loaded in the first sample.
(Note that the link to this sample is different from other samples here -- the GitHub `gh-pages` branch for project
pages does not support PHP, so the link is to the master branch mirror on `cs.jsu.edu`, which does support PHP.)

The [third sample](http://leathrum.github.com/mathjax-ext-contrib/menu-i18n/sample3.html) uses a dynamic client-side
configuration of the menu label substitutions.  In this case, the `modifymenu` extension is also used, to add a 
submenu item and trigger different substitutions based on selections in that submenu.  The first two substitution 
options use short substitutions coded directly into the JavaScript in the HTML page, and the third option loads
a substitution (the same one as in the first sample) from a separate JavaScript file.  The implied use for 
internationalization is that a menu can be added allowing the user to select a language.

Other variations on the approaches seen in these samples are possible, such as:  

- The PHP script in the second sample could select a JSON file based on the primary locale value listed in the 
HTTP `Accept-Language` header.
- The PHP script could just return the primary locale value from the `Accept-Language` header to the client and let 
client-side JavaScript select and load a JavaScript file with the menu label substitutions.
- The PHP script could return the full list of locales from the `Accept-Language` header to the client, and 
the options in the submenu in the third sample could be generated based on that list of locales, with each option
loading a different JavaScript file.

## Notes on MathJax versions:

This extension has been tested with MathJax versions 1.1 and 2.0 on the CDN.

# History:

*6 Apr 2012* -- initial upload to GitHub  
further history maintained there

