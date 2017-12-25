module Stage {
    export class Air extends StageBase {
        private player: Actor.Player;
        private bullet: Bullet.BulletNormal;

        constructor() {
            super();
        }

        Init(): void {
            this.stageType = StageType.STAGE_AIR;

            enemy.EnemyE01.Create(200, 0);
            enemy.EnemyE02.Create();
            this.player = new Actor.Player({pos: {x: 200, y: 500}, rotate: 0.0, id: 1, visible: true, alive: true});

            this.bullet = new Bullet.BulletNormal();
        }

        Main(): void {
            enemy.Main();
            this.player.Main();
            this.bullet.Main();
        }

        Draw(): void {
            enemy.Draw();
            this.player.Draw();
            this.bullet.Draw();
        }

        Destroy(): void {

        }
    }
}