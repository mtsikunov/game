class Entity{
    constructor(width, height, health, model, x, y){
        this._width = width;
        this._height = height;
        this._health = health;
        this._position = {x, y};
        this._model = new Image();
        this._model.src = model;
    }

    get width(){return this._width;}
    set width(width){this._width = width;}

    get height(){return this._height;}
    set height(height){this._height = height;}

    get health(){return this._health;}
    set health(health){this._health = health;}

    get model(){return this._model;}
    set model(model){this._model = model;}

    get position(){return this._position;}
    set position({x, y}){this._position = {x, y};}

    drawEntity(){
        ctx.drawImage(this._model, this._position.x, this._position.y);
    }

    moveTo(x, y){
        this._position.x = x;
        this._position.y = y;
    }
}