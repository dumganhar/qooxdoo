/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Martin Wittemann (martinwittemann)

************************************************************************* */

/* ************************************************************************

#asset(qx/decoration/Classic/*)

************************************************************************* */

/**
 * The simple qooxdoo decoration theme.
 */
qx.Theme.define("qx.theme.simple.Decoration",
{
  aliases : {
    decoration : "qx/decoration/Classic"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-blue" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 4,
        color : "blue"
      }
    },


    "main" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "blue"
      }
    },


    "keyboard-focus" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : "black",
        style : "dotted"
      }
    },


    "button-box" : 
    {
      decorator : [
        qx.ui.decoration.MLinearBackgroundGradient,
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBackgroundColor
      ],
      
      style : 
      {
        radius : 3,
        width : 1,
        color : "#BBB",
        gradientStart : ["button-box-bright", 40],
        gradientEnd : ["button-box-dark", 70],
        backgroundColor : "button-box-bright"
      }
    },
    
    "button-box-pressed" : 
    {
      include : "button-box",
      
      style : 
      {
        gradientStart : ["button-box-dark", 40],
        gradientEnd : ["button-box-bright", 70],
        backgroundColor : "button-box-dark"
      }
    },
    
    "button-box-pressed-hovered" : 
    {
      include : "button-box-pressed",

      style : 
      {
        color : "#939393"
      }
    },
    
    "button-box-hovered" : 
    {
      include : "button-box",
      
      style : 
      {
        color : "#939393"
      }
    },
    
    
    // invalid buttons //
    "button-box-invalid" : 
    {
      include : "button-box",
      
      style : 
      {
        color : "invalid"
      }
    },
    
    "button-box-pressed-invalid" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        color : "invalid"
      }
    },
    
    "button-box-hovered-invalid" : {include: "button-box-invalid"},
    
    "button-box-pressed-hovered-invalid" : {include: "button-box-pressed-invalid"},
    // ///////////////////
    
    
    // focused buttons //
    "button-box-focused" : 
    {
      include : "button-box",
      
      style : 
      {
        color : "blue"
      }
    },
    
    "button-box-pressed-focused" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        color : "blue"
      }
    },
    
    "button-box-hovered-focused" : {include: "button-box-focused"},
    
    "button-box-pressed-hovered-focused" : {include: "button-box-pressed-focused"},
    // ///////////////////
    
    
    // vertical buttons //
    "scroll-knob" : 
    {
      decorator : [
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBackgroundColor
      ],
      
      style : 
      {
        radius : 3,
        width : 1,
        color : "#BBB",
        backgroundColor : "scrollbar-bright"
      }
    },
    
    "scroll-knob-pressed" : 
    {
      include : "scroll-knob",
      
      style : 
      {
        backgroundColor : "scrollbar-dark"
      }
    },
    
    "scroll-knob-hovered" : 
    {
      include: "scroll-knob",

      style : 
      {
        color : "#939393"
      }
    },
    
    "scroll-knob-pressed-hovered" : 
    {
      include: "scroll-knob-pressed",

      style : 
      {
        color : "#939393"
      }
    },
    // ///////////////////    


    "button-box-right" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : [0, 3, 3, 0]
      }
    },
    
    "button-box-pressed-right" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : [0, 3, 3, 0]
      }
    },
    
    "button-box-pressed-hovered-right" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : [0, 3, 3, 0]
      }
    },
    
    "button-box-hovered-right" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : [0, 3, 3, 0]
      }
    },
    
    
    "button-box-right-borderless" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : [0, 3, 3, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-pressed-right-borderless" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : [0, 3, 3, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-pressed-hovered-right-borderless" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : [0, 3, 3, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-hovered-right-borderless" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : [0, 3, 3, 0],
        width: [1, 1, 1, 0]
      }
    },    
    
    
    "button-box-top-right" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-pressed-top-right" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-pressed-hovered-top-right" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 0]
      }
    },
    
    "button-box-hovered-top-right" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 0]
      }
    },


    "button-box-bottom-right" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 0]
      }
    },
    
    "button-box-pressed-bottom-right" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 0]
      }
    },
    
    "button-box-pressed-hovered-bottom-right" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 0]
      }
    },
    
    "button-box-hovered-bottom-right" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 0]
      }
    },


    "button-box-middle" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-pressed-middle" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-pressed-hovered-middle" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-hovered-middle" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },


    "button-box-left" : 
    {
      include : "button-box",
      
      style : 
      {
        radius : [3, 0, 0, 3],
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-pressed-left" : 
    {
      include : "button-box-pressed",
      
      style : 
      {
        radius : [3, 0, 0, 3],
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-pressed-hovered-left" : 
    {
      include : "button-box-pressed-hovered",
      
      style : 
      {
        radius : [3, 0, 0, 3],
        width : [1, 0, 1, 1]
      }
    },
    
    "button-box-hovered-left" : 
    {
      include : "button-box-hovered",
      
      style : 
      {
        radius : [3, 0, 0, 3],
        width : [1, 0, 1, 1]
      }
    },









    "button" : 
    {
      decorator : qx.ui.decoration.Single,
      
      style : 
      {
        backgroundColor : "button",
        radius : 3
      }
    },
    
    
    "button-invalid" : 
    {
      decorator : qx.ui.decoration.Single,
      
      style : 
      {
        backgroundColor : "button",
        width : 2,
        color : "invalid",
        radius : 3
      }
    },
    
    "button-focused" : 
    {
      decorator : qx.ui.decoration.Single,
      
      style : 
      {
        backgroundColor : "button",
        width : 2,
        color : "blue",
        radius : 3
      }
    },
    
    
    "window" :
    {
      decorator: [
        qx.ui.decoration.MDoubleBorder,
        qx.ui.decoration.MBoxShadow,
        qx.ui.decoration.MBackgroundColor
      ],

      style :
      {
        width : 1,
        color : "window-border",
        innerWidth : 4,
        innerColor: "window-border-inner",
        shadowLength : 2,
        shadowBlurRadius : 5,
        shadowColor : "shadow",
        backgroundColor : "background"
      }
    },


    "table-header" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : "table-header-border"
      }
    },
    
    
    
    "white-box" : 
    {
      decorator : [
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MBoxShadow,
        qx.ui.decoration.MSingleBorder
      ],
      
      style : 
      {
        width: 1,
        color: "white-box-border",
        shadowBlurRadius : 2,
        shadowColor : "#999999",
        radius: 7
      }
    },

    /*
    ---------------------------------------------------------------------------
      THREE DIMENSIONAL
    ---------------------------------------------------------------------------
    */

    "inset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        color : [ "border-light-shadow", "border-light", "border-light", "border-light" ]
      }
    },

    "outset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light-shadow", "border-dark", "border-dark", "border-light-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "groove" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "ridge" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ],
        innerColor : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "inset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : [1, 0, 0, 1],
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "outset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : [0, 1, 1, 0],
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "focused-inset" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 2,
        color : "blue"
      }
    },

    "focused-outset" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 2,
        color : "blue"
      }
    },

    "border-invalid" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 2,
        color : "invalid"
      }
    },



    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },



    /*
    ---------------------------------------------------------------------------
      SHADOWS
    ---------------------------------------------------------------------------
    */

    "shadow-small" :
    {
      decorator : [qx.ui.decoration.MBoxShadow],

      style : {
        shadowLength : 2,
        shadowBlurRadius : 5,
        shadowColor : "shadow"
      }
    },


    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      decorator : qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "tooltip-text"
      }
    },


    "tooltip-error" :
    {
      decorator : [
        qx.ui.decoration.MBorderRadius, 
        qx.ui.decoration.MBackgroundColor
      ],

      style : {
        radius: 5,
        backgroundColor: "invalid"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-dark-shadow"
      }
    },

    "toolbar-part-handle" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        style : "solid",

        colorTop    : "white",
        colorLeft   : "white",
        colorRight  : "border-dark-shadow",
        colorBottom : "border-dark-shadow"
      }
    },





    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        widthBottom: 1,
        colorTop : "border-dark",
        colorBottom : "border-light"
      }
    },





    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */

    "datechooser-date-pane" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        colorTop : "gray",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom: 1,
        colorBottom : "gray",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight: 1,
        colorRight : "gray",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "gray",
        widthRight: 1,
        colorRight : "gray",

        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */

    "tabview-page-button-top" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        color : [ "blue", "blue", "blue", "blue" ],

        innerWidth : 1,
        innerColor : [ "blue", "blue", "blue", "blue" ],

        widthBottom : 0,
        innerWidthBottom : 0
      }
    },

    "tabview-page-button-bottom" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        color : [ "blue", "blue", "blue", "blue" ],

        innerWidth : 1,
        innerColor : [ "blue", "blue", "blue", "blue" ],

        widthTop : 0,
        innerWidthTop : 0
      }
    },

    "tabview-page-button-left" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        color : [ "blue", "blue", "blue", "blue" ],

        innerWidth : 1,
        innerColor : [ "blue", "blue", "blue", "blue" ],

        widthRight : 0,
        innerWidthRight : 0
      }
    },

    "tabview-page-button-right" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        color : [ "blue", "blue", "blue", "blue" ],

        innerWidth : 1,
        innerColor : [ "blue", "blue", "blue", "blue" ],

        widthLeft : 0,
        innerWidthLeft : 0
      }
    },





    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table-statusbar" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "middle-blue",
        styleTop : "solid"
      }
    },

    "table-scroller-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "table-header-border",
        styleBottom : "solid"
      }
    },

    "table-scroller-focus-indicator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 2,
        color : "table-focus-indicator",
        style : "solid"
      }
    },

    "table-header-cell" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid"
      }
    },

    "table-header-cell-hovered" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid",

        widthBottom : 2,
        colorBottom : "effect",
        styleBottom : "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar" :
    {
      decorator: qx.ui.decoration.Single,

      style:
      {
        backgroundColor: "#FFF",
        width: 1,
        color: "border-separator"
      }
    },
    
    
    
    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */
    "radiobutton" : 
    {
      decorator : [
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBackgroundColor
      ],
      
      style : 
      {
        radius : 10,
        width : 1,
        color : "#BBB"
      }      
    },
    
    "radiobutton-checked" : 
    {
      include : "radiobutton",
      
      style : 
      {
        width : 0
      }
    },
    
    "radiobutton-checked-invalid" : 
    {
      include : "radiobutton-checked",
      
      style : 
      {
        color : "invalid"
      }
    },
    
    "radiobutton-focused" : 
    {
      include : "radiobutton",
      style : 
      {
        color : "blue"
      }
    },
    
    "radiobutton-invalid" : 
    {
      include : "radiobutton",
      style : 
      {
        color : "invalid"
      }
    }
  }
});
