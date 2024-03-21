function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".hiremeprofilelink").hover(function() {
  $(".hiremeprofilesum").css("display","block");
});