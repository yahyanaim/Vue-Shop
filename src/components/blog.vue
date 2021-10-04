<template>
 
 <h1 id="partner" class="section-title">Our Partner</h1>
<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="../assets/img5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img8.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
				<img src="../assets/img9.png" height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src="../assets/img10.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../assets/img13.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
				<img src="../assets/img9.png" height="100" width="250" alt="" />
		</div>

       
	</div>
<div>
	<a href="#"><i class="fas fa-arrow-circle-up"></i></a>
</div>	
</div>

</template>

<script>
export default {
	name: "blog" , 
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.section-title {
	font-weight: 500;
    text-align: center;
     font-family: "Poppins" , sans-serif;
    font-size: 3.5rem;
    font-size: clamp(2.5rem, calc(5vw + 1rem), 4rem);
    line-height: 1;
    color: #17353d;
    margin-bottom: 5rem;
    -webkit-text-decoration: underline gold;
    text-decoration: underline rgba(255, 217, 0, 0.856);
    text-underline-offset: 0.3em;
    // position: relative;
    // top: 80px;
   
}
@mixin white-gradient {
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}

// Styling
.slider {
  
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
    top: 30px;
	width: 960px;

	&::before,
	&::after {
		// @include white-gradient;
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
         gap: 50px;
	}

	.slide {
		height: 100px;
		width: 250px;
	}
}


    
@media only screen and (max-width: 1000px) {
  .slider {
    width: 100%;
    
  }
}


</style>
