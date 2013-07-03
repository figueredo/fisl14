var Scene = function () {
    this.sprites = [];
};

Scene.prototype.addSprite = function (sprite) {
    this.sprites.push(sprite);
};

Scene.prototype.update = function (delta) {
    for (var i = 0; i < this.sprites.length; i++)
        this.sprites[i].update(delta);
};

Scene.prototype.draw = function (context) {
    for (var i = 0; i < this.sprites.length; i++) {
        context.save();
        this.sprites[i].draw(context);
        context.restore();
    }
};
