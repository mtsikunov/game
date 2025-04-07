class Player extends Entity{
    constructor(width, height, health, model, x, y, gun, ammo, movementStep){
        super(width, height, health, model, x, y);
        this._gun = gun;
        this._ammo = ammo;
        this._keys = {};
        this._movementStep = movementStep;
        this._angle = 0; 
        this._hitbox = new Hitbox(100, 200, this._position.x, this._position.y, this);

        document.onkeydown = (event) => this._keys[event.key] = true;
        document.onkeyup = (event) => this._keys[event.key] = false; 

        document.addEventListener("mousemove", (event) => {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            let dx = this.mouseX - this._gun.position.x;
            let dy = this.mouseY - this._gun.position.y;
            this._angle = Math.atan2(dy, dx);
            this.angleDeg = this._angle * (180 / Math.PI);
        }); 
    }

    get gun(){return this._gun;}
    set gun(gun){this._gun = gun;}

    get ammo(){return this._ammo;}
    set ammo(ammo){this._ammo = ammo;}

    get movementStep(){return this._movementStep;}
    set movementStep(movementStep){this._movementStep = movementStep;}

    get angle(){return this._angle;}

    get hitbox(){return this._hitbox;}
    set hitbox(hitbox){this._hitbox = hitbox;}

    update(){
        if(this._keys["Shift"]){
            this._movementStep = 2;
        }
        if(this._keys["w"]){
            this.moveTo(this._position.x, this._position.y -= this._movementStep);
        }
        if(this._keys["s"]){
            this.moveTo(this._position.x, this._position.y += this._movementStep);
        }
        if(this._keys["a"]){
            this.moveTo(this._position.x -= this._movementStep, this._position.y);
        }
        if(this._keys["d"]){
            this.moveTo(this._position.x += this._movementStep, this._position.y);
        }
        if(this._position.x <= 0){
            this._position.x = 0;
        }
        this._hitbox.startPosX = this.position.x; this._hitbox.startPosY = this.position.y;
    }
}