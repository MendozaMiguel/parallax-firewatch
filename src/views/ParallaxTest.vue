<template>
  <div id="contenu">
    <div id="nonparallax"></div>
    <div id="ParallaxTest">
      <div id="parallax0" class="keyart_layer">

      </div>
      <div id="parallax1" class="keyart_layer">

      </div>
      <div id="parallax2" class="keyart_layer">

      </div>
      <div id="parallax3" class="keyart_layer">

      </div>
      <div id="parallax4" class="keyart_layer">

      </div>
      <div id="parallax5" class="keyart_layer">

      </div>
      <div id="parallax6" class="keyart_layer">

      </div>
      <div id="parallax7" class="keyart_layer">
      </div>
      
      <div id="parallax8" class="keyart_layer">
      </div>

    </div>
    <div id="horsparallax" class="keyart_layer">
    </div>
    <div id="horsparallax2">
    </div>
  </div>
</template>


<style>
@media screen and (max-width: 600px){
  #nonparallax {
    display: block;
    height: 100vh;
    position: relative;
    background-color: red;
  }
  #nonparallax {
    background-image: url("../photo_parallax/keyart-mobile.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  #ParallaxTest{
    display: none;
  }
}
/* #nonparallax {
    display: none;
  } */

.keyart_layer {
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: absolute;
}
#ParallaxTest{
  height: 100vh;
}

#parallax0{
    background-image: url('../photo_parallax/parallax0.png');
    z-index:0;
}

#parallax1{
    background-image: url('../photo_parallax/parallax1.png');
    z-index:1;
}
#parallax2{
    background-image: url('../photo_parallax/parallax2.png');
    z-index:2;
    /* background-attachment: fixed; */
}
#parallax3{
    background-image: url('../photo_parallax/parallax3.png');
    z-index:3;
}
#parallax4{
    background-image: url('../photo_parallax/parallax4.png');
    z-index:4;
}
#parallax5{
    background-image: url('../photo_parallax/parallax5.png');
    z-index:5;
}
#parallax6{
    background-image: url('../photo_parallax/parallax6.png');
    z-index:6;
}
#parallax7{
    background-image: url('../photo_parallax/parallax7.png');
    z-index:7;
}
#parallax8{
    background-image: url('../photo_parallax/parallax8.png');
    z-index:8;
}

#horsparallax{
  /* height: 0vh; */
  background-color: #210002;
  /* border: 2px solid green; */
  z-index: 9;
  height: 150vh;
  /* position: fixed; */
}

#horsparallax2{
  height: 100vh;
  background-color: #210002;
}
</style>


<script> 

export default {
  name: 'ParallaxTest',
  mounted(){
    const script = document.createElement("script");
    script.setAttribute("src","/scroll.js");
    // script.setAttribute("async", "false")
    document.body.appendChild(script);
  }
}
</script>