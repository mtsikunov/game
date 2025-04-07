class Gun extends Object{
    constructor(width, height, model, x, y, type, bulletsCount, fireType){
        super(width, height, model, x, y, type);
        this._position = {x, y};
        this._bulletsCount = bulletsCount;
        this._fireType = fireType;
    }

    get type(){
        return this._type;
    }

    set type(type){
        this._type = type;
    }

    get bulletsCount(){
        return this._bulletsCount;
    }

    set bulletsCount(bulletsCount){
        this._bulletsCount = bulletsCount;
    }

    get fireType(){
        return this.fireType;
    }

    set fireType(fireType){
        this._fireType = fireType;
    }

    shoot(){
        
    }
}