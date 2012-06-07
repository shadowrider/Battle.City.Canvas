var Tank = function(x,y) {
  this.x = x;
  this.y = y;
  this.sprite = new Image();
  this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Ua.gif";
  this.isA = true;
  this.direction = "up";
}

Tank.prototype.moveUp = function() {
  this.y--;
  this.direction = "up";
  if(this.isA) {
    this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Ub.gif";
    this.isA = false;
    return false;
  }
  this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Ua.gif";
  this.isA = true;
}

Tank.prototype.moveDown = function() {
  this.y++;
  this.direction = "down";
  if(this.isA) {
    this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Db.gif";
    this.isA = false;
    return false;
  }
  this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Da.gif";
  this.isA = true;
}

Tank.prototype.moveLeft = function() {
  this.x--;
  this.direction = "left"
  if(this.isA) {
    this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Lb.gif";
    this.isA = false;
    return false;
  }
  this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_La.gif";
  this.isA = true;
}

Tank.prototype.moveRight = function() {
  this.x++;
  this.direction = "right";
  if(this.isA) {
    this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Rb.gif";
    this.isA = false;
    return false;
  }
  this.sprite.src = "img/tank1/NES_Battle_Citty_P1T1_Ra.gif";
  this.isA = true;
}