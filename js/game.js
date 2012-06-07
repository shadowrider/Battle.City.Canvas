/**
 * Created with JetBrains WebStorm.
 * User: ShadowRider
 * Date: 12-05-23
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */
$(function() {
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');
  var tank = new Tank(canvas.width/2,canvas.height/2);
  var Bullet = function(x,y, direction) {
    this.x = x;
    this.y = y;
    this.vel = 2;
    this.direction = direction;
  }

  Bullet.prototype.move = function() {
    switch(this.direction) {
      case "up":
        this.y--;
        break;
      case "right":
        this.x++;
        break;
      case "down":
        this.y++;
        break;
      case "left":
        this.x--;
      default:
    }
  }

  var bullets = [];

  $(document).keydown(function(e) {
    if(e.keyCode == 38) {
      tank.moveUp();
    }
    if(e.keyCode == 40) {
      tank.moveDown();
    }
    if(e.keyCode == 39) {
      tank.moveRight();
    }
    if(e.keyCode == 37) {
      tank.moveLeft();
    }
    if(e.keyCode == 32) {
      var bullet = {};
      if(tank.direction == "up") {
        bullet = new Bullet(tank.x+tank.sprite.width/2, tank.y, tank.direction);
      }
      if(tank.direction == "down") {
        bullet = new Bullet(tank.x+tank.sprite.width/2, tank.y+tank.sprite.height, tank.direction);
      }
      if(tank.direction == "left") {
        bullet = new Bullet(tank.x, tank.y+tank.sprite.height/2, tank.direction);
      }
      if(tank.direction == "right") {
        bullet = new Bullet(tank.x+tank.sprite.width, tank.y+tank.sprite.height/2, tank.direction);
      }
      bullets.push(bullet);
    }
  });

  function render() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(tank.sprite, tank.x, tank.y);
    for(var i = 0; i < bullets.length; i++ ) {
      bullets[i].move();
      context.fillRect(bullets[i].x,bullets[i].y,2,2);
    }
  }

  function animLoop() {
    render();
    requestAnimFrame(animLoop);
  }

  animLoop();
});