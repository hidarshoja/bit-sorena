<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isSubMenuOpen: false,
      activeMenuItem: null,
    };
  },
  methods: {
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
    },
    setActiveMenuItem(index) {
      this.activeMenuItem = index;
    },
  },
};

</script>

<template>
 <header class="header">
  <div class="header_item">
    
    <nav>
      <div class="logo">
        <img src="../assets/logo.svg" alt="" style="width: 30px !important;">
      </div>
      <input type="checkbox" id="menu-toggle">
      <label for="menu-toggle" class="menu-icon">&#9776;</label>
      <ul class="menu">
        <li :class="{ 'active': activeMenuItem === 1 }">
          <RouterLink to="/" @click="setActiveMenuItem(1)">صفحه اصلی</RouterLink>
        </li>
        <li :class="{ 'active': activeMenuItem === 2 }">
          <RouterLink to="/blog" @click="setActiveMenuItem(2)"> وبلاگ</RouterLink>
        </li>
        <li :class="{ 'active': activeMenuItem === 3 }">
          <RouterLink to="/friends" @click="setActiveMenuItem(3)"> دعوت از دوستان</RouterLink>
        </li>
        <li :class="{ 'active': activeMenuItem === 5 }">
          <RouterLink to="/IncomeView" @click="setActiveMenuItem(5)">  درآمد رایگان </RouterLink>
        </li>
  
        <li class="with-submenu" @click="toggleSubMenu" :class="{'active': activeMenuItem === 4 }">
          <a href="#"> بیشتر بدانید</a>
    <div class="submenu" :class="{ 'submenu-open': isSubMenuOpen }">
      <ul class="submenu-inner">
        <li>
          <RouterLink to="/QuestionsView"  @click="setActiveMenuItem(4)">سوالات متداول </RouterLink>
        </li>
        <li>
          <RouterLink to="/RulesView"  @click="setActiveMenuItem(4)"> شرایط و قوانین </RouterLink>
        </li>
    
        <li>
          <RouterLink to="/HelpView"  @click="setActiveMenuItem(4)"> راهنما </RouterLink>
        </li>
        <li>
          <RouterLink to="/PriceTableView"  @click="setActiveMenuItem(4)"> قیمت لحظه ای </RouterLink>
        </li>
        <li>
          <RouterLink to="/AboutUsView"  @click="setActiveMenuItem(4)"> درباره ما   </RouterLink>
        </li>
      </ul>
    </div>
         </li>
      </ul>
    </nav>
    <div>
      <RouterLink to="/register">
        <button class="btnRegister">ثبت نام </button>
      </RouterLink>
      <RouterLink to="/login">
        <button class="btnLogin"> ورود</button>
      </RouterLink>
    </div>
  </div>
</header>
</template>

<style scoped>

.menu li {
  border-bottom: 2px solid transparent; 
}

