module Events {
    export interface KeyInfo {
        keyCode: number;
        isDown: boolean;
        isUp: boolean;
        isPress: boolean;
    }

    export abstract class KeyBoradInspector {
        constructor() {
        }

        RegisterInsperctor(): void {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyUp);
            Laya.stage.on(Laya.Event.KEY_PRESS, this, this.OnKeyPress);
        }

        abstract OnKeyDown(e: Laya.Event): any;
        abstract OnKeyUp(e: Laya.Event): any;
        abstract OnKeyPress(e: Laya.Event): any;
    }
}
