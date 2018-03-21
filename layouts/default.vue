<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/" class="logofont">CNC Works</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/products">Products</b-nav-item>
          <b-nav-item href="/parts">Parts</b-nav-item>
          <b-nav-item href="/support">Support</b-nav-item>
          <b-nav-item href="/contact">Contact Us</b-nav-item>
          <b-nav-item href="#" disabled>:::</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
            <b-dropdown-item href="#">SP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">SignIn</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <nuxt/>



     <div class="cncFooter">
       <div class="container">
          <div class="row footerText">
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">Ni Mama 200 years old, INC</p>
                  1234 Highway #111 East, Suite 100<br>
                  Markham, Ontario<br>
                  L3R 3B3<br>
                  Canada<br>
                  TEL: (416) 111-2222<br>
                  FAX: (905) 222-1111<br>
                  <a href="mailto:info@mydomain.com">info@mydomain.com</a><br>
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">ABOUT</p>
                  <router-link to="/about">Testimonials</router-link><br>
                  <router-link to="/support">FAQs</router-link><br>
                  <router-link to="/PrivacyPolicy">Privacy Policy</router-link><br>
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">SUPPORT</p>
                  <router-link to="/contact">Contact Us</router-link><br>
                  <br><br>
            </div>

				<div class="col-12" style="text-align:center; color:#FF0;">
			    Copyright 1999-2018 "Ni Mama 200 years old" Inc. all rights reserved
		    </div>
          </div>
       </div>



      <div class="row footerText">
	    </div>

		</div>
  </div>
</template>