.menu li.active {
  border-bottom-color: green; 
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.header {
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  background-color: #1C2733;
  z-index: 999;
}
.header_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}
.logo{
  width: 80px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.logo a span {
  color: #8739fa;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu a {
  display: block;
  padding: 7px 15px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all ease-in-out;
  color: #fff;
}

.menu:hover a {
  opacity: 0.4;
}

.menu a:hover {
  opacity: 1;
  color: #fff;
}

.menu-icon {
  display: none;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked ~ .menu {
  transform: scale(1, 1);
}

/* style btn login and register header */
.btnRegister {
  width: 86px;
  height: 36px;
  margin-left: 15px;
  padding: 7.38px, 22.24px, 7.37px, 22.45px;
  border-radius: 9px;
  background: rgba(255, 160, 45, 1);
  border: 1px solid #f7f7f7;
;

}
.btnLogin{
  width: 88px;
  height: 38px;
  margin-left: 15px;
  padding: 8.38px, 0px, 8.37px, 0px;
  border-radius: 9px;
  border: 1px solid #f7f7f7;
  color: #f7f7f7;
  background-color: #1C2733;

}

/* submenu */
ul.menu li.with-submenu:hover::after {
	transform: rotate(225deg);
	margin-top: 10px;
}
ul.menu li.with-submenu .submenu {
	position: absolute;
	left: 50%;
	top: 100%;
	background: #ffffff;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 2px 1px 2px #ccc;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease-in-out;
}
ul.menu li.with-submenu:hover .submenu {
	opacity: 1;
	visibility: visible;
}
ul.menu li.with-submenu .submenu li {
	padding: 0;
}
ul.menu li.with-submenu .submenu a {
	color: #000000;
	display: block;
	padding: 8px 15px;
	transition: all 0.3s;
}

ul.menu li.with-submenu .submenu a:hover {
	background-color: rgba(49, 20, 50, 0.3);
}

ul.menu li.with-submenu > a {
	position: relative;
	z-index: 1;
}

/* submit */
ul.menu li.with-submenu {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
}

ul.menu li.with-submenu::after {
	content: "";
	border-bottom: 2px solid #fff;
	border-right: 2px solid #fff;
	position: absolute;
	width: 5px;
	height: 5px;
	transform: rotate(45deg);
	left: 0;
	margin-bottom: 5px;
	transition: all 0.3s;
}
ul.menu li.with-submenu:hover::after {
	transform: rotate(225deg);
	margin-top: 10px;
}
ul.menu li.with-submenu .submenu {
	position: absolute;
	left: 5%;
	top: 100%;
	background: #ffffff;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 2px 1px 2px #ccc;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease-in-out;
  
}
ul.menu li.with-submenu:hover .submenu {
	opacity: 1;
	visibility: visible;
}
ul.menu li.with-submenu .submenu li {
	padding: 0;
}
ul.menu li.with-submenu .submenu a {
	color: #000000;
	display: block;
	padding: 8px 15px;
	transition: all 0.3s;
}

ul.menu li.with-submenu .submenu a:hover {
	background-color: rgba(49, 20, 50, 0.3);
}

ul.menu li.with-submenu > a {
	position: relative;
	z-index: 1;
}
.hamburger {
	display: none;
	z-index: 99;
}
.submenu-inner{
  width: 150px !important;
 
}

@media only screen and (max-width: 950px) {
  .submenu-inner{
  width: 100vw !important;
 
}

  .submenu {
  display: none !important;
}

.submenu-open {
  display: block !important;
  
}

ul.menu li.with-submenu .submenu {
	position: absolute;
	left: 5%;
	top: 100%;
	background: #252525;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 2px 1px 2px #ccc;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease-in-out;
  
}



  .menu {
    flex-direction: column;
    background-color: #151418;
    align-items: start;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
 
  .menu a {
    margin-left: 12px;
  }

  .menu li {
    margin-bottom: 10px;
  }

  .menu-icon {
    display: block;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
  .logo{
    display: none;
  }

  /* submenu */
   ul.menu li.with-submenu {
		display: block;
	}
	ul.menu li.with-submenu::after {
		border-color: #fdfcfd;
		left: 10px;
		top: 12px;
	}
	ul.menu li.with-submenu:hover::after {
		transform: rotate(45deg);
		margin-top: 0;
	}
	ul.menu li.with-submenu.is-open::after {
		transform: rotate(225deg);
		margin-top: 5px;
	} 
	 ul.menu li.with-submenu .submenu {
		position: absolute;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    border-radius: 0;
    border-top: 1px solid #d71111;
    display: none;
    transition: auto;
    top: 46px;
    left: -344px;
    background-color: #151418;
    color: white;
	} 
   ul.menu li.with-submenu:hover .submenu{
display: block;
  } 
	 ul.menu li.with-submenu .submenu li {
		padding: 7px 10px;
	}
	ul.menu li.with-submenu .submenu li:hover a {
		background-color: transparent;
	}
	ul.menu li.with-submenu .submenu li a {
		display: inline-block;
		padding: 2px 0;
    color: white;
	}
	ul.menu li.with-submenu .submenu li a::after {
		display: block;
	} 
 
}


</style>
