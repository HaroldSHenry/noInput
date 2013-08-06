/**
 * noInput:    A jQuery plugin for hiding and re-showing inline label text
 *             like "(don't know)" within an empty HTML <input> or 
 *             <textarea> element to describe what leaving the field
 *             blank signifies.
 * http://talerian.com/jQuery/noInput.html
 *
 * @name       noInput jQuery Plugin
 * @author     Harold S. Henry <harold@talerian.com>
 * @version    0.1.0
 *
 * @requires jQuery
 *
 * Copyright (c) 2013 by Harold S. Henry
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 */
( function ( $ ) {
  $.fn.noInput = function ( noInputTxt ) {
    return this.each(
      function ( ) {
        var inp = $('#' + this.id.substr( 0, this.id.length - 1)).first( )[0];
        this.innerHTML = noInputTxt;
        if( inp ) {
          inp.onfocus=function( ) { $( '#' + this.id + 'L' ).hide( ); };
          inp.onblur=function( ) {
            var txt = ( this.value ) ? this.value.trim( ) : "";
            if( txt == "" )
              $( '#' + this.id + 'L' ).show();
          };
        }
      }
    );
  }
} )( jQuery );
