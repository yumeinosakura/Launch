enum GAME_STATE {
    TITLE,
    GAMEING,
}

enum SUB_GAME_STATE {
    ENTER,
    RUN,
    EXIT,
}

interface GameInfo {
    GameState: GAME_STATE;
    SubGameState: SUB_GAME_STATE;
}
    
class Game {
    private gameInfo: GameInfo;

    constructor() {
        this.gameInfo = {GameState: GAME_STATE.TITLE, SubGameState: SUB_GAME_STATE.ENTER};
    }

    MainLoop(): void {
        this.Main();
        this.Draw();
    }

    Main(): void {
        this.UpdateGameState();
    }

    Draw(): void {
        console.log("Draw");
    }

    UpdateGameState(): void {
        switch (this.gameInfo.GameState) {
            case GAME_STATE.TITLE:
            this.UpdateTitle();
            break;

            case GAME_STATE.GAMEING:
            this.UpdateGameing();
            break;
        }
    }

    UpdateTitle(): void {
        switch (this.gameInfo.SubGameState) {
            case SUB_GAME_STATE.ENTER:
            this.UpdateTitleEnter();
            break;

            case SUB_GAME_STATE.RUN:
            this.UpdateTitleRun();
            break;

            case SUB_GAME_STATE.EXIT:
            this.UpdateTitleExit();
            break;
        }
    }

    UpdateTitleEnter(): void {
    }

    UpdateTitleRun(): void {
    }

    UpdateTitleExit(): void {

    }

    UpdateGameing(): void {

    }
}