<template>
<header class="hero">
      <div class="container spacing">
        <h1 class="primary-title">It's okay to be a little obsessed with shoes</h1>
        <p style="color: white;
    font-size: 16px;
    line-height: 1.8;">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, <br>
          Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. <br>
          Ut Enim Ad Minim Veniam, <br>
          Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip. <br>
        </p>
        <a href="#" class="btn">See what we have</a>
      </div>
    </header>
    <main>
      <section class="featured">
        <div class="container">
          <h2 class="section-title">Featured sneakers</h2>
          <div class="split">
            <a href="#" class="featured__item">
              <img
                src="https://github.com/kevin-powell/shoes/blob/master/img/shoe-4.png?raw=true"
                alt=""
                class="featured__img"
              />
              <p class="featured__details">
                <span class="price">$99</span>shoe name
              </p>
            </a>
            <a href="#" class="featured__item">
              <img
                src="https://github.com/kevin-powell/shoes/blob/master/img/shoe-5.png?raw=true"
                alt=""
                class="featured__img"
              />
              <p class="featured__details">
                <span class="price">$99</span>shoe name
              </p>
            </a>
            <a href="#" class="featured__item">
              <img
                src="https://github.com/kevin-powell/shoes/blob/master/img/shoe-6.png?raw=true"
                alt=""
                class="featured__img"
              />
              <p class="featured__details">
                <span class="price">$99</span>shoe name
              </p>
            </a>
          </div>
        </div>
         
      </section>
      
      <section class="our-products">

          <h2 class="section-title">Our sneakers</h2>

        
         <div class="container1">
  <div class="card">
    <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png">
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
            <div class="size">
        <h1>199.99$</h1>
      </div>
      <a href="#">Buy Now</a>
    </div>
  </div>

<div class="card">
    <div class="imgBx">
       <img src="../assets/img4.png"/> 
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
      <div class="size">
        <h1>199.99$</h1>
      </div>
      <a href="#">Buy Now</a>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
       <img src="../assets/img11.png"/> 
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
      <div class="size">
        <h1>199.99$</h1>
      </div>
      <a href="#">Buy Now</a>
    </div>
  </div>

  <div class="card">
    <div class="imgBx">
       <img src="../assets/img1.png"/> 
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
           <div class="size">
        <h1>199.99$</h1>
      </div>
      <a href="#">Buy Now</a>
    </div>
  </div>

</div>
        
      </section>
    </main>
</template>

