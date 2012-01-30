# Extension: everymath

Provides `\everymath` macro to place tokens at beginning of all math
environments.

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/everymath/everymath.js"]
      }
    });

# Usage:

    \everymath{tokens}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/everymath/sample.html)

Tokens given in `tokens` parameter are placed at beginning of all
math environments.

# History:

*29 Jan 2012* -- Tom Leathrum  
Moved to GitHub repo, further history tracking there  
*6 Jan 2012* -- Davide Cervonne  

