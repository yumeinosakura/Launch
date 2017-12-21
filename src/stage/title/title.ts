module Stage {
    export class Title extends StageBase {
        private startButton: Laya.Button;

        constructor() {
            super();
        }

        Init(): void {
            this.stageType = StageType.STAGE_TITLE;
            this.InitStartButton();
        }

        Main(): void {
        }

        Draw(): void {
        }

        Destroy(): void {
            Laya.stage.removeChild(this.startButton);
        }

        private InitStartButton(): void {
            let buttonTexture: Laya.Texture = Laya.loader.getRes("res/ui/title/play.png");
            this.startButton = new Laya.Button("res/ui/title/play.png", "START");
            this.startButton.pos(200, 700);
            this.startButton.width = 64;
            this.startButton.height = 32;
            this.startButton.on(Laya.Event.CLICK, this, this.OnClickStartButton);

            Laya.stage.addChild(this.startButton);
        }

        private OnClickStartButton(): void {
            this.nextStageType = StageType.STAGE_AIR;
        }
    }
}