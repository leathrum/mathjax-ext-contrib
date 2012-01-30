# Extension: knowl

Implements "knowls" for MathJax. See [AIM documentation](http://www.aimath.org/knowlepedia/) for knowls. 

# Configuration:

    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/knowl/knowl.js"]
      }
    });

Also requires `knowl.js` script and stylesheet from AIM, and jQuery library:

    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script> 
    <link href="http://aimath.org/knowlstyle.css" rel="stylesheet" type="text/css" /> 
    <script type="text/javascript" src="http://aimath.org/knowl.js">
    </script>

# Usage:

    \knowl{url}{math}

See [sample](http://leathrum.github.com/mathjax-ext-contrib/knowl/sample.html)

# History:

*20 Jan 2012* -- Tom Leathrum  
Moved to GitHub repo, further history tracking there  
*18 Nov 2011* -- Davide Cervone  
All code moved to extension, only control sequence implemented is \knowl macro.  
*18 Nov 2011* -- Tom Leathrum  
Unique-ID mechanism implemented using nonstandard helper control sequences in an extension.  
*17 Nov 2011* -- Tom Leathrum  
Initial implementation as MathJax macro without an extension, lacked unique-ID mechanism.

See [MathJax User Group discussion](http://groups.google.com/group/mathjax-users/browse_thread/thread/d8a8d081b8e63242) that led to this extension. 

