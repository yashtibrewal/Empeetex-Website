<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <title>Contact Us</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400i&display=swap" rel="stylesheet">

  <?php
  include('./partials/header.php')
  ?>
  <link rel="stylesheet" href="resources/css/contact_us.css">
</head>

<body>
  <!-- Start of Navbar -->
  <?php
  include('./partials/navigation.php')
  ?>
  <!-- End Of Navbar -->
  
  <div id="main_content" class="container">
    <div class="row">
      <div id="box1" class="col-xl-5 col-lg-6 col-md-6 d-xl-block d-lg-block d-md-none d-sm-none d-none">
        <img id="image" class="box" src="resources/images/post_office.webp" alt="Some Technical Error Occured">
      </div>
      <div id="contact" class="box col-xl-7 col-lg-6 col-md-12 col-sm-12 col-11">
        <div class="row">
          <div class="inner_box col-10 offset-1 col-xl-12 offset-xl-0 col-lg-12 offset-lg-0 col-md-12 offset-md-0">
            <h2>Leave a Message</h2>
            <p class="text-left"> Phone,&nbsp;Whatsapp,&nbsp;Viber, Wechat:+919820618154
              Landline:&nbsp;+912228852247
              <span>Email:&nbsp;pankaj@empeetex.com</span>
            </p>
            <p class="text-left"> Postal :
              202, Building. No. 1, Kanakia Sanskruti, <br> Thakur Complex, Kandivali (East), Mumbai -
              400101
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="fixed-bottom d-xl-block d-lg-block d-md-none d-sm-none d-none">
    <div class="text-center">
      <p>
        Contact Us at <span id="email"> pankaj@empeetex.com</span>
        <span class="d-none">|</span> &nbsp;Phone:&nbsp;+91&nbsp;9820618154
      </p>
    </div>
  </footer>

  <footer id="small" class="d-xl-none d-lg-none d-md-block d-sm-block d-block">
    <div class="text-center">
      <p>
        Contact Us at <span id="email"> pankaj@empeetex.com</span>
        <span class="d-none">|</span> &nbsp;Phone:&nbsp;+91&nbsp;9820618154
      </p>
    </div>
  </footer>

</body>
<script src="Bootstrap4/js/jquery-3.5.1.min.js"></script>
<script src="Bootstrap4/js/bootstrap.min.js"></script>
<script src="Bootstrap4/js/bootstrap.js"></script>

</html>