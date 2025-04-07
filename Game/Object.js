class Object{
    constructor(width, height, model, x, y, type){
        this._width = width;
        this._height = height;
        this._model = new Image();
        this._model.src = model;
        this._position = {x, y};
        this._type = type;
    }

    get width(){return this._width;}
    set width(width){this._width = width;}

    get height(){return this._width;}
    set height(height){this._height = height;}

    get model(){return this._model;}
    set model(model){this._model = model;}

    get position(){return this._position;}
    set position({x, y}){this._position.x = x; this._position.y = y;}

    get type(){return this._gun;}
    set type(type){this._type = type;}

    drawObject(){
        ctx.drawImage(this._model, this._position.x, this._position.y);
    }
}