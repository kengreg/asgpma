<script>
            function onresize(event){
                var deviceImage = document.getElementById('device-image');
        
        //device is a phone
                if (window.matchMedia('only screen and (max-width: 640px)').matches) {
                    deviceImage.src = "img/small.jpg";
                }
        //device is a tablet
               /* else if (window.matchMedia('only screen and (min-width: 720px) and (max-width: 1024px)').matches) {
                    deviceImage.src = "img/large.jpg";
                } */
        //device is a notebook
                else {
                  deviceImage.src = "img/large.jpg";
                }
            }
            
      //change the image when window is resized
            window.addEventListener('resize', onresize, false);
      
      //show the image based on the device width
      window.addEventListener('load',onresize,false);
            
 </script>
