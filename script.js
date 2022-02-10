$("#vanilla").hide();
$("#strawberry").hide();
$("#chocolate").hide();
$("#sprinkles").hide();
$("#cherry").hide();

let hasChocolate = false;
function chocolate(){
  hasChocolate = !hasChocolate;
  if( hasChocolate ) {
    $("#chocolate").show();
    $("#vanilla").hide();
    $("#strawberry").hide();
  } else {
    $("#chocolate").hide();
}
}
$("#btnchoc").click(chocolate);

let hasVanilla = false;
function vanilla(){
  hasVanilla = !hasVanilla;
  if( hasVanilla ) {
  $("#vanilla").show();
   $("#strawberry").hide();
   $("#chocolate").hide();
} else {
    $("#vanilla").hide();
}
}
$("#btnvan").click(vanilla);

let hasStrawberry = false;
function strawberry(){
  hasStrawberry = !hasStrawberry;
  if( hasStrawberry ) {
  $("#strawberry").show();
  $("#chocolate").hide();
  $("#vanilla").hide();
} else {
    $("#strawberry").hide();
}
}
$("#btnstraw").click(strawberry);

let hasSprinkles = false;
function sprinkles(){
  hasSprinkles = !hasSprinkles;
  if( hasSprinkles ) {
 $('#sprinkles').show();
  } else {
    $("#sprinkles").hide();
  }
}
$("#btnsprink").click(sprinkles);

let hasCherry = false;
function cherry(){
  hasCherry = !hasCherry;
  if( hasCherry ) {
  $("#cherry").show();
} else {
    $("#cherry").hide();
}
}
$("#btncher").click(cherry);

function restart(){
$("#vanilla").hide();
$("#strawberry").hide();
$("#chocolate").hide();
$("#sprinkles").hide();
$("#cherry").hide();
}
$("#btnrestart").click(restart);