/* ************************************************************************

   qooxdoo - the new era of web interface development

   Copyright:
     (C) 2004-2006 by Schlund + Partner AG, Germany
         All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.oss.schlund.de

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (aecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#package(toolbar)
#post(qx.dom.DomDimension)
#post(qx.dom.DomLocation)

************************************************************************ */

qx.OO.defineClass("qx.ui.toolbar.ToolBarMenuButton", qx.ui.toolbar.ToolBarButton, 
function(vText, vMenu, vIcon, vIconWidth, vIconHeight, vFlash)
{
  qx.ui.toolbar.ToolBarButton.call(this, vText, vIcon, vIconWidth, vIconHeight, vFlash);

  if (qx.util.Validation.isValidObject(vMenu)) {
    this.setMenu(vMenu);
  };

  /*
  this._menuButton = new qx.ui.basic.Image("widgets/arrows/down_small.gif");
  this._menuButton.setAnonymous(true);
  this.addAtEnd(this._menuButton);
  */
});




/*
---------------------------------------------------------------------------
  PROPERTIES
---------------------------------------------------------------------------
*/

qx.ui.toolbar.ToolBarMenuButton.addProperty({ name : "menu", type : qx.Const.TYPEOF_OBJECT, instance : "qx.ui.menu.Menu" });
qx.ui.toolbar.ToolBarMenuButton.addProperty({ name : "direction", type : qx.Const.TYPEOF_STRING, allowNull : false, possibleValues : [ "up", "down" ], defaultValue : "down" });




/*
---------------------------------------------------------------------------
  UTILITIES
---------------------------------------------------------------------------
*/

qx.Proto.getParentToolBar = function()
{
  var vParent = this.getParent();

  if (vParent instanceof qx.ui.toolbar.ToolBarPart) {
    vParent = vParent.getParent();
  };

  return vParent instanceof qx.ui.toolbar.ToolBar ? vParent : null;
};

qx.Proto._showMenu = function(vFromKeyEvent)
{
  var vMenu = this.getMenu();

  if (vMenu)
  {
    // Caching common stuff
    var vMenuParent = vMenu.getParent();
    var vMenuParentElement = vMenuParent.getElement();
    var vButtonElement = this.getElement();
    var vButtonHeight = qx.dom.DomDimension.getBoxHeight(vButtonElement);

    // Apply X-Location
    var vMenuParentLeft = qx.dom.DomLocation.getPageBoxLeft(vMenuParentElement);
    var vButtonLeft = qx.dom.DomLocation.getPageBoxLeft(vButtonElement);

    vMenu.setLeft(vButtonLeft - vMenuParentLeft);

    // Apply Y-Location
    switch(this.getDirection())
    {
      case "up":
        var vBodyHeight = qx.dom.DomDimension.getInnerHeight(document.body);
        var vMenuParentBottom = qx.dom.DomLocation.getPageBoxBottom(vMenuParentElement);
        var vButtonBottom = qx.dom.DomLocation.getPageBoxBottom(vButtonElement);

        vMenu.setBottom(vButtonHeight + (vBodyHeight - vButtonBottom) - (vBodyHeight - vMenuParentBottom));
        vMenu.setTop(null);
        break;

      case "down":
        var vButtonTop = qx.dom.DomLocation.getPageBoxTop(vButtonElement);

        vMenu.setTop(vButtonTop + vButtonHeight);
        vMenu.setBottom(null);
        break;
    };

    this.addState(qx.Const.STATE_PRESSED);

    // If this show is called from a key event occured, we want to highlight
    // the first menubutton inside.
    if (vFromKeyEvent) {
      vMenu.setHoverItem(vMenu.getFirstActiveChild());
    };

    vMenu.show();
  };
};

qx.Proto._hideMenu = function()
{
  var vMenu = this.getMenu();

  if (vMenu) {
    vMenu.hide();
  };
};





/*
---------------------------------------------------------------------------
  MODIFIERS
---------------------------------------------------------------------------
*/

qx.Proto._modifyMenu = function(propValue, propOldValue, propData)
{
  if (propOldValue)
  {
    propOldValue.setOpener(null);

    propOldValue.removeEventListener(qx.Const.EVENT_TYPE_APPEAR, this._onmenuappear, this);
    propOldValue.removeEventListener(qx.Const.EVENT_TYPE_DISAPPEAR, this._onmenudisappear, this);
  };

  if (propValue)
  {
    propValue.setOpener(this);

    propValue.addEventListener(qx.Const.EVENT_TYPE_APPEAR, this._onmenuappear, this);
    propValue.addEventListener(qx.Const.EVENT_TYPE_DISAPPEAR, this._onmenudisappear, this);
  };

  return true;
};






/*
---------------------------------------------------------------------------
  EVENTS: MOUSE
---------------------------------------------------------------------------
*/

qx.Proto._onmousedown = function(e)
{
  if (e.getTarget() != this || !e.isLeftButtonPressed()) {
    return;
  };

  this.hasState(qx.Const.STATE_PRESSED) ? this._hideMenu() : this._showMenu();
};

qx.Proto._onmouseup = function(e) {};

qx.Proto._onmouseout = function(e)
{
  if (e.getTarget() != this) {
    return;
  };

  this.removeState(qx.Const.STATE_OVER);
};

qx.Proto._onmouseover = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (vToolBar)
  {
    var vMenu = this.getMenu();

    switch(vToolBar.getOpenMenu())
    {
      case null:
      case vMenu:
        break;

      default:
        // hide other menus
        qx.manager.object.MenuManager.update();

        // show this menu
        this._showMenu();
    };
  };

  return qx.ui.toolbar.ToolBarButton.prototype._onmouseover.call(this, e);
};






/*
---------------------------------------------------------------------------
  EVENTS: MENU
---------------------------------------------------------------------------
*/

qx.Proto._onmenuappear = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (!vToolBar) {
    return;
  };

  var vMenu = this.getMenu();

  vToolBar.setOpenMenu(vMenu);
};

qx.Proto._onmenudisappear = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (!vToolBar) {
    return;
  };

  var vMenu = this.getMenu();

  if (vToolBar.getOpenMenu() == vMenu) {
    vToolBar.setOpenMenu(null);
  };
};
