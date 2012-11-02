# Extension: modifymenu

Augments the `MathJax.Menu` object with utility methods for manipulating and 
modifying the MathJax contextual menu.

# Configuration:

    MathJax.Hub.Config({
      extensions: ["http://cs.jsu.edu/mathjax-ext/github/modifymenu/modifymenu.js"]
    });

Note that this configuration is slightly different from the configuration for
most other extensions, because it is not loaded as part of the `TeX` 
configuration block.

# Usage:

    MathJax.Menu.appendItem(item)
    MathJax.Menu.addItemAtIndex(item,index)
    MathJax.Menu.addItemFirst(item)
    MathJax.Menu.addItemLast(item)
    MathJax.Menu.addItemAfterIndex(item,index)
    MathJax.Menu.getItemIndexByName(name)
    MathJax.Menu.getItemByName(name)
    MathJax.Menu.addItemAfterByName(item,name)
    MathJax.Menu.deleteItemAtIndex(index)
    MathJax.Menu.deleteItem(item)
    MathJax.Menu.deleteItemByName(name)
    MathJax.Menu.hideItemAtIndex(index)
    MathJax.Menu.hideItem(item)
    MathJax.Menu.hideItemByName(name)
    MathJax.Menu.showItemAtIndex(index)
    MathJax.Menu.showItem(item)
    MathJax.Menu.showItemByName(name)
    MathJax.Menu.disableItemAtIndex(index)
    MathJax.Menu.disableItem(item)
    MathJax.Menu.disableItemByName(name)
    MathJax.Menu.enableItemAtIndex(index)
    MathJax.Menu.enableItem(item)
    MathJax.Menu.enableItemByName(name)

    MathJax.Menu.ITEM.CHECKBOX.check(boolean)

    MathJax.Menu.ITEM.RADIO.select(item)

See [sample](http://leathrum.github.com/mathjax-ext-contrib/modifymenu/sample.html)
and [second sample](http://leathrum.github.com/mathjax-ext-contrib/modifymenu/sample2.html)

These methods need to be called to modify an object of type `MathJax.Menu` -- in
particular, the variable `MathJax.Menu.menu` stores the current contextual menu
in a variable of type `MathJax.Menu`, so to modify the current menu, the call
will take a form similar to:

    MathJax.Menu.menu.appendItem(item)

The `MathJax.Menu.ITEM` class describes menu items -- subclasses include 
`COMMAND`, `LABEL`, `RULE`, `SUBMENU`, `CHECKBOX`, and `RADIO`.  So, for 
example, to add a menu item "test"  at the end of the main contextual menu
which launches an alert box containing the  message "Hello World!":

    MathJax.Menu.menu.append(MathJax.Menu.ITEM.COMMAND("test",
        function () { alert("Hello World!"); } ) );

A `SUBMENU` item includes a variable `menu` of type `MathJax.Menu` 
containing the submenu, so to access and modify the submenu, the call will 
take a form similar to:

    MathJax.Menu.menu.getItemByName("Submenu Name").menu.append(item)

The methods in this extension provide means to add, delete, access, hide,
show, disable, or enable menu items, accessing the items by index, name, or
item identity.

### Notes on MathJax versions

Note that the contextual menu for MathJax version 2.0 is different from the 
contextual menu for MathJax version 1.1 -- some menu items have different
names and positions, and the overall organization of the menu is different.
For this reason, this extension needs to be used very carefully when the MathJax
version being used by readers may not be known.  The samples use specific versions 
of MathJax for this reason -- the first sample uses MathJax version 1.1, the second
sample uses MathJax version 2.1.

# History:

*16 Feb 2012* -- Tom Leathrum  
Initial upload to GitHub -- further history maintained there

