# MathJax Contributed Extensions

Each directory listed contains a [MathJax](http://www.mathjax.org) extension which can be used in a document with the MathJax CDN configuration.

A typical configuration using one of these extensions will include the following within the `<head>...</head>` portion of your HTML document:

    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {
        extensions: ["http://cs.jsu.edu/mathjax-ext/github/extname/extname.js"] 
      }
    });
    </script>
    <script type="text/javascript"
      src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
    </script>
    
Please note the extension URL:  this is *not* on GitHub, but is updated nightly from the GitHub master branch. 

Some extensions may require additional configuration -- for details, see the `README` in the directory for the extension.

The extensions can also be downloaded and stored for local use -- just be sure to change the URL in the `loadComplete()` call at the end of the extension JavaScript file, and the URL in the MathJax configuration.

Each extension also has a sample page, which can be found in the `gh-pages` branch.

# For Extension Developers

Developers are welcome to place their extensions here (by issuing a pull request), but please observe the following guidelines:

1)  Directory and file naming:  Place extension in a separate directory, `extname`, and place the main JavaScript file for the extension, `extname.js`, in that directory (replace `extname` with the name of your extension).

2)  README:  Please include a `README.md` file in the `extname` directory with configuration and usage documentation -- see the existing extensions for examples.

3)  Sample:  Please include a sample file `sample.html` in the `extname` directory in the `gh-pages` branch, with a sample demonstrating configuration and usage of your extension, and link to the sample in your `README.md` file.

4)  URLs:  For testing purposes, a `raw.github.com` URL is acceptable on a temporary basis, but before you make your pull request to merge into the master branch, please change the URL to  `http://cs.jsu.edu/mathjax-ext/github/extname/extname.js` in the `loadComplete()` call at the end of `extname.js` and in the configuration block of your sample.

Please note that your files will *not* be available immediately on the `cs.jsu.edu` URL -- this site is updated nightly from the master branch here.  Also please note that the sample file `sample.html` in the `gh-pages` branch is not transfered to the `cs.jsu.edu` site -- the URL for the sample will be `http://leathrum.github.com/mathjax-ext-contrib/extname/sample.html`.
