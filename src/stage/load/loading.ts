module Stage {
    export class Loading extends StageBase {
        private progressBar: Laya.ProgressBar;
        private LOADING_BOTTOM_TEXTURE_PATH: string;
        private LOADING_TEXTURE_PATH: string;

        constructor() {
            super();
        }

        Init(): void {
            this.stageType = StageType.STAGE_LOADING;
            this.InitUI();
        }

        Main(): void {
            if (this.progressBar) {
                
            }
        }

        Draw(): void {
        }

        Destroy(): void {
            Laya.stage.removeChild(this.progressBar);
            this.progressBar.destroy();
        }

        private InitUI(): void {
            this.LOADING_BOTTOM_TEXTURE_PATH = "res/ui/loading/loading$bar.png";
            this.LOADING_TEXTURE_PATH = "res/ui/loading/loading.png";

            let resList: Array<string> = [];
            resList.push(this.LOADING_BOTTOM_TEXTURE_PATH);
            resList.push(this.LOADING_TEXTURE_PATH);

            Laya.loader.load(resList, Laya.Handler.create(this, this.OnAssetsLoadedUI));
        }

        private OnAssetsLoadedUI(): void {
            let loadPic: Laya.Texture = Laya.Loader.getRes(this.LOADING_TEXTURE_PATH);

            this.progressBar = new Laya.ProgressBar();
            this.progressBar.x = 80;
            this.progressBar.y = 240;
            this.progressBar.width = 160;
            this.progressBar.value = 0;
            this.progressBar.graphics.drawTexture(loadPic);

            Laya.stage.addChild(this.progressBar);

            this.InitRes();
        }

        private InitRes(): void {
            let urls: Array<string> = [];

            // title resource
            urls.push("res/ui/title/play.png");
            Laya.loader.load(urls, Laya.Handler.create(this, this.OnAssetsLoadedRes), Laya.Handler.create(this, this.OnAssetsProgress));
        }

        private OnAssetsLoadedRes(): void {
        }

        private OnAssetsProgress(progress: number): void {
            if (progress >= 1.0) {
                this.nextStageType = StageType.STAGE_TITLE;
            }
        }
    }
}