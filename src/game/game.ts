enum GAME_STATE {
    LOADING,
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

    // Loading
    Loading: Laya.ProgressBar;
    LoadingIsCall: boolean;

    // Title
    Play: Laya.Button;

    // Stage
    Stage: StageAir.Air;
}
    
class Game {
    private gameInfo: GameInfo;

    constructor() {
        this.gameInfo = {
            GameState: GAME_STATE.LOADING
            , SubGameState: SUB_GAME_STATE.ENTER
            , Loading: null
            , LoadingIsCall: false
            , Play: null
            , Stage: null};
    }

    MainLoop(): void {
        this.Main();
    }

    Main(): void {
        this.UpdateGameState();
    }

    private UpdateGameState(): void {
        switch (this.gameInfo.GameState) {
            case GAME_STATE.LOADING:
            this.UpdateLoading();
            break;

            case GAME_STATE.TITLE:
            this.UpdateTitle();
            break;

            case GAME_STATE.GAMEING:
            this.UpdateGameing();
            break;
        }
    }

    private UpdateLoading(): void {
        switch (this.gameInfo.SubGameState) {
            case SUB_GAME_STATE.ENTER:
            this.UpdateLoadingEnter();
            break;

            case SUB_GAME_STATE.RUN:
            this.UpdateLoadingRun();
            break;

            case SUB_GAME_STATE.EXIT:
            this.UpdateLoadingExit();
            break;
        }
    }

    private UpdateLoadingEnter(): void {
        Laya.loader.load(["res/ui/loading/loading.png", "res/ui/loading/loading$bar.png"], Laya.Handler.create(this, this.OnLoadingAssertLoaded));
        this.gameInfo.SubGameState = SUB_GAME_STATE.RUN;
    }

    private UpdateLoadingRun(): void {
        if (this.gameInfo.LoadingIsCall == false) {
            let image = [
                "res/ui/title/play.png",
                "res/actor/enemy/e01.png"
            ];
            Laya.loader.load(image, Laya.Handler.create(this, this.OnLoadingAllAssert), Laya.Handler.create(this, this.OnLoadingAllAssert));
            this.gameInfo.LoadingIsCall = true;
        }
    }

    private UpdateLoadingExit(): void {
        this.gameInfo.GameState = GAME_STATE.TITLE;
        this.gameInfo.SubGameState = SUB_GAME_STATE.ENTER;
        this.gameInfo.Loading.destroy();
        this.gameInfo.Loading = null;
    }

    private OnLoadingAssertLoaded(): void {
        this.gameInfo.Loading = new Laya.ProgressBar("res/ui/loading/loading.png");
        this.gameInfo.Loading.x = 80;
        this.gameInfo.Loading.y = 240;
        this.gameInfo.Loading.width = 160;
        this.gameInfo.Loading.value = 0.0;

        Laya.stage.addChild(this.gameInfo.Loading);
    }

    private OnLoadingAllAssert(prograss: number): void {
        this.gameInfo.Loading.value = prograss;
        if (prograss >= 1.0) {
            this.gameInfo.SubGameState = SUB_GAME_STATE.EXIT;
        }
    }

    private UpdateTitle(): void {
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

    private UpdateTitleEnter(): void {
        this.gameInfo.Play = new Laya.Button("res/ui/title/play.png");
        this.gameInfo.Play.pos(GameConfig.GetStageWidth() / 2.0 - 16, 700);
        this.gameInfo.Play.width = 32;
        this.gameInfo.Play.height = 32;
        this.gameInfo.Play.clickHandler = Laya.Handler.create(this, this.OnPlayClicked);

        Laya.stage.addChild(this.gameInfo.Play);

        this.gameInfo.SubGameState = SUB_GAME_STATE.RUN;
    }

    private UpdateTitleRun(): void {
    }

    private UpdateTitleExit(): void {
        this.gameInfo.GameState = GAME_STATE.GAMEING;
        this.gameInfo.SubGameState = SUB_GAME_STATE.ENTER;
        this.gameInfo.Play.destroy();
        this.gameInfo.Play = null;
    }

    private OnPlayClicked(): void {
        this.gameInfo.SubGameState = SUB_GAME_STATE.EXIT;
    }

    private UpdateGameing(): void {
        if (this.gameInfo.Stage == null) {
            this.gameInfo.Stage = new StageAir.Air();
        }
        this.gameInfo.Stage.Main();
        this.gameInfo.Stage.Draw();
    }
}