class Player{
    constructor(width, height, health, gun, x = 0, y = 0){
        this.width = width;
        this.height = height;
        this.health = health;
        this.ammo = ammo;
        this.gun = gun;
        this.position = {x, y};
        this.model = new Image();
        this.model.src = "./images/player/cat.png";
    }

    get health(){
        return this.health;
    }

    set health(health){
        this.health = health;
    }

    get ammo(){
        return this.ammo;
    }

    set ammo(ammo){
        this.ammo = ammo;
    }

    get gun(){
        return this.gun;
    }

    set gun(gun){
        this.gun = gun;
    }

    get position(){
        return {x, y};
    }

    set position({x, y}){
        this.position = {x, y};
    }

    drawPlayer(ctx){
        ctx.drawImage(img, this.position.x, this.position.y);
    }
}