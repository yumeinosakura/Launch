module KeyEvent {
    export class KeyBoradInspector {
        constructor() {
            this.RegisterInsperctor();
        }

        private RegisterInsperctor(): void {
            this.ListenKeyboard()
        }

        private ListenKeyboard(): void {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyUp);
            Laya.stage.on(Laya.Event.KEY_PRESS, this, this.OnKeyPress);
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
