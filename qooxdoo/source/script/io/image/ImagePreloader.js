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

#package(image)
#require(qx.manager.object.ImagePreloaderManager)

************************************************************************ */

/*!
  This is the preloader used from qx.ui.basic.Image instances.
*/
qx.OO.defineClass("qx.io.image.ImagePreloader", qx.core.Target, 
function(vSource)
{
  if(qx.manager.object.ImagePreloaderManager.has(vSource))
  {
    this.debug("Reuse qx.io.image.ImagePreloader in old-style!");
    this.debug("Please use qx.manager.object.ImagePreloaderManager.create(source) instead!");

    return qx.manager.object.ImagePreloaderManager.get(vSource);
  };

  qx.core.Target.call(this);

  // Create Image-Node
  this._element = new Image;

  // This is needed for wrapping event to the object
  this._element._QxImagePreloader = this;

  // Define handler if image events occurs
  this._element.onload = qx.io.image.ImagePreloader.__onload;
  this._element.onerror = qx.io.image.ImagePreloader.__onerror;

  // Set Source
  this._source = vSource;
  this._element.src = vSource;

  // Set PNG State
  if (qx.sys.Client.isMshtml()) {
    this._isPng = /\.png$/i.test(this._element.nameProp);
  };

  qx.manager.object.ImagePreloaderManager.add(this);
});





/*
---------------------------------------------------------------------------
  GETTER
---------------------------------------------------------------------------
*/

qx.io.image.ImagePreloader.get = function(vSource)
{

};






/*
---------------------------------------------------------------------------
  STATE MANAGERS
---------------------------------------------------------------------------
*/

qx.Proto._source = null;
qx.Proto._isLoaded = false;
qx.Proto._isErroneous = false;





/*
---------------------------------------------------------------------------
  CROSSBROWSER GETTERS
---------------------------------------------------------------------------
*/

qx.Proto.getUri = function() { return this._source; };
qx.Proto.getSource = function() { return this._source; };
qx.Proto.isLoaded = function() { return this._isLoaded; };
qx.Proto.isErroneous = function() { return this._isErroneous; };

// only used in mshtml: true when the image format is in png
qx.Proto._isPng = false;
qx.Proto.getIsPng = function() { return this._isPng; };

if(qx.sys.Client.isGecko())
{
  qx.Proto.getWidth = function() { return this._element.naturalWidth; };
  qx.Proto.getHeight = function() { return this._element.naturalHeight; };
}
else
{
  qx.Proto.getWidth = function() { return this._element.width; };
  qx.Proto.getHeight = function() { return this._element.height; };
};





/*
---------------------------------------------------------------------------
  EVENT MAPPING
---------------------------------------------------------------------------
*/

qx.io.image.ImagePreloader.__onload = function() { this._QxImagePreloader._onload(); };
qx.io.image.ImagePreloader.__onerror = function() { this._QxImagePreloader._onerror(); };

qx.Proto._onload = function()
{
  this._isLoaded = true;
  this._isErroneous = false;

  if (this.hasEventListeners(qx.Const.EVENT_TYPE_LOAD)) {
    this.dispatchEvent(new qx.event.types.Event(qx.Const.EVENT_TYPE_LOAD), true);
  };
};

qx.Proto._onerror = function()
{
  this.debug("Could not load: " + this._source);

  this._isLoaded = false;
  this._isErroneous = true;

  if (this.hasEventListeners(qx.Const.EVENT_TYPE_ERROR)) {
    this.dispatchEvent(new qx.event.types.Event(qx.Const.EVENT_TYPE_ERROR), true);
  };
};




/*
---------------------------------------------------------------------------
  DISPOSER
---------------------------------------------------------------------------
*/

qx.Proto.dispose = function()
{
  if(this.getDisposed()) {
    return;
  };

  if (this._element)
  {
    this._element.onload = this._element.onerror = null;
    this._element._QxImagePreloader = null;
    this._element = null;
  };

  this._isLoaded = this._isErroneous = this._isPng = false;

  return qx.core.Target.prototype.dispose.call(this);
};
