var KeyEvent;
(function (KeyEvent) {
    var KeyBoradInspector = /** @class */ (function () {
        function KeyBoradInspector() {
            this.RegisterInsperctor();
        }
        KeyBoradInspector.prototype.RegisterInsperctor = function () {
            this.ListenKeyboard();
        };
        KeyBoradInspector.prototype.ListenKeyboard = function () {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyUp);
            Laya.stage.on(Laya.Event.KEY_PRESS, this, this.OnKeyPress);
        };
        KeyBoradInspector.prototype.OnKeyDown = function (e) {
            console.log(e["keyCode"]);
        };
        KeyBoradInspector.prototype.OnKeyUp = function (e) {
        };
        KeyBoradInspector.prototype.OnKeyPress = function (e) {
        };
        return KeyBoradInspector;
    }());
    KeyEvent.KeyBoradInspector = KeyBoradInspector;
})(KeyEvent || (KeyEvent = {}));
new KeyEvent.KeyBoradInspector();
//# sourceMappingURL=keyboard.js.map