var Player = /** @class */ (function () {
    function Player(playerInfo) {
        this.playerInfo = playerInfo;
    }
    Player.prototype.SetVisible = function (isVisible) {
        this.playerInfo.visible = isVisible;
    };
    Player.prototype.isVisible = function () {
        return this.playerInfo.visible;
    };
    return Player;
}());
//# sourceMappingURL=player.js.map