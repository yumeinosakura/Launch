module Base {
    export interface BaseLogic {
        Init(): void;
        Main(): void;
        Draw(): void;
        Destroy(): void;
    }

    export abstract class Task implements BaseLogic {
        constructor() {
            this.Init();
        }

        Init(): void {
            Laya.timer.frameLoop(1, this, this.Main);
            Laya.timer.frameLoop(1, this, this.Draw);
        }

        Destroy(): void {
            Laya.timer.clearAll(this);
        }

        abstract Main(): void;
        abstract Draw(): void;
    }
}