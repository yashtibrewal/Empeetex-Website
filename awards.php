<!DOCTYPE html>
<html lang="en">

<head>

  <?php
  include('./partials/header.php')
  ?>
  <title>Achievements</title>
  <link rel="stylesheet" href="resources/css/awards.css">
</head>

<body>
  <!-- Start of Navbar -->
  <?php
  include('./partials/navigation.php')
  ?>
  <!-- End Of Navbar -->

  <!-- Start of Main Content -->
  <div id="main-content" class="container">
    <h2 id="certificate1" class="text-center">Awards</h2>
    <div class="row">

      <!-- Picture 1 -->
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="row">
          <div id="block1" class="text-center col-xl-10 offset-xl-1 col-10 offset-1 col-md-10 offset-md-1 block col-sm-11 offset-sm-1">
            <h3>Certificate of Merit, by SRTEPC</h3>
            <img src="resources/images/awards/Photo 1.webp" alt="">
            <p>Presented by Honourable Misnister of Textiles, Govt. of India
            </p>
          </div>
        </div>
      </div>

      <!-- Picture 3 -->
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="row">
          <div id="block2" class="text-center col-10 offset-1 col-md-10 offset-md-1 block col-sm-11 offset-sm-1">
            <h3>Trophy of Appreciation</h3>
            <img src="resources/images/awards/Photo 3.webp" alt="">
            <p>Presented by Honourable Minister of Textiles: Mr. Santosh Gangwar, Govt. of India</p>
          </div>
        </div>
      </div>

      <!-- Picture 2 -->
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <div class="row">
          <div id="block3" class="text-center col-lg-10 offset-lg-1 col-10 offset-1 col-xl-110 offset-xl-1 col-md-6 offset-md-3 col-sm-7 offset-sm-3 block">
            <h3>Certificate of Merit, by SRTEPC</h3>
            <img src="resources/images/awards/Photo 2.webp" alt="">
            <p>Presented by Secretary Textiles, Govt. of India</p>
          </div>
        </div>
      </div>

      <!-- <div class="clearfix visible-lg visible-md visible-sm"></div> -->



      <!-- Certificate Heading Block For all other Breakpoints  Thank XL-->
      <div class="certificate_block col-md-12 d-sm-block d-md-block d-xl-none col-12">
        <div class="row">
          <div id="certificate_block1" class="text-center col-xl-10 col-offset-1 col-md-10 offset-md-1 col-10 offset-1">
            <h3 id="certificate1"> Certificates </h3>
          </div>
        </div>
      </div>


      <!-- Certificate 1 Block -->
      <div class="certificate1 col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div class="row">
          <div id="block4" class="text-center block col-10 offset-1 col-xl-10 offset-xl-1 col-lg-9 offset-lg-2 col-md-10 offset-md-1 col-sm-11 offset-sm-1">
            <img src="resources/images/awards/cert 1 nh.webp" alt="">
          </div>
        </div>
      </div>

      <!-- Certificate Heading Block Only For XL Breakpoint -->
      <div class="certificate_heading col-xl-4 col-md-12 d-lg-none d-xl-block d-md-none d-sm-none d-none">
        <div class="row">
          <div id="block5" class="text-center col-xl-12  col-md-12">
            <h3 id="certificate"> Certificates </h3>
          </div>
        </div>
      </div>

      <!-- Certificate 2 Block -->
      <div class="certificate1 col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div class="row">
          <div id="block6" class="text-center  block col-10 offset-1 col-xl-10 offset-xl-1 col-lg-9 offset-lg-1 col-md-10 offset-md-1 col-sm-11 offset-sm-1">
            <img src="resources/images/awards/cert 2 nh.webp" alt="">
          </div>
        </div>
      </div>


    </div> <!-- End Of Row Div-->
  </div><!-- End Of Container Div-->

  <!-- End of Main Content -->

  <!-- Footer Of The Page -->
  <footer>
    <div class="text-center">
      <p>
        Contact Us at <span id="email"> pankaj@empeetex.com</span>
        <span class="hidden">|</span> &nbsp;Phone:&nbsp;+91&nbsp;9820618154
      </p>
    </div>
  </footer>
  <!-- JS and Jquery Scripts for The Page At End so WebPage Loads Faster -->
  <script src="Bootstrap4/js/jquery-3.5.1.min.js"></script>
  <script src="Bootstrap4/js/bootstrap.min.js"></script>
  <script src="Bootstrap4/js/bootstrap.js"></script>
</body>

</html>