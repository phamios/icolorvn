<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>AppStore - Login</title>
  <link rel="shortcut icon" href="favicon.gif">
  <!---CSS Files-->
  <link rel="stylesheet" href="<?php echo base_url('src/appstore/css/master.css')?>">
  <link rel="stylesheet" href="<?php echo base_url('src/appstore/css/login.css')?>">
  <!---jQuery Files-->
  <script src="<?php echo base_url('src/appstore/js/jquery-1.7.1.min.js')?>"></script>
  <script src="<?php echo base_url('src/appstore/js/jquery.spinner.js')?>"></script>
  <script type="text/javascript" src="<?php echo base_url('src/appstore/js/forms/jquery.validate.min.js')?>"></script>
  <!---Fonts-->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
    <!---FadeIn Effect, Validation and Spinner-->
  <script>
    $(document).ready(function () {
       $('div.wrapper').hide();
        $('div.wrapper').fadeIn(1200);
        $('#lg-form').validate();
        $('.submit').click(function() {
        var $this = $(this);
        $this.spinner();
        setTimeout(function() {
                $this.spinner('remove');
        }, 1000);
       });
    });
  </script>
</head>
<body>
	<div class="wrapper">
		<div class="logo">
	 	<h1>APPSTORE LOGIN PAGE</h1>
	 </div>
   <div class="lg-body">
     <div class="inner">
       <div id="lg-head">
         <p><span class="font-bold">AppStore</span>: Please login to access the control panel.</p>
         <div class="separator"></div>
       </div>
       <div class="login">
         <?php echo form_open_multipart('admincp/login'); ?>
           <fieldset>
              <ul>
                 <li id="usr-field">
                  <input class="input required" name="uname" type="text" size="26" minlength ="1" placeholder="Username..." />
                 </li>
                 <li id="psw-field">
                  <input class="input required" name="pass1" type="password" size="26" minlength="1" placeholder="Password..." />
                 </li>
                 <li class="checkbox">
                  <input class="checkbox" type="checkbox" id="remember-me" value="remember" /> 
                  <label for="remember-me" class="checkbox-text">Remeber Me</label>
                 </li>
                 <li>
                  <input class="submit" type="submit" name="submit" value=""/>
                 </li>
              </ul>
           </fieldset>
          <?php echo form_close(); ?> 
          <span id="lost-psw">
           <a href="#">Forgot your password</a>
          </span>
        </div>
     </div>
    </div>
	</div>
</body>

</html>