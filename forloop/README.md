# Extension: forloop

Implements simple for-loop iteration for MathJax, with special handling for arrays.

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/forloop/forloop.js"]
      }
    });

# Usage:

    \forloop[step]{start}{stop}{counter}{code}
    \ForArray[step]{start}{stop}{counter}{code}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/forloop/sample.html)

The `\forloop` macro does *not* work well with `array` environments, because
the `&` and `\\` special sequences do not work correctly in the LaTeX code
block.  For that reason, the `\ForArray` macro is provided -- it formats the
table based on the loop and constructs its own internal `mtable` for the
MathJax internal representation directly, with default spacing and styling.

Loops can be nested if needed.  The `\ForArray` macro should not be nested
to a depth more than 2 -- in this case, the inner loop adds entries to rows
of the array, and the outer loop adds the rows to the array.

If you want delimiters (such as square brackets or parentheses) around an
array built with `\ForArray`, these will need to be added explicitly in
the surrounding LaTeX code.

This extension requires (and loads automatically) the `counters` extension,
also available in this repository.  If you use a local copy of this
extension, you will need to decide also whether to use a local copy of
the `counters` extension, and if so, change the URL in the `Require()`
method call at the beginning of this extension script.

### MathJax version 2.0 notes

This extension has been tested against MathJax version 2.0 beta.  (The earlier problem with the `\ForArray` macro
has been fixed.)

# History:

*2 Feb 2012* -- Tom Leathrum  
Initial upload to GitHub -- further history maintained there

