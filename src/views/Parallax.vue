<template>

<div>
  <div class="parallax"></div>
  <div class="item position-right" data-aos="zoom-in-up" data-aos-delay="1000">1</div>
  <div class="item2">a</div>
  <div class="item position-left" id="animation2" data-aos="fade-down">2</div>
  <div class="parallax"></div>
  <div class="item2">b</div>
  <div class="item position-right" id="animation3" data-aos="fade-up-right" data-aos-offset="200" data-aos-mirror="true">3</div>
  <div class="item2">c</div>
  <div class="item position-left" id="animation4" data-aos="fade-up-left" data-aos-offset="200" data-aos-mirror="true">4</div>
  <div class="item2">d</div>
  <div class="item position-right" id="animation5" data-aos="zoom-in">5</div>
  <div class="item2">e</div>
  <div class="item position-left" id="animation6" data-aos="zoom-out">6</div>
  <div class="item2">f</div>
  <div class="item position-right" id="animation7" data-aos="slide-up">7</div>
  <div class="item2">j</div>
  <div class="item position-left" id="animation8" data-aos="flip-up">8</div>
  <div class="item2">z</div>
  <div class="item position-right" id="animation9" data-aos="flip-down">9</div>
  <div class="item2">r</div>
  <div class="item position-left" id="animation10" data-aos="flip-right">10</div>
  <div class="item2">y</div>
  <div class="item position-right" id="animation11" data-aos="flip-left">11</div>
  <div class="item2">y</div>
  <div class="item" id="transition-couleur" data-aos="example-anim3" data-aos-duration="3000" data-aos-offset="200" data-aos-mirror="true">TESTING</div>
  <div class="item position-right" data-aos="example-anim2" data-aos-delay="300" data-aos-duration="3000" data-aos-offset="200" data-aos-mirror="true"></div>
  <div id="test-sephia" class="item position-left"></div>
  <div id="test-evol"></div>
  <div id="pigeon" class="pigeon-back"></div>
  <figure class="linear"><p>test</p></figure>
  <div id="menu">
    <ul>
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
    </ul>
  </div>
</div>

</template>


<style lang="scss" scoped>


* {
  box-sizing: border-box;
}

// ANIMATION LINEAR BOX

figure {
    position: relative;
    width: 96%;
    height: 200px;
    background: #fff;
    border: 3px solid #eee;
    transition: .5s;
}

p {
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50px 50px 50px 50px;
    background: yellow;
    animation: x 10s linear infinite;
    // y 4s ease-in infinite both;
}
@keyframes x {
    to {
        left: 98%;
    }
    from {
        left: 0px;
    }
}
// @keyframes y {
//     to {
//         top: 0px;
//     }
//     from {
//         top: 100px;
//     }
// }
// ANIMATION LINEAR BOX

.item {
  width: 50%;
  height: 50vh;
  line-height: 50vh;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}

.item2 {
  width: 100%;
  height: 40vh;
  text-align: center;
  border: 2px solid green;
  line-height: 20vh;
  font-size: 3em;
  color: black;
}

.position-right{
  margin-left: 50%;
}
.position-left{
  margin-right: 50%;
}

/* CUSTOM ANIMATION */
[data-aos="example-anim3"] {
  // rotateY de droite à gauche
  transform: rotateX(180deg);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotateX(10deg);
    opacity: 1;
  }
} 

[data-aos="example-anim2"] {
  filter: sepia(100%);
  &.aos-animate {
    filter: sepia(0%);
  }
}


// [data-aos="example-anim2"] {
//   background: red;
//   transition-property: background;
//   &.aos-animate {
//     background: green;
//   }
// }

/* CUSTOM ANIMATION */

.parallax { 
  background-image: url("./../assets/images/image1.jpg");
  height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#test-sephia{
  background-image: url('./../assets/images/image2.jpg');
  background-size: cover;
  transition: 2s all;
  filter: blur(10px);
}

#test-sephia:hover{
  filter: blur(0px);
}

#test-evol{
  height: 25vh;
  width: 25%;
  background-color: red;
  margin-left: 50%;
  transition: width 2s, height 4s;
}
#test-evol:hover {
  width: 50%;
  height: 50vh;
}


@keyframes test{
  0%{
        background-image: url('./../assets/pigeon/test4.png');
    }
    12%{
        background-image: url('./../assets/pigeon/test3.png');
    }
    25%{
        background-image: url('./../assets/pigeon/test2.png');
    }
    37%{
        background-image: url('./../assets/pigeon/test1.png');
    }
    50%{
        background-image: url('./../assets/pigeon/test4.png');
    }
    62%{
        background-image: url('./../assets/pigeon/test3.png');
    }
    75%{
        background-image: url('./../assets/pigeon/test2.png');
    }
    87%{
        background-image: url('./../assets/pigeon/test1.png');
    }
    100%{
        background-image: url('./../assets/pigeon/test4.png');
    }
}

#pigeon{
    width: 350px;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;
    animation: test 2s infinite;
    animation-timing-function: steps(1, end);
}
#menu{
  border: 2px solid black;
}
#menu ul {
  display: flex;
  flex-wrap: wrap;
}
#menu ul li {
  margin-left: 30px;
}
</style>