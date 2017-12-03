module Actor {
    export class Player implements ActorBase {
        private playerSprite: Laya.Sprite;
        private playerInfo: ActorInfo;

        constructor(playerInfo: ActorInfo) {
            this.playerInfo = playerInfo;
            this.Init();
        }

        private InitPlayer(): void {
            this.playerSprite = new Laya.Sprite();
            this.playerSprite.loadImage("res/actor/player/player.png");
        }

        Init(): void {
            this.InitPlayer();
        }

        Main(): void {
            this.UpdatePlayerPos();
        }

        Draw(): void {
            this.playerSprite.visible = this.playerInfo.visible;
        }

        SetX(x: number): void {
            this.playerInfo.x = x;
        }

        GetX(): number {
            return this.playerInfo.x;
        }

        SetY(y: number): void {
            this.playerInfo.y = y;
        }

        GetY(): number {
            return this.playerInfo.y;
        }

        SetVisible(visible: boolean): void {
            this.playerInfo.visible = visible;
        }

        isVisible(): boolean {
            return this.playerInfo.visible;
        }

        GetPlayer(): Laya.Sprite {
            return this.playerSprite;
        }

        private UpdatePlayerPos(): void {
            this.playerSprite.x = this.playerInfo.x;
            this.playerSprite.y = this.playerInfo.y;
        }
    }
}
    
    interface PlayerInfo {
    id: number;
    name: string;
    visible?: boolean;
}

class Player {
    private playerInfo: PlayerInfo;

    constructor(playerInfo: PlayerInfo) {
        this.playerInfo = playerInfo;
    }

    SetVisible(isVisible: boolean): void {
        this.playerInfo.visible = isVisible;
    }

    isVisible(): boolean {
        return this.playerInfo.visible;
    }
}
