let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gun = new Gun(50, 50, "./images/RevolverJudge.png");
let player = new Player(200, 200, 1000, "./images/player/cat.png", 100, 100, gun, 0, 7);
let masterHitbox = new MasterHitbox();

let otherHitbox = new Hitbox(100, 100, 400, 400, undefined);
let otherHitbox1 = new Hitbox(100, 100, 50, 50, undefined);

function takeDamage(){
    player.health -= 1;
}

masterHitbox.addCollisionRule(player, otherHitbox, takeDamage, "PlayerAndOtherHitbox");

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gun.position = {x: player.position.x + 100, y: gun.position.y = player.position.y + 60}
    drawRotatedObject(gun, player.angle, player.position.x + 110, player.position.y + 70);
    player.drawEntity();
    player.update();
    showAllHitboxes();
    masterHitbox.checkAllHitboxes();
    console.log(player.health);

    requestAnimationFrame(update);
}

requestAnimationFrame(update);