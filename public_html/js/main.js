var i = 0;

$(function (){

    /* Leaflet load */

    var map = L.map('mapid', {zoomControl: false}).setView([52.521919, 13.413212], 16);

    // Wir benötigen auf jeden Fall einen Access Token (sowas wie ein API-Key) damit die Karte angezeigt werden kann.
       var ACCESS_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

       // Danach müssen wir einen Layer für die Kartenausschnitte anlegen.
       L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + ACCESS_TOKEN,
            {
                attribution: '', // optional (Die Kartenunterschrift)
                maxZoom: 18,                // optional (Die Maximale Zoomstufe)
                id: 'mapbox.streets',       // notwendig (ID)
                accessToken: ACCESS_TOKEN   // notwendig (Key)

            }
        )
        .addTo(map);

    var marker = L.marker([52.521919, 13.413212]).addTo(map);
    marker.bindPopup("<b>The Company</b><br>This is where you can find us!").openPopup();

    /* Leaflet end */


    $("#buttonOne").on("click", OneIn);

    function OneIn (){

        console.log("one");

        i=0;

            $("#contentOne")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .addClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "240%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");
        }

    $("#buttonTwo").on("click", TwoIn);

    function TwoIn (){

        console.log("two");

        i=1;

            $("#contentOne")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .addClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");
        }

    $("#buttonThree").on("click", ThreeIn);

    function ThreeIn (){

        console.log("three");

            i=2;

            $("#contentOne")
                .animate({ 
                    "left": "-240%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .addClass("active");
        }


    $("#arrowLeft").on("click", PreviousIn);

    function PreviousIn(){

        console.log("click");

        i--;

        if(i<0){
            i=2;
        }
        if(i>2){
            i=0;
        }

        if(i===0){
            console.log("one");

            $("#contentOne")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .addClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "240%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");

        }

        if(i===1){
            console.log("two");

            $("#contentOne")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .addClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");

        }

        if(i===2){
            console.log("three");

            $("#contentOne")
                .animate({ 
                    "left": "-240%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .addClass("active");

        }

    }

    $("#arrowRight").on("click", NextIn);

    function NextIn(){

        console.log("click");

        i++;

        if(i<0){
            i=2;
        }
        if(i>2){
            i=0;
        }

        if(i===0){
            console.log("one");

            $("#contentOne")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .addClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "240%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");

        }

        if(i===1){
            console.log("two");

            $("#contentOne")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .addClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "120%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .removeClass("active");

        }

        if(i===2){
            console.log("three");

            $("#contentOne")
                .animate({ 
                    "left": "-240%"
                }, 
                1000, 
                "swing"
                );
            $("#liOne")
                    .removeClass("active");

            $("#contentTwo")
                .animate({ 
                    "left": "-120%"
                }, 
                1000, 
                "swing"
                );
            $("#liTwo")
                    .removeClass("active");

            $("#contentThree")
                .animate({ 
                    "left": "10%"
                }, 
                1000, 
                "swing"
                );
            $("#liThree")
                    .addClass("active");

        }

    }
    
    /* VIDEO PART*/
    
    var videoElement = document.getElementById("video");
    
    console.dir(videoElement);
    
    //Methods that our API allows
    
    installPlayPauseButton();
    installTimeline();
    
    function installPlayPauseButton(){
        //document.getElementById("play").addEventListener("click", function () {
            
            var btn = document.getElementById("play");
            
            btn.addEventListener("click", function(){
            
                if(videoElement.paused){
                    play();
                    btn.innerText = "Stop";
                } else {
                    pause();
                    btn.innerText = "Play";
                }
            });
        };
    
    function installTimeline(){
        
        var isScratching    = false;
        var isPaused        = videoElement.paused;
        
        var timelineElement = document.getElementById("timeline");
        timelineElement.max = videoElement.duration;
        timelineElement.value = videoElement.currentTime;
        
        //mouse move is for direct response of movement of slider
        timelineElement.addEventListener("change", function(){
            
            setTimeline(timelineElement.value);
            
        });
        
        timelineElement.addEventListener("mousedown", function(evt){
            
            isPaused        = videoElement.paused;  //check if viedeo is playing
            isScratching    = true;                 //slider is being changed true
            pause();                                //pause vieo
             
        });
        
        //when mouse is being moved and being scratched, actualise the timeline
        timelineElement.addEventListener("mousemove", function(){
            if(isScratching){
                setTimeline(timelineElement.value);
            }
        });
        
        //if we release the mouse, video continues
        timelineElement.addEventListener("mouseup", function(){
            
            //only play the movie again if it was already playing
            if (!isPaused){
                play();
            }
            
            isScratching = false;
        });
        
        videoElement.addEventListener("timeupdate",function (evt){
            if(!isScratching){
                timelineElement.value = videoElement.currentTime;
            }
        });
        
        videoElement.currentTime = timelineElement.value;

    }
    
    function setTimeline (value){
        videoElement.currentTime = value;
    }
    
    function play(){
        
        videoElement.play();
        
    }
    
    function pause(){
        
        videoElement.pause(); //there is no method "stop()"
        
    }
    
    //$("#btnAbout").onclick=play();
    
    /* VIDEO END*/
    
    /* SCROLL */
    
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });
    /* END SCROLL*/
});