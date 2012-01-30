# Extension: preamble

Allows TeX preamble section in MathJax configuration.

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/contrib/preamble/preamble.js"]
      }
    });

# Usage:

    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {
        preamble: [
          "TeX preamble definition"
        ]
      }
    });
    </script>

See [sample](http://leathrum.github.com/mathjax-ext-contrib/preamble/sample.html).

The `preamble` option accepts a comma-separated list
of strings containing TeX definitions or similar code. 

Backslashes must be escaped since the TeX definitions
are within JavaScript strings -- for example, 
the TeX definition `\def\RR{\mathbf{R}}`
must be entered as the JavaScript string
`"\\def\\RR{\\mathbf{R}}"`.

If any TeX code within the preamble strings generates output, 
the extension issues a MathJax warning.

# History:

*29 Jan 2012* -- Tom Leathrum  
Moved to GitHub repo, further history tracking there  
*29 Nov 2011* -- Davide Cervonne

