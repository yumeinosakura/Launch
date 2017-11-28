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
