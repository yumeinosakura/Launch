module enemy {

    let EnemyList: util.Map<Enemy> = new util.Map<Enemy>(10, util.DefaultHashMethod);
    let EnemyIdGen: number = 0;

    export function Init(): void {
    }

    export function Main(): void {
        for (let enemy of EnemyList) {
            enemy.value.Main();
        }

        // TODO: 移除死亡的敌人
    }

    export function Draw(): void {
        for (let enemy of EnemyList) {
            enemy.value.Draw();
        }
    }

    export function Destroy(): void {
    }

    function GenID(): number {
        let id: number = EnemyIdGen;
        EnemyIdGen = EnemyIdGen + 1;
        return id;
    }

    abstract class Enemy {
        private _Id: number;
        private _X: number;
        private _Y: number;
        private _IsDead: boolean;

        set Id(id: number) {
            this._Id = id;
        }

        get Id(): number {
            return this._Id;
        }

        set X(x: number) {
            this._X = x;
        }

        get X(): number {
            return this._X;
        }

        set Y(y: number) {
            this._Y = y;
        }

        get Y(): number {
            return this._Y;
        }

        set IsDead(isDead: boolean) {
            this._IsDead = isDead;
        }

        get IsDead(): boolean {
            return this._IsDead;
        }

        abstract Main(): void;
        abstract Draw(): void;
        abstract Destroy(): void;
    };

    export class EnemyE01 extends Enemy {
        private Sprite: Laya.Sprite;

        static Create(x: number, y: number): number {
            let e01: EnemyE01 = new EnemyE01();
            e01.X = x;
            e01.Y = y;
            e01.Id = GenID();
            EnemyList.insert(e01.Id, e01);

            return e01.Id;
        }

        constructor() {
            super();
            this.Sprite = new Laya.Sprite();

            let tex: Laya.Texture = Laya.loader.getRes("res/actor/enemy/e01.png");
            this.Sprite.graphics.drawTexture(tex);

            Laya.stage.addChild(this.Sprite);
        }

        Main(): void {
            this.Y = this.Y + 2.0;

            if (this.Y > GameConfig.GetStageHeight() + this.Sprite.getBounds().height) {
                this.IsDead = true;
            }
        }

        Draw(): void {
            this.Sprite.pos(this.X, this.Y);
        }

        Destroy(): void {
            this.Sprite.removeSelf();
            this.Sprite.destroy();
            this.Sprite = null;
        }
    };
};