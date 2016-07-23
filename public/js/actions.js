$(function() {
  // Handler for .ready() called.
  // $("#item-2").click(function() {
  //   alert("This is a test; item2.....");
  // });

});
item_1_text = "Locations with a large of number of stop sign infractions. Possible hard to see stop signs."
item_2_text = "Locations with a high incidence of school zone infractions. Slow down for children."
item_3_text = "Locations with a large number of bike lane infractions. Potentially narrow road."
item_4_text = "Cars stopping on crosswalk at intersections. Watch for pedestrians."

$("#item-1").click(function() {
  $("#item-1").addClass("active");
  $("#item-2, #item-3, #item-4").removeClass("active");
  $("#map").css("display","inline");
  $("#short-text").text(item_1_text);
});

$("#item-2").click(function() {
  $("#item-2").addClass("active");
  $("#item-1, #item-3, #item-4").removeClass("active");
  $("#map").css("display","inline");
  $("#short-text").text(item_2_text);
});

$("#item-3").click(function() {
  $("#item-3").addClass("active");
  $("#item-1, #item-2, #item-4").removeClass("active");
  $("#map").css("display","inline");
  $("#short-text").text(item_3_text);
});

$("#item-4").click(function() {
  $("#item-4").addClass("active");
  $("#item-1, #item-3, #item-2").removeClass("active");
  $("#map").css("display","inline");
  $("#short-text").text(item_4_text);
});
