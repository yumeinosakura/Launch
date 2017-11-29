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

            // 设置颜色
            Laya.stage.bgColor = "#111111";
        }

        DebugEnableFPS(enable: boolean): void {
            if (enable) {
                Laya.Stat.show(0, 0)
            } else {
                Laya.Stat.hide()
            }
        }
    }
}