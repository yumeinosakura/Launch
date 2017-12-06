module Actor {
    export class Player extends ActorBase {
        private playerSprite: Laya.Sprite;
        private gamePlay: Events.GamePlay;

        constructor(actorInfo: ActorInfo) {
            super(actorInfo);
            this.Init();
        }

        Init(): void {
            this.InitPlayer();
            this.InitGamePlay();
        }

        Main(): void {
            this.UpdatePlayerPos();
        }

        Draw(): void {
            this.playerSprite.visible = this.actorInfo.visible;
        }

        private InitPlayer(): void {
            this.playerSprite = new Laya.Sprite();
            this.playerSprite.loadImage("res/actor/player/player.png");
            Laya.stage.addChild(this.playerSprite);
        }

        private InitGamePlay(): void {
            this.gamePlay = new Events.GamePlay();
        }

        GetPlayer(): Laya.Sprite {
            return this.playerSprite;
        }

        private UpdatePlayerPos(): void {
            this.HandleGamePlay();
            this.playerSprite.x = this.actorInfo.pos.x;
            this.playerSprite.y = this.actorInfo.pos.y;
        }

        private HandleGamePlay(): void {
            if (this.gamePlay.GetGamePlayInfo().KEY_LEFT.isDown) {
                this.actorInfo.pos.x -= 1;
            }

            if (this.gamePlay.GetGamePlayInfo().KEY_UP.isDown) {
                this.actorInfo.pos.y -= 1;
            }

            if (this.gamePlay.GetGamePlayInfo().KEY_RIGHT.isDown) {
                this.actorInfo.pos.x += 1;
            }

            if (this.gamePlay.GetGamePlayInfo().KEY_DOWN.isDown) {
                this.actorInfo.pos.y += 1;
            }
        }
    }
}
