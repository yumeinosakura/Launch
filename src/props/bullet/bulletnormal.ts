module Bullet {
    export class BulletNormal extends BulletBase {
        private bulletInfo: BulletInfo;
        private bullet: Laya.Sprite;

        constructor() {
            super();
            this.Init();
        }

        Init(): void {
            this.bullet = new Laya.Sprite();
            this.bullet.loadImage("res/props/bullet/bullet1.png");
            this.bullet.x = 360;
            this.bullet.y = 1000;

            Laya.stage.addChild(this.bullet);
        }

        Main(): void {
            if (this.bullet) {
                this.bullet.y -= 1;
            }
        }

        Draw(): void {
        }

        Destroy(): void {
            Laya.stage.removeChild(this.bullet);
            this.bullet.destroy();
        }
    }
}