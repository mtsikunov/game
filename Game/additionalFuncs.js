function drawRotatedObject(object, angle, originX = object.position.x + object.width / 2, 
                                          originY = object.position.y + object.height / 2){
    if (!object.model.complete) return;
    ctx.save();
    ctx.translate(originX, originY);
    ctx.rotate(angle);
    ctx.drawImage(object.model, object.position.x - originX, object.position.y - originY);
    ctx.restore();
}
