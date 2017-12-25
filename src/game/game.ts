module GameMgr {
    export class Game extends Base.Task {
        private stage: Stage.StageBase;
        private state: Stage.StageType;

        constructor() {
            super();
        }

        Init(): void {
            super.Init();
            this.stage = new Stage.Loading();
        }

        Destory(): void {
            super.Destroy();
        }

        Main(): void {
            if (this.stage) {
                this.stage.Main();
                this.UpdateState();
            }
        }

        Draw(): void {
            if (this.stage) {
                this.stage.Draw();
            }
        }

        private UpdateState(): void {
            if (this.stage.nextstagetype != Stage.StageType.STAGE_NONE) {
                this.stage.Destroy();

                switch (this.stage.nextstagetype) {
                    case Stage.StageType.STAGE_TITLE:
                    this.stage = new Stage.Title();
                    break;
                    case Stage.StageType.STAGE_AIR:
                    this.stage = new Stage.Air();
                    break;
                }
            }
        }
    }

    export function GameStart(): void {
        new Game();
    }
}
