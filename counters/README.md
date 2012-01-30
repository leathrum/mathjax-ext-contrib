#Extension: counters

Implements LaTeX counters for MathJax.

#Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/counters/counters.js"]
      }
    });

#Usage:

    \newcounter{name}[depend]
    \setcounter{name}{number}
    \addtocounter{name}{number}
    \arabic{name}
    \alph{name}
    \Alph{name}
    \roman{name}
    \Roman{name}
    \value{name}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/counters/sample.html)

The `\value` macro is only valid in the number argument for `\setcounter` and 
`\addtocounter`.

The extension does not implement the `\fnsymbol` or `\usecounter` macros, which only make sense in the context of LaTeX features which MathJax does not support. Similarly, the extension does not implement the standard LaTeX counters, such as page, section, figure, and enumi.

#History

*20 Jan 2012* -- Tom Leatrum  
Moved to GitHub repo, further history tracking there  
*20 Nov 2011* -- Tom Leathrum

