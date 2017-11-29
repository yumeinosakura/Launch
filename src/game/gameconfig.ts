module GameConfig {
    export class ApplicationConfig {
        private DEFAULT_SCREEN_WIDTH: number = 540;
        private DEFAULT_SCREEN_HEIGHT: number = 960;

        constructor() {
            // 初始化引擎
            Laya.init(this.DEFAULT_SCREEN_WIDTH, this.DEFAULT_SCREEN_HEIGHT, Laya.WebGL)

            // 设置适配模式
            Laya.stage.scaleMode = "noscale";

            // 设置竖直模式
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;

            // 设置水平对齐
            Laya.stage.alignH = "center";

            // 设置竖直对齐
            Laya.stage.alignV = "middle";
        }
    }
}