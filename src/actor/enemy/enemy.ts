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
        let deadEnemyId: number[] = []
        for (let enemy of EnemyList) {
            if (!enemy.value.alive) {
                deadEnemyId.push(enemy.value.id);
            }
        }

        for (let id of deadEnemyId) {
            EnemyList.find(id).Destroy();
            EnemyList.remove(id);
        }
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

    abstract class Enemy extends Actor.ActorBase {
    };

    export class EnemyE01 extends Enemy {
        private Sprite: Laya.Sprite;

        static Create(x: number, y: number): number {
            let e01: EnemyE01 = new EnemyE01();
            e01.pos = {x: x, y: y};
            e01.id = GenID();
            EnemyList.insert(e01.id, e01);

            return e01.id;
        }

        constructor() {
            super({pos: {x: 0, y: 0}, rotate: 0, id: -1, visible: true, alive: true})
            this.Sprite = new Laya.Sprite();

            let tex: Laya.Texture = Laya.loader.getRes("res/actor/enemy/e01.png");
            this.Sprite.graphics.drawTexture(tex);

            Laya.stage.addChild(this.Sprite);
        }

        Init(): void {

        }

        Main(): void {
            this.pos.y = this.pos.y + 2.0;

            if (this.pos.y > GameConfig.GetStageHeight() + this.Sprite.getBounds().height) {
                this.alive = false;
            }
        }

        Draw(): void {
            this.Sprite.pos(this.pos.x, this.pos.y);
        }

        Destroy(): void {
            this.Sprite.removeSelf();
            this.Sprite.destroy();
            this.Sprite = null;
        }
    };

    export class EnemyE02 extends Enemy {
        private Sprite: Laya.Sprite;
        private Vel: util.Point;
        private Rot: number;

        static Create(): number {
            let e02: EnemyE02 = new EnemyE02();
            e02.id = GenID();
            EnemyList.insert(e02.id, e02);

            return e02.id;
        }

        constructor() {
            super({pos: {x: GameConfig.GetStageWidth() / 2.0, y: 0}, rotate: 0.0, id: -1, visible: true, alive: true})
            this.Vel = {x: 6.0, y: 3.0};
            this.Rot = 15.0;

            this.Sprite = new Laya.Sprite();

            let tex: Laya.Texture = Laya.loader.getRes("res/actor/enemy/e01.png");
            this.Sprite.graphics.drawTexture(tex);

            this.Sprite.pivot(this.Sprite.getBounds().width/2, this.Sprite.getBounds().height/2);

            Laya.stage.addChild(this.Sprite);
        }

        Init() {}

        Main() {
            this.actorInfo.rotate += this.Rot;
            this.actorInfo.pos.x += this.Vel.x;
            this.actorInfo.pos.y += this.Vel.y;
            if (this.actorInfo.pos.x > GameConfig.GetStageWidth() || this.actorInfo.pos.x < 0.0) {
                this.Vel.x = -this.Vel.x;
                this.Rot = -this.Rot;
            }

            if (this.actorInfo.pos.y > GameConfig.GetStageHeight() + this.Sprite.getBounds().height) {
                this.actorInfo.alive = false;
            }
        }

        Draw() {
            this.Sprite.pos(this.actorInfo.pos.x, this.actorInfo.pos.y);
            this.Sprite.rotation = this.actorInfo.rotate;
        }

        Destroy() {
            this.Sprite.removeSelf();
            this.Sprite.destroy();
            this.Sprite = null;
        }
    };
};