<template>
  <main>
    <button class="carte" v-on:click="isHidden = !isHidden">Show cart</button>
    <div v-if="!isHidden" class="container2">
      <button v-on:click="isHidden = true">X</button>
      <!-- cart view -->
      <table v-if="GBstate.cartItems.length > 0" class="cart">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in GBstate.cartItems" :key="prod.id">
            <td>{{ prod.item.name }}</td>
            <td>
              <span class="cart__qty-text">{{ prod.quantity }}</span>
              <button
                class="cart__add-qty"
                @click="increaseQuantity(prod)"
                :disabled="prod.item.inStock === 0"
              >
                +
              </button>
              <button
                class="cart__remove-qty"
                @click="decreaseQuantity(prod)"
                :disabled="prod.quantity === 0"
              >
                -
              </button>
            </td>
            <td>${{ prod.item.price }}</td>
          </tr>
          <tr class="cart__total">
            <td colspan="2">Total:</td>
            <td>${{ calculateTotal }}</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td>
              <button class="cart__checkout-btn" @click="checkout">
                Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: "Pannier",
  inject: ["GBstate"],
  data() {
    return {
      isHidden: true,
      seen: true,
    };
  },
  methods: {
    // responsible for showing the cart page
    // when View cart button is clicked
    displayCartView() {
      this.isCartView = true;
      //   this.pageTitle = "Your Cart";
    },

    // responsible for showing products page
    // when logo is clicked
    // goToHomePage() {
    //   this.isCartView = false;
    //   this.pageTitle = "Our Books";
    // },

    getcartItems(prod) {
      if (this.GBstate.cartItems.length > 0) {
        for (let i = 0; i < this.GBstate.cartItems.length; i++) {
          if (this.GBstate.cartItems[i].item.id === prod.id) {
            this.GBstate.cartItems[i].quantity++;
          } else {
            this.GBstate.cartItems.push({
              item: prod,
              quantity: 1,
            });
          }
        }
      }
    },

    // + button functionality in the
    // cart: quantity goes up by 1,
    // in stock goes down by 1
    increaseQuantity(prod) {
      prod.quantity++;
      prod.item.inStock--;
    },

    // when the quantity reaches 0, the item
    // is removed from the cart
    removeProdFromCart(prod) {
      const prodIndex = this.GBstate.cartItems.indexOf(prod);
      this.GBstate.cartItems.splice(prodIndex, 1);
    },

    // - button functionality in the cart:
    // quantity is decreased by 1,
    // in stock is increased by 1,
    // if quantity = 0, product is removed
    // from the cart
    decreaseQuantity(prod) {
      prod.quantity--;
      prod.item.inStock++;
      if (prod.quantity <= 0) {
        this.removeProdFromCart(prod);
      }
    },

    checkout() {
      // remove all products from the cart
      this.GBstate.cartItems = [];
    },
  },
  computed: {
    // this function keeps an eye on the quantity in
    // the cart, which may vary as users add or remove
    // products and calculates the total each time
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.GBstate.cartItems.length; i++) {
        total +=
          this.GBstate.cartItems[i].item.price *
          this.GBstate.cartItems[i].quantity;
      }
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* layout */

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  line-height: 1.6;
}
.container2 {
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 1.3em;
  // border: 1px solid black;
  border-radius: 5px;
  background: #f8f9fc;
}
.alignment-container2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.products-container2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 2em;
}

.cart {
  width: 100%;
  border-collapse: collapse;
}
.cart tbody tr:nth-child(odd) {
  background: rgb(255, 243, 178);
}
.cart tbody td {
  text-align: center;
  padding: 0.2em;
}
.cart .cart__total {
  background-color: #f0f0f04d;
  color: rgb(0, 0, 0);
}
.cart .cart__add-qty,
.cart .cart__remove-qty {
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  /* padding: 0.2em; */
  text-align: center;
  border-radius: 3px;
  background-color: #cc4513;
  border: #862d0c;
  color: #fff;
  margin-right: 1px;
}
.cart .cart__add-qty:disabled,
.cart .cart__remove-qty:disabled {
  color: #aabccf;
  border-color: #aabccf;
  background-color: transparent;
}
.cart .cart__add-qty:disabled:disabled:hover,
.cart .cart__remove-qty:disabled:disabled:hover,
.cart .cart__add-qty:disabled:disabled:focus,
.cart .cart__remove-qty:disabled:disabled:focus {
  background-color: transparent;
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
}
.cart .cart__qty-text {
  margin-right: 10px;
  font-weight: 700;
}
.cart .cart__checkout-btn {
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  padding: 2px 10px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-out;
}
#f9e2ba .prod-card__image {
  border: 2px solid #cc4513;
  border-radius: 3px;
  padding: 1em;
  filter: sepia(40%) contrast(200%) opacity(85%);
  transition: filter 0.3s;
}
.prod-card:hover .prod-card__image {
  filter: none;
}
.prod-card__info {
  padding: 1em;
  line-height: 1;
}
.prod-card__title {
  font-size: 2rem;
  color: #35495e;
}
.prod-card__description {
  line-height: 1.5;
}
.prod-card__price,
.prod-card__in-stock {
  background-color: #41b883;
  color: #fff;
  padding: 6px 10px;
  text-align: center;
}
.not-in-stock {
  background-color: #cc4513;
}
.prod-card__btn {
  background-color: transparent;
  border: 2px solid #35495e;
  border-radius: 5px;
  color: #35495e;
  padding: 5px 10px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease-out;
}
.prod-card__btn:hover,
.prod-card__btn:focus {
  background-color: #cc4513;
  border: 3px solid #862d0c inset;
  color: #fff;
  transform: translatey(-3px);
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.5);
}
.prod-card__btn:disabled {
  color: #aabccf;
  border-color: #aabccf;
  background-color: transparent;
}
.prod-card__btn:disabled:disabled:hover,
.prod-card__btn:disabled:disabled:focus {
  background-color: transparent;
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
}
.empty-cart {
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 1rem;
  display: hide;
}

.btn {
  border-radius: 50px;
  height: 24px;
  background-color: rgba(255, 0, 0, 0.753);
  border: 2px solid rgba(255, 0, 0, 0.726);
}

.carte {
  position: relative;
  left: 97%;
  bottom: 53px;
  background: white;
  border: 0px;
}

@media only screen and (max-width: 1188px) {
  .carte {
    position: relative;
    left: 0%;
    bottom: 53px;
    background: white;
    border: 0px;
  }
}
</style>