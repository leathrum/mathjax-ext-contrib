MathJax.Callback.Queue(
MathJax.Hub.Register.StartupHook("MathMenu Ready",function () {

var MENU = MathJax.Menu;
var ITEM = MENU.ITEM;
var HUB = MathJax.Hub;
var CONFIG = HUB.config.MathMenu;
  var isPC = HUB.Browser.isPC, isMSIE = HUB.Browser.isMSIE, isIE9 = ((document.documentMode||0) > 8);

MENU.Augment({

    jsondata: null,

ajaxLoadJsonFile : function(uri, callback) {
  var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  request.onreadystatechange = callback;
  request.overrideMimeType("application/json");
  try {request.open("GET", uri);
  request.send(null);} catch (err) { /* -- no file, do nothing -- */; }
  // note: if exception here, readystatechange event fires with readystate = 1
},

parseJsonOnAjaxResult : function(e) {
  if ((e.currentTarget.readyState == 4) 
        && (e.currentTarget.status == 200 || e.currentTarget.status == 0)) { 
        // readystate = 4 indicates successful AJAX load
    if (e.currentTarget.responseText) {
      MENU.menu.jsondata = JSON.parse(e.currentTarget.responseText);
    }
  }
},

menuString : function(s) { 
  return ((MENU.menu.jsondata && MENU.menu.jsondata[s]) 
             ? MENU.menu.jsondata[s] : s); 
} 

});

ITEM.COMMAND.Augment({
    Label: function (def,menu) {return [MENU.menu.menuString(this.name)]},
});

ITEM.SUBMENU.Augment({
    Label: function (def,menu) {
      this.menu.posted = false;
      return [MENU.menu.menuString(this.name)+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]];
    }
});

ITEM.RADIO.Augment({
    Label: function (def,menu) {
      var span = {className:"MathJax_MenuRadioCheck"};
      if (CONFIG.settings[this.variable] !== this.value) {span = {style:{display:"none"}}}
      return [["span",span,[this.marker]]," "+MENU.menu.menuString(this.name)];
    }
});

ITEM.CHECKBOX.Augment({
    Label: function (def,menu) {
      var span = {className:"MathJax_MenuCheck"};
      if (!CONFIG.settings[this.variable]) {span = {style:{display:"none"}}}
      return [["span",span,[this.marker]]," "+MENU.menu.menuString(this.name)];
    }
});

ITEM.LABEL.Augment({
    Label: function (def,menu) {
      delete def.onmouseover, delete def.onmouseout; delete def.onmousedown;
      def.className += " MathJax_MenuLabel";
      return [MENU.menu.menuString(this.name)];
    }
});

  // queue the two operations separately to be sure they happen with correct
  // timing
  MathJax.Hub.Register.StartupHook("MathMenu i18n Ready",function(){  
    MENU.menu.ajaxLoadJsonFile(CONFIG.menuDataFile,
        MENU.menu.parseJsonOnAjaxResult);
  });

  MathJax.Hub.Startup.signal.Post("MathMenu i18n Ready");

}));

MathJax.Ajax.loadComplete("http://localhost/moth/ext-test/menu-i18n/menu-i18n.js");

