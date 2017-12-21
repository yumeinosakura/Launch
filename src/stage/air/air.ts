module Stage {
    export class Air extends StageBase {
        private player: Actor.Player;

        constructor() {
            super();
        }

        Init(): void {
            this.stageType = StageType.STAGE_AIR;

            enemy.EnemyE01.Create(200, 0);
            enemy.EnemyE02.Create();
            this.player = new Actor.Player({pos: {x: 200, y: 500}, rotate: 0.0, id: 1, visible: true, alive: true});
        }

        Main(): void {
            enemy.Main();
            this.player.Main();
        }

        Draw(): void {
            enemy.Draw();
            this.player.Draw();
        }

        Destroy(): void {

        }
    }
}