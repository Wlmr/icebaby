window.onload = function() {
   canv = document.getElementById("gc");
   ctx = canv.getContext("2d");
   document.addEventListener("keydown", keyPush);
   setup();
   setInterval(game, 200);
}
