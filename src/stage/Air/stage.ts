module StageAir {
    interface StageInfo {
        name: String;
    }

    export class Air {
        private player: Actor.Player;

        constructor() {
            enemy.EnemyE01.Create(200, 0);
            this.player = new Actor.Player({pos: {x: 200, y: 500}, id: 1, visible: true, alive: true});
        }

        Main() {
            enemy.Main();
            this.player.Main();
        }

        Draw() {
            enemy.Draw();
            this.player.Draw();
        }
    }
}