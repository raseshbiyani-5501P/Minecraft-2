canvas= new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object="";
block_image_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({

      top: player_y,
      left: player_x  
     });
canvas.add(player_object);

    }
    );
}

function blocks_update(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_image_object=Img;

     block_image_object.scaleToWidth(block_image_width);
     block_image_object.scaleToHeight(block_image_height);
     block_image_object.set({

      top: player_y,
      left: player_x  
     });
canvas.add(block_image_object);

    }
    );
}

window.addEventListener ('keydown' , my_keydown);

function my_keydown(e) {

keypressed = e.keyCode;
if(e.shiftKey == true && keypressed == '80'){
    
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;

}

if(e.shiftKey == true && keypressed == '77'){
    
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    
    }

   if(keypressed == '37'){

 left();
 console.log("left arrow is pressed");
}

  if(keypressed == '38'){

    up();
    console.log("up arrow is pressed");
   }

   if(keypressed == '40'){

    down();
    console.log("down arrow is pressed");
   }

   if(keypressed == '39'){

    right();
    console.log("right arrow is pressed");
   }

   if(keypressed == '67'){
       blocks_update("cloud.jpg");
   }

   if(keypressed == '68'){
       blocks_update("dark_green.png");
   }

   if(keypressed == '71'){
       blocks_update("ground.png");
   }

   if(keypressed == '76'){
    blocks_update("light_green.png");
}

if(keypressed == '82'){
    blocks_update("roof.jpg");
}

if(keypressed == '84'){
    blocks_update("trunk.jpg");
}

if(keypressed == '85'){
    blocks_update("unique.png");
}

if(keypressed == '87'){
    blocks_update("wall.jpg");
}

if(keypressed == '89'){
    blocks_update("yellow_wall.png");
}

}

function up(){

if(player_y >= 0){

player_y = player_y - block_image_height;
canvas.remove(player_object);
player_update();
}

}

function down(){

if(player_y <=460){

player_y = player_y + block_image_height;
canvas.remove(player_object);
player_update();

}

}

function left(){

if(player_x >=0){

player_x = player_x - block_image_width;
canvas.remove(player_object);
player_update();

}

}

function right(){

if(player_x <= 850){

player_x = player_x + block_image_width;
canvas.remove(player_object);
player_update();

}

}