#Extension: counters

Implements LaTeX counters for MathJax.

#Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["https://raw.github.com/leathrum/mathjax-ext-contrib/master/counters/counters.js"]
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

The `\value` macro is only valid in the number argument for `\setcounter` and 
`\addtocounter`.

The extension does not implement the `\fnsymbol` or `\usecounter` macros, which only make sense in the context of LaTeX features which MathJax does not support. Similarly, the extension does not implement the standard LaTeX counters, such as page, section, figure, and enumi.

#History

*20 Nov 2011* -- Tom Leathrum

