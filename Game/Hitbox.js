class Hitbox{
    constructor(width, height, startPosX, startPosY, parent){
        this._width = width;
        this._height = height;
        this._startPosX = startPosX;
        this._startPosY = startPosY
        this._parent = parent;
        this.hitbox = this;

        if(window.hitboxArr == undefined){
            window.hitboxArr = []; window.hitboxArr[0] = this;
        } else {
            window.hitboxArr[window.hitboxArr.length] = this;
        }
    }

    get width(){return this._width;}
    set width(width){this._width = width;}

    get height(){return this._height;}
    set height(height){this._height = height;}

    get startPosX(){return this._startPosX;}
    set startPosX(startPosX){this._startPosX = startPosX;}

    get startPosY(){return this._startPosY;}
    set startPosY(startPosY){this._startPosY = startPosY;}

    get parent(){return this._parent;}
    set parent(parent){this._parent = parent;}

    showHitbox(){
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#ADFF2F";
        ctx.beginPath();
        ctx.rect(this._startPosX, this._startPosY, this._width, this._height);
        ctx.stroke();
    }

    checkHitbox(objectB){
        return (this.startPosX < objectB.startPosX + objectB.width &&
        this.startPosX + this.width > objectB.startPosX &&
        this.startPosY < objectB.startPosY + objectB.height &&
        this.startPosY + this.height > objectB.startPosY)
    }
}

class MasterHitbox{
    constructor(storage){this._storage = storage; this._storage = {};}
    
    get storage(){return this._storage;}
    set storage(storage){this._storage = storage;}

    addCollisionRule(objectA, objectB, rule, name){
        this._storage[name] = {firstObject: objectA, secondObject: objectB, actionFunction: rule};
    }

    checkAllHitboxes(){
        for(let i = 0; i < window.hitboxArr.length; i++){
            for(let j = 0; j < window.hitboxArr.length; j++){
                if(i == j) break;
                if(window.hitboxArr[i].checkHitbox(window.hitboxArr[j])){
                    for(let object in this._storage){
                        if((this._storage[object].firstObject.hitbox == window.hitboxArr[i] || this._storage[object].secondObject.hitbox == window.hitboxArr[i]) &&
                           (this._storage[object].firstObject.hitbox == window.hitboxArr[j] || this._storage[object].secondObject.hitbox == window.hitboxArr[j])){
                            this._storage[object].actionFunction();
                        }
                    }
                }
            }
        }
    }
}

function showAllHitboxes(){
    for(let i = 0; i < window.hitboxArr.length; i++){
        window.hitboxArr[i].showHitbox();
    }
}