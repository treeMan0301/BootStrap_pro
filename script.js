document.addEventListener("DOMContentLoaded", function () {
  console.log("Dashboard Loaded");
  $("#zeke-profile").hide();
  $("#sloan-profile").hide();
  $("#alex-profile").hide();
});

$(document).ready(function () {
  $("#zeke-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").show();
    $("#sloan-profile").hide();
    $("#alex-profile").hide();
  });
  $("#sloan-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").hide();
    $("#sloan-profile").show();
    $("#alex-profile").hide();
  });
  $("#alex-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").hide();
    $("#sloan-profile").hide();
    $("#alex-profile").show();
  });
});
