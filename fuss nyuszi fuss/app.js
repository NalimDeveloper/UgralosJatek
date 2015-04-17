Crafty.audio.add("jump", "sound/jump.wav");
Crafty.audio.add("song", "sound/background.mp3");
Crafty.audio.add("error", "sound/error.mp3");


//Jelenetek
Crafty.defineScene("Game Over", function() {
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 100, h: 20, x: 150, y: 120 })
          .text("Játék vége...")
          .css({ "text-align": "center"})
          .textColor("#FFFFFF");
		  	  Crafty.audio.stop("song");
		  	

});


	

//Mellék függvények
function chkGameOver() {
	Crafty.e("Delay").delay(function() {
	  player_position = player.pos();
	  console.log(player_position);
			console.log(player_position);
				if (player_position._y > 400) {  
				Crafty.audio.play("error", 1, 0.5);
				Crafty.enterScene("Game Over");
				} 

			}, 3000, 0);

}	


//Canvas

 Crafty.init(1000,400, document.getElementById('game')).background("#F9E3CB");
Crafty.audio.play("song", -1);
 
//Cím
var title = Crafty.e('2D, Canvas, Text')
  .attr({
    x: 10,
    y: 10  
  });
  title.text("Rabbit Run");
 
 
// Pálya létrehozás
var s=200;
var floor = Crafty.e('Floor, 2D, Canvas, Color').color("red");
var floor2 = Crafty.e('Floor, 2D, Canvas, Color').color('green'); 
var palya = new Array(); 
for (i=0; i<500000; i+=250) {
	var max=150;
	var min = 50;
	rndw = Math.floor(Math.random() * (max-min+1))+min;
	maxy = 400;
	miny = 100;
	
	rndy = Math.floor(Math.random() * (maxy-miny+1))+miny;
palya[i] = Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: i, y: rndy, w: rndw, h: 10})
  .color('#88382D')	
}

//Pálya újrarajzolás
function ReDraw(m) {
	for (i=0; i<5000; i+=250) {
	maxy = 400;
	miny = 100;	
	palya[i].attr({x: i-m});
	
}	


}


//Játékos létrehozás
 var player = Crafty.e('2D, Canvas, Color, Fourway, Gravity');
  player.attr({x: 0, y: 0, w: 50, h: 50});
  player.color('#133050');
  player.fourway(8);
  player.gravity('Floor');
	Crafty.viewport.follow(player, 0, 0);

  
  
  var player_position = player.pos();

   
  player.bind('KeyDown', function(e) {
    if(e.key == Crafty.keys.LEFT_ARROW) {
      this.x = this.x-1;
	  player_position = player.pos();
	  console.log(player_position);
	  chkGameOver();
			
    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
      this.x = this.x+1;
	  player_position = player.pos();
	  console.log(player_position);
	  chkGameOver();
    } else if (e.key == Crafty.keys.UP_ARROW) {
      this.y = this.y-1;
	  player_position = player.pos();
	  console.log(player_position);
	  Crafty.audio.play("jump",1,0.8);
	  chkGameOver();
    } else if (e.key == Crafty.keys.DOWN_ARROW) {
      this.y = this.y+1;
	  player_position = player.pos();
	  console.log(player_position);
	  chkGameOver();
    }
  });
  
   player.onclick = function(e) {
       this.x = this.x-1;
	  player_position = player.pos();
	  console.log(player_position);
	  chkGameOver();
	  ReDraw(-1);
    };


 

//Játék

