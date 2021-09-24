<template>
  <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">SNEAKERS.</label>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href=""><span class="fas fa-shopping-cart"></span></a></li>
        </ul>
    </nav>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
* {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body


 {font-family: 'Poppins', sans-serif; }
    nav { 
        background: #ffffff; 
        height: 80px; 
        width: 100%; 
    }
        label.logo{ 
            font-family: 'Poppins', sans-serif;
            color: #17353d; 
            font-size: 33px; 
            line-height: 80px; 
            padding:0 12%; 
            font-weight: bold; 
        }
        nav ul{ 
          font-family: 'Poppins', sans-serif;
            float: right; 
            position: relative;
           right: 30%;
        }
            nav ul li{ 
                display: inline-block; 
                line-height:80px;
                margin: 0 5px; 
            }
                nav ul li a{
                    color: #17353d;
                    font-size: 17px;
                    padding: 7px 13px;
                    border-radius: 3px;
                }
                    a.active,a:hover{
                        color: gold;
                        transition: .5s;
                    }
    .checkbtn{
        font-size: 30px;
                    color: #17353d;
        
        float: right;
        line-height: 80px;
        margin-right: 40px;
        cursor: pointer;
        display: none; 
    }
        #check{
           display: none; 
        }

/*--------------------------*/
/*----- MEDIA QUERRY -----*/
/*--------------------------*/

@media (max-width: 952px){
    label.logo{
        font-size: 30px;
        padding-left: 50px;
       
    }
    nav ul li a{
        font-size: 16px;
    }
}

@media (max-width: 1200px){
    .checkbtn{
        display: block; 
    }
    ul{
        position: fixed;
        width: 100%;
        height: 55vh;
        top: 80px;
        left: -100%;
        top: 0px;
        transition: all .5s;
        text-align: center;
        background-color: #ffffff;
    }
        nav ul li{
            display: block;
            margin: 50px 0;
            line-height: 30px;
        }
            nav ul li a{
                font-size: 20px;
            }
                a:hover,a.active{
                    background: none;
                    color: #0082e6;
                }

        #check:checked ~ ul{
            left: 0;
        }
}



</style>>


