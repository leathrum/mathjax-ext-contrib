# Extension: forminput

Provides HTML `<input>` tag in MathJax math expression
with `\FormInput` macro.

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/contrib/forminput/forminput.js"]
      }
    });

# Usage:

    \FormInput[size][class][value]{name}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/forminput/sample.html)

HTML `id` and `name` attributes given by value in required parameter, 
other attributes given by corresponding optional parameters.

*MUST* use either *native* MathML rendering or MathJax HTML/CSS 
rendering -- will *NOT* work if MathML rendering is handled by a plug-in, 
such as MathPlayer in Internet Explorer.

# History:

*29 Jan 2012* -- Tom Leathrum  
Moved to GitHub repo, further history tracking there  
*28 Dec 2011* -- Tom Leathrum  
a few minor tweaks -- changed macro name from `\Input` to `\FormInput`, added value attribute optional parameter  
*23 Dec 2011* -- Davide Cervonne  

