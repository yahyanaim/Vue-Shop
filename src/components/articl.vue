<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
  />
  <!-- <h2 class="section-title">Our sneakers</h2> -->
  <main>
    <section class="left">
      <div v-for="product in products" :key="product.id" class="product-info">
        <h1>{{ product.name }}</h1>
        <p>New and improved</p>
        <h2>{{ product.price }}$</h2>
        <div class="info-btns">
          <div class="btn discover-btn">more info</div>
          <div  id="add-to-cart"
              type="button"
              @click.prevent="addProdToCart(product)" class="btn cart-btn">add to cart</div>
        </div>
      </div>
    </section>
    <section class="right">
      <img
        src="http://pluspng.com/img-png/nike-shoe-png-nike-shoes-transparent-background-800.png"
        alt=""
      />
    </section>
  </main>
</template>

<script>
// import Pannier from "@/components/Pannier.vue";
export default {
  name: "articl",
  // components: { Pannier },
  inject: ["GBstate"],
  data: () => ({
    products: [
      {
        id: 5,
        imgSrc: "http://pluspng.com/img-png/nike-shoe-png-nike-shoes-transparent-background-800.png",
        name: "Nike blue shoe",
        price: 499,
      },

    ],
    // cartItems: [],
  }),
  methods: {
    // if the product is already in the cart,
    // increase its quantity by 1
    // else create a new object with the
    // selected product info and push it
    // into the GBstate.cartItems array.
    // Decrease stock quantity when item is
    // added to the cart
    addProdToCart(prod) {
      // this.GBstate.isCartView = true;
      for (let i = 0; i < this.GBstate.cartItems.length; i++) {
        if (this.GBstate.cartItems[i].item.id === prod.id) {
          this.GBstate.cartItems[i].quantity++;
          return;
        }
      }
      this.GBstate.cartItems.push({
        item: prod,
        quantity: 1,
      });

      // decrease stock when product
      // is added to the cart
      //console.log(this.GBstate.cartItems);
      // prod.inStock--;
    },
  },
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kanit");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  color: #333;
  font-family: "Kanit", sans-serif;
}

header {
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.logo {
  box-sizing: content-box;
  padding-left: 50px;
  width: 70px;
}

.logo > svg {
  display: block;
  width: 100%;
}

nav > ul {
  display: flex;
  font-size: 1rem;
  height: 70px;
  list-style: none;
  text-transform: capitalize;
}

nav > ul > li {
  line-height: 70px;
  padding: 0 30px;
  transition: background-color 0.3s ease-in-out;
}

nav > ul > li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav-right > ul > li {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-right > ul > li:nth-child(1) {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-right > ul > li:last-child {
  border-right: none;
}

main {
  display: flex;
  height: calc(100vh - 70px);
}

.left {
  background-color: #f7f7f6;
  flex: 1;
  height: 100%;
}

.product-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: 0 auto;
}

.product-info > h1 {
  font-size: 3.2rem;
  letter-spacing: 3px;
  margin-right: -3px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins";
}

.product-info > p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: "Poppins";
}

.product-info > h2 {
  font-size: 1.56rem;
  margin-bottom: 20px;
  font-family: "Poppins";
}

.btn {
  color: #f7f7f6;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 900;
  padding: 20px;
  text-transform: uppercase;
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
  font-family: "Poppins";
}

.btn:hover {
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

.info-btns {
  display: flex;
}

.discover-btn {
  background-color: #a4a4a4;
}

.cart-btn {
  background-color: #141110;
}

.right {
  background-color: #f9e2ba;
  flex: 1;
  height: 100%;
  position: relative;
}

.right > img {
  position: absolute;
  left: -150px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .logo > svg {
    height: 60px;
    width: 60px;
  }

  .logo {
    padding-left: 15px;
  }
  nav > ul {
    height: 60px;
    font-size: 1rem;
  }

  nav > ul > li {
    line-height: 60px;
    padding: 0 20px;
  }
  .product-info > h1 {
    font-size: 2.2rem;
  }

  .product-info > p {
    font-size: 1rem;
  }

  .product-info > h2 {
    font-size: 1.25rem;
  }

  .btn {
    font-size: 0.7rem;
    padding: 15px;
  }
  .right > img {
    left: -80px;
  }
}

@media screen and (max-width: 900px) {
  .logo > svg {
    height: 50px;
    width: 50px;
  }

  .logo {
    padding-left: 15px;
  }

  nav > ul {
    height: 50px;
    font-size: 0.9rem;
  }

  nav > ul > li {
    line-height: 50px;
    padding: 0 15px;
  }

  .right > img {
    left: -2px;
  }
}
</style>