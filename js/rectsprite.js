var RectSprite = function (w, h) {
    Sprite.call(this);

    this.width = w;
    this.height = h;

    this.velocity = 10;
};

inherits(RectSprite, Sprite);

RectSprite.prototype.update = function (delta) {
    this.x += this.velocity * delta;
};

RectSprite.prototype.draw = function (context) {
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
};
