<template>
  
 
  <div class="row p-0 m-0">
    
  <div class="col-md-6 bg-light text-dark">
     
      
  <h1 class="fw-normal mt-5 mb-3 text-center p-0 animate__animated animate__fadeInLeft">Create an Account</h1>
      <div class="diva animate__animated animate__fadeInLeft">
        <i class="mdi mdi-information text-info icond"></i><p class="ml-4">Registration for this site is easy. just fill in the fields below. and we'll get a new account set up for you in no time.</p>
      </div>
  <main class="form-signin animate__animated animate__fadeInLeft">
    
  <form>
   
    <h1 class="h3 mb-3 fw-normal text-center">Account Details</h1>

      <div class="search mb-3">
         <i class="mdi mdi-account text-info icon"></i> <input type="text" class="inp bg-light input-field" placeholder="Username"> 
       </div>
    
      <div class="search mb-3">
         <i class="mdi mdi-email text-primary icon"></i> <input type="text" class="inp bg-light input-field" placeholder="Email Address"> 
       </div>
    
    
      <div class="search">
         <i class="mdi mdi-key text-info icon"></i> <input type="text" class="inp bg-light input-field" placeholder="Choose a Password"> 
       </div>

    <!-- <div class="text-muted mb-1 d-flex justify-content-center text-center pt-3">
      <label>
        <input type="checkbox" value="remember-me"> I accept the <a href="">terms of service</a> and <a href="">privacy policy</a>  
      </label>
    </div> -->
    <!-- <button class="w-100 btn btn-lg btn-primary zbtn" type="submit">Register</button> -->
    <router-link to="/profileentry">
         <p class="w-100 btn btn-lg btn-primary zbtn mt-4">Continue</p>
    </router-link>
    <div class="text-center p-2">
       <span> Have an account ?</span> <router-link to="/login">Log in</router-link>
    </div>

     <!-- <div class="col-md-12 m-0 p-1 text-center" style="font-size:20px">
        <a href=""><span class="mdi mdi-facebook text-primary p-2  circle"></span></a> 
        <a href=""><span class="mdi mdi-twitter text-info ml-4 p-2   circle"></span></a>  
        <a href=""><span class="mdi mdi-google text-danger ml-4  p-2   circle"></span></a>
        <a href=""><span class="mdi mdi-linkedin text-primary ml-4  p-2  circle"></span></a> 
    </div> -->
  
  
  </form>
</main>

</div>
  
<div class="col-md-6  bimg  d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column animate__animated animate__fadeInRight">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
         <router-link class="nav-link active a1" to="/register">Register</router-link>
         <router-link class="nav-link a1" to="/login">Login</router-link>
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
      <p style="font-size:24px">______ &nbsp;  Join the club</p>
     <h1>Join gozillions of people</h1>
    </div>
    <p class="mt-4" > At vero eos et accusamus et iusto cadreto margoposito ensextaro marcopolo abokina nigeria and rusia</p>
     <p class="mt-4">
     <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/login">login</router-link>
    </p>

    
  </div>
   
    <div class="mt-1 text-light" style="font-size:20px">
        <i class="mdi mdi-arrow-left  p-2  circle2"></i>
        <i class="mdi mdi-arrow-right  ml-4 p-2   circle2"></i> 
    </div>
 
    </div>
    </div>
  </div>
</template>



<style scoped>
.col-md-6{
  height: 100vh;
}
.diva{
   box-shadow: 0px 1px 3px 0px rgb(217, 219, 219);
   border-radius: 8px;
   justify-content: center;
   text-align: justify;
   margin-bottom: 30px !important;
   border-top: 2px solid rgb(182, 117, 243);
   width: 100%;
   max-width: 400px;
   padding: 15px;
   margin: auto;
   position: relative;
}

.diva .icond {
    position: absolute;
    top: 12px;
    left: 12px
}

.search {
    position: relative;
}
 .search input {
    height: 45px;
    text-indent: 40px;
    border: 2px solid #d6d4d4
}



.search .icon {
    position: absolute;
    top: 1px;
    left: 1px
}

/* .search button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 110px;
    background: blue
} */


.circle{
           width: 70px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
            border: none;
            font-weight: bolder !important;
            
}

.circle2{
           width: 70px;
            padding: 10px;
            background-color: rgb(24, 23, 23);
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            /* box-shadow: 0px 1px 5px 1px rgb(217, 219, 219); */
            border: none;
            font-weight: bolder !important;
            
}
.hight{
  height: 400px !important;
}


a{
 text-decoration: none;
 color: blueviolet;
}
.zbtn{
  border-radius: 50px;
  background-color: blueviolet;
  border: none !important;
}

.btnz2{
  border-radius: 50px;
  width: 200px;
}
.bimg{
  height: 100vh;
 background-image: url("/img/pexels-j.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.inp{
  border-radius: 50px;
  outline: none !important;
  border: none !important;
  background-color: rgb(245, 245, 245) !important;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}


  .input-icons i {
            position: absolute;
        }
          
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }

       
          
        .icon {
          width: 40px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 50px;
            margin: 2px;
            text-align: center;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
        }

        .icon2{
          width: 100px !important;
            padding: 10px;
            background-color: rgb(155, 153, 153);
            border-radius: 100%;
            max-width: 40px;
            margin: 10px;
            text-align: center;
            font-size: 13px;
            color: white;
        }
          
        .input-field {
            width: 100%;
            padding: 10px;
            /* text-align: center; */
            /* text-align: center; */
        }

        .a1{
          padding: 15px !important;
        }
          
        /* h2 {
            color: green;
        } */

        /*
 * Globals
 */


/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}


/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

</style>