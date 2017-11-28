var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["TITLE"] = 0] = "TITLE";
    GAME_STATE[GAME_STATE["GAMEING"] = 1] = "GAMEING";
})(GAME_STATE || (GAME_STATE = {}));
var Game = /** @class */ (function () {
    function Game() {
        this.gameInfo.GameState = GAME_STATE.TITLE;
    }
    Game.prototype.Main = function () {
    };
    Game.prototype.Draw = function () {
    };
    Game.prototype.UpdateGameState = function () {
        switch (this.gameInfo.GameState) {
            case GAME_STATE.TITLE:
                break;
            case GAME_STATE.GAMEING:
                break;
        }
    };
    return Game;
}());
//# sourceMappingURL=game.js.map