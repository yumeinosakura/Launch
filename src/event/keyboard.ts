module Events {
    export class KeyBoradInspector {
        private keyCode: number;

        constructor() {
        }

        RegisterInsperctor(): void {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyUp);
            Laya.stage.on(Laya.Event.KEY_PRESS, this, this.OnKeyPress);
        }

        private OnKeyDown(e: Laya.Event): void {
            console.log(e["keyCode"]);
            this.keyCode = e["keyCode"];
        }

        private OnKeyUp(e: Laya.Event): void {
            console.log(e["keyCode"]);
            this.keyCode = e["keyCode"];
        }

        private OnKeyPress(e: Laya.Event): void {
            console.log(e["keyCode"]);
            this.keyCode = e["keyCode"];
        }

        GetKeyDownCode(): number {
            return this.keyCode;
        }
    }
}
