MathJax.Callback.Queue(
MathJax.Hub.Register.StartupHook("MathMenu Ready",function () {

MathJax.Menu.Augment({

 appendItem: function(item) {
    this.items.push(item);
  },

  addItemAtIndex: function(additem,index) {
      this.items.splice(index,0,additem);
  },

  addItemFirst: function(additem) {
      this.items.splice(0,0,additem);
  },

  addItemLast: function(additem) {
      this.appendItem(additem);
  },

  addItemAfterIndex: function(additem,index) {
      this.items.splice(index+1,0,additem);
  },

  addItemAfter: function(additem,afteritem) {
    this.addItemAfterIndex(additem,this.items.indexOf(afteritem));
  },

  getItemIndexByName: function(itemname) {
    for (var i=0;i<this.items.length;i++) 
      if (this.items[i].name == itemname) return i;
    return -1; // if no previous return
  },

  getItemByName: function(itemname) {
    return this.items[this.getItemIndexByName(itemname)]
  },

  addItemAfterByName: function(additem,aftername) {
    this.addItemAfterIndex(additem,
        this.getItemIndexByName(aftername));
  },

  deleteItemAtIndex: function(index) {
    this.items.splice(index,1);
  },

  deleteItem: function(item) {
    this.deleteItemAtIndex(this.items.indexOf(item));
  },

  deleteItemByName: function(name) {
    this.deleteItem(this.getItemByName(name));
  },

  hideItemAtIndex: function(index) {
    this.items[index].hidden=true;
  },

  hideItem: function(item) {
    this.hideItemAtIndex(this.items.indexOf(item));
  },

  hideItemByName: function(name) {
    this.hideItem(this.getItemByName(name));
  },

  showItemAtIndex: function(index) {
    this.items[index].hidden=false;
  },

  showItem: function(item) {
    this.showItemAtIndex(this.items.indexOf(item));
  },

  showItemByName: function(name) {
    this.showItem(this.getItemByName(name));
  },

  disableItemAtIndex: function(index) {
    this.items[index].disabled=true;
  },

  disableItem: function(item) {
    this.disableItemAtIndex(this.items.indexOf(item));
  },

  disableItemByName: function(name) {
    this.disableItem(this.getItemByName(name));
  },

  enableItemAtIndex: function(index) {
    this.items[index].disabled=false;
  },

  enableItem: function(item) {
    this.enableItemAtIndex(this.items.indexOf(item));
  },

  enableItemByName: function(name) {
    this.enableItem(this.getItemByName(name));
  }

});

MathJax.Menu.ITEM.CHECKBOX.Augment({
  check: function(bool) {
      if (!this.disabled) 
        MathJax.Hub.config.MathMenu.settings[this.variable] = bool;
  }
});

MathJax.Menu.ITEM.RADIO.Augment({
  select: function() {
      if (!this.disabled) 
        MathJax.Hub.config.MathMenu.settings[this.variable] = this.value;
  }
});

  MathJax.Hub.Startup.signal.Post("MathMenu modifymenu Ready");

}));

MathJax.Ajax.loadComplete("http://cs.jsu.edu/mathjax-ext/github/modifymenu/modifymenu.js");