<script>
export default {
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* layout */

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

h1,
h2,
h3,
p {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

section {
  padding: 7rem 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 85%;
  max-width: 65rem;
  margin: 0 auto;
}

.container1 {
  width: 85%;
  max-width: 95rem;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  justify-content: space-around;
}

.split {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.split > * {
  flex-basis: 30%; /* 100% by default on small screens */
  min-width: 15rem;
}

/* target any direct child of spacing */
.spacing > * + * {
  margin-top: var(--spacer, 2rem);
  color: #483838;
}

.btn {
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  text-decoration: none;
  color: var(--clr-text, #fff);
  font-weight: 700;
  background-color: #040404;
  text-transform: uppercase;
  font-size: 1.125rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  transition: transform 250ms ease-in-out, opacity 250ms linear;
}

.btn:hover,
.btn:focus {
  transform: scale(1.1);
  opacity: 0.9;
}

/* hero section */

.primary-title {
  font-size: 4rem;
  font-size: clamp(3rem, calc(5vw + 1rem), 4.5rem); /* responsive font */
  line-height: 1;
  text-transform: uppercase;
}

.section-title {
  text-align: center;
  font-size: 3.5rem;
  font-size: clamp(2.5rem, calc(5vw + 1rem), 4rem);
  line-height: 1;
  color: #17353d;
  margin-bottom: 5rem;
  text-decoration: underline gold;
  text-underline-offset: 0.3em;
}

.hero {
  text-align: center;
  padding: 15rem 0;
  color: white;
  background: #222; /* fallback if blend mode is not supported */
}

@supports (background-blend-mode: multiply) {
  .hero {
    background: url(https://github.com/kevin-powell/shoes/blob/master/img/shoe-3.png?raw=true),
      radial-gradient(#1496e2, #111);
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/* featured section */

.featured {
    background: #f8f9fc;
}

.featured__item {
  display: block;
  position: relative;
  text-decoration: none;
  color: #333;
  text-align: center;
  line-height: 1.2;
  transform: scale(0.85);
  transition: transform 250ms ease-in-out;
}

.featured__item:hover,
.featured__item:focus {
  transform: scale(1);
}

/* circles */
.featured__item::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 10%;
  padding: 75% 75% 0 0; /* padding trick to get a circle */
  border-radius: 50%;
  background: #2193b0;
  z-index: -1;
}

.featured__details {
  opacity: 0;
  transition: opacity 250ms linear;
}

.featured__item:hover .featured__details,
.featured__item:focus .featured__details {
  opacity: 1;
  text-shadow: 0 0 2rem white; /* to prevent overlapping */
}

.featured__details span {
  display: block;
  font-weight: 700;
  font-size: 2.5rem;
}

/* product section */

.product {
  background: radial-gradient(
    var(--clr-inner, limegreen),
    var(--clr-outer, purple)
  );
  padding: 3rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  text-align: center;
}

.product__title {
  font-size: clamp(3rem, calc(5vw + 1rem), 5.5rem);
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  text-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  
}

.product__image {
  margin: -5rem 0 0 0;
}

@media (min-width: 45rem) {
  .product {
    text-align: left;
    margin-bottom: 9rem;
  }

  .product__title {
    margin: 0;
  }

  .product__image {
    float: right;
    width: 65%;
    shape-outside: url(https://github.com/kevin-powell/shoes/blob/master/img/shoe-1.png?raw=true); /* text will wrap the shoe */
    shape-margin: 1rem;
    margin: 0 -5rem 0 0;
  }

  .product.shoe-left .product__image {
    float: right;
    shape-outside: url(https://github.com/kevin-powell/shoes/blob/master/img/shoe-2.png?raw=true);
    /* margin: 0 0 0 -5em; */
    shape-margin: 2em;
  }
}

/* customize CSS variables */
.hero {
  --clr-accent: #faa700;
}

.shoe-red {
  --clr-inner: #faa700;
  --clr-outer: #e48d00;
  --clr-accent: #a1173c;
}

.shoe-white {
  --clr-inner: #fce4b3;
  --clr-outer: #eac886;
  --clr-accent: #2f4858;
}

.shoe-blue {
  --clr-inner: #6dd5ed;
  --clr-outer: #2193b0;
  --clr-accent: #008951;
}


.container1{
  position: relative;
}

.container1 .card{
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
}

.container1 .card:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #9bdc28;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container1 .card:hover:before{
  clip-path: circle(300px at 80% -20%);
}

.container1 .card:after{
  content: 'Nike';
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 12em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255,255,25,0.05)
}

.container1 .card .imgBx{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container1 .card:hover .imgBx{
  top: 0%;
  transform: translateY(0%);
    
}

.container1 .card .imgBx img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 270px;
}

.container1 .card .contentBx{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container1 .card:hover .contentBx{
  height: 210px;
}

.container1 .card .contentBx h1{
  position: relative;
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 1px;
  color: #fff;
  margin: 2px;
}

.container1 .card .contentBx h2{
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 1px;
  color: #fff;
  margin: 2px;
}
.container1 .card .contentBx .size, .container1 .card .contentBx .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.container1 .card:hover .contentBx .size{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container1 .card:hover .contentBx .color{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container1 .card .contentBx .size h3, .container .card .contentBx .color h3{
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container1 .card .contentBx .size span{
  width: 26px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  color: #111;
  border-radius: 4px;
  cursor: pointer;
}

.container1 .card .contentBx .size span:hover{
  background: #9bdc28;
}

.container1 .card .contentBx .color span{
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.container1 .card .contentBx .color span:nth-child(2){
  background: #9bdc28;
}

.container1 .card .contentBx .color span:nth-child(3){
  background: #03a9f4;
}

.container1 .card .contentBx .color span:nth-child(4){
  background: #e91e63;
}

.container1 .card .contentBx a{
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;
}

.container1 .card:hover .contentBx a{
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
  
}

@media (min-width: 5rem){
  .container1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

}


</style>