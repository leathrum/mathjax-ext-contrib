# MathJax Contributed Extensions

Each directory listed contains a [MathJax](http://www.mathjax.org) extension which can be used in a document with the MathJax CDN configuration.

A typical configuration using one of these extensions will include the following within the `<head>...</head>` portion of your HTML document:

    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu//mathjax-ext/github/extname/extname.js"] 
      }
    });
    </script>
    <script type="text/javascript"
      src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
    </script>

Some extensions may require additional configuration -- for details, see the `README` in the directory for the extension.

The extensions can also be downloaded and stored for local use -- just be sure to change the URL in the `loadComplete()` call at the end of the extension JavaScript file, and the URL in the MathJax configuration.

Each extension also has a sample page, which can be found in the `gh-pages` branch.

