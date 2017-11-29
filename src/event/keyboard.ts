module KeyEvent {
    import Stage = Laya.Stage;
    import Text = Laya.Text;
    import Event = Laya.Event;
    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;

    export class KeyBoradInspector {
        constructor() {
            this.RegisterInsperctor();
        }

        private RegisterInsperctor(): void {
            this.ListenKeyboard();
        }

        private ListenKeyboard(): void {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyUp);
            Laya.stage.on(Laya.Event.KEY_PRESS, this, this.OnKeyPress);
            Laya.stage.on
        }

        private OnKeyDown(e: Laya.Event): void {
            console.log(e["keyCode"]);
        }

        private OnKeyUp(e: Laya.Event): void {

        }

        private OnKeyPress(e: Laya.Event): void {

        }
    }
}
