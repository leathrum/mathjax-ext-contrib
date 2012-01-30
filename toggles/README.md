# Extension: toggles

Implements LaTeX toggles for MathJax, based on the _etoolbox_ implementation -- see
[_etoolbox_](http://mirrors.ctan.org/macros/latex/contrib/etoolbox/etoolbox.pdf) documentation on CTAN.

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/toggles/toggles.js"]
      }
    });

# Usage:

    \newtoggle{name}
    \providetoggle{name}
    \settoggle{name}{value}
    \toggletrue{name}
    \togglefalse{name}
    \iftoggle{name}{math}{math}
    \nottoggle{name}{math}{math}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/toggles/sample.html).

# History:

*29 Jan 2012* -- Tom Leathrum  
Moved to GitHub repo, further history tracking there  
*29 Nov 2011* -- Tom Leathrum  
fixed problem with conditional processing (in first version, output was
conditional but both options were processed regardless of toggle)  
*20 Nov 2011* -- Tom Leathrum


