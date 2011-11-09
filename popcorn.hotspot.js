// PLUGIN: HOTSPOT

(function ( Popcorn ) {
/**
* Hotspot popcorn plug-in
* Shows a sensitive region / link on top of the video in a certain region
* !! The <video>-element has to be inside an element with the id: "hypervideo" !!
* Example: <div id="hypervideo"><video></video></div>
*
* @param {Object} options
*
* Example:
  var p = Popcorn('#video')
     .hotspot({
     // seconds
     start: 1,
     // seconds
     end: 5,
     // unique id
     id: "test1",
     href: "http://www.drumbeat.org/",
     text: "Drumbeat Homepage",
     //position in percentages
     top: 40,
     left: 50,
     width: 20,
     height: 30
   });
*
*/
  
  Popcorn.plugin( "hotspot", {
      manifest: {
        about: {
          name: "Popcorn Hotspot Plugin",
          version: "0.1",
          author: "Joscha Jaeger",
          website: "http://open-hypervideo.org/"
        },
        options: {
          start: {
            elem: "input",
            type: "number",
            label: "In"
          },
          end: {
            elem: "input",
            type: "number",
            label: "Out"
          },
          id: {
            elem: "input",
            type: "text",
            label: "Id"
          },
          top: {
            elem: "input",
            type: "number",
            label: "Top"
          },
          left: {
            elem: "input",
            type: "number",
            label: "Left"
          },
          width: {
            elem: "input",
            type: "number",
            label: "Width"
          },
          height: {
            elem: "input",
            type: "number",
            label: "Height"
          },
          text: {
            elem: "input",
            type: "text",
            label: "Text"
          },
          href: {
            elem: "input",
            type: "text",
            label: "Href"
          }/*,
          target: "hypervideo-container"*/
        }
      },
      _setup: function( options ) {
      	document.getElementById("hypervideo").style.position = "relative";
      	
        var hotspot = document.createElement( "a" );
        hotspot.href = options.href;
        hotspot.target = "_blank";
        target = document.getElementById("hypervideo");
		
		// You can define the Link-Color here
		var linkcolor = "#0000ff";

        hotspot.setAttribute("id", options.id);
        hotspot.text = options.text;
        hotspot.style.position = "absolute";
        hotspot.style.top = options.top + "%";
        hotspot.style.left = options.left + "%";
        hotspot.style.width = options.width + "%";
        hotspot.style.height = options.height + "%";
        hotspot.style.border = "2px solid"+linkcolor;
        hotspot.style.background = "rgba(255,255,255,.4)";
        hotspot.style.padding = 1 + "%";
        hotspot.style.color = linkcolor;
        hotspot.style.textDecoration = "none";
        
        if ( !target && Popcorn.plugin.debug ) {
          throw new Error( "target container doesn't exist" );
        }

        target.appendChild(hotspot);
        
      	hotspot.style.display = "none";
      },

      /**
       * The start function will be executed when the currentTime
       * of the video  reaches the start time provided by the
       * options variable
       */
      start: function( event, options ) {
        document.getElementById(options.id).style.display = "block";
      },
      /**
       * The end function will be executed when the currentTime
       * of the video  reaches the end time provided by the
       * options variable
       */
      end: function( event, options ) {
        document.getElementById(options.id).style.display = "none";
      },
      _teardown: function( options ) {
      	//clean up
      }
  });
})( Popcorn );
