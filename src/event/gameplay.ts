module Events {
    export interface GamePlayInfo {
        KEY_LEFT: KeyInfo;
        KEY_UP: KeyInfo;
        KEY_RIGHT: KeyInfo;
        KEY_DOWN: KeyInfo;
    }

    export class GamePlay extends KeyBoradInspector {
        private gamePlayInfo: GamePlayInfo;

        constructor() {
            super();
            this.Init();
        }

        private Init(): void {
            this.InitGamePlayInfo();
            this.RegisterInsperctor();
        }

        private InitGamePlayInfo(): void {
            this.gamePlayInfo = {
                KEY_LEFT: {keyCode: 37, isDown: false, isUp: true, isPress: false},
                KEY_UP: {keyCode: 38, isDown: false, isUp: true, isPress: false},
                KEY_RIGHT: {keyCode: 39, isDown: false, isUp: true, isPress: false},
                KEY_DOWN: {keyCode: 40, isDown: false, isUp: true, isPress: false},
            };
        }

        private HandleOnKeyDown(keyCode: number): void {
            switch (keyCode) {
                case this.gamePlayInfo.KEY_LEFT.keyCode:
                    this.gamePlayInfo.KEY_LEFT.isDown = true;
                    this.gamePlayInfo.KEY_LEFT.isUp = false;
                    break;
                case this.gamePlayInfo.KEY_UP.keyCode:
                    this.gamePlayInfo.KEY_UP.isDown = true;
                    this.gamePlayInfo.KEY_UP.isUp = false;
                    break;
                case this.gamePlayInfo.KEY_RIGHT.keyCode:
                    this.gamePlayInfo.KEY_RIGHT.isDown = true;
                    this.gamePlayInfo.KEY_RIGHT.isUp = false;
                    break;
                case this.gamePlayInfo.KEY_DOWN.keyCode:
                    this.gamePlayInfo.KEY_DOWN.isDown = true;
                    this.gamePlayInfo.KEY_DOWN.isUp = false;
                    break;
            }
        }

        private HandleOnKeyUp(keyCode: number): void {
            switch (keyCode) {
                case this.gamePlayInfo.KEY_LEFT.keyCode:
                    this.gamePlayInfo.KEY_LEFT.isDown = false;
                    this.gamePlayInfo.KEY_LEFT.isUp = true;
                    this.gamePlayInfo.KEY_LEFT.isPress = false;
                    break;
                case this.gamePlayInfo.KEY_UP.keyCode:
                    this.gamePlayInfo.KEY_UP.isDown = false;
                    this.gamePlayInfo.KEY_UP.isUp = true;
                    this.gamePlayInfo.KEY_UP.isPress = false;
                    break;
                case this.gamePlayInfo.KEY_RIGHT.keyCode:
                    this.gamePlayInfo.KEY_RIGHT.isDown = false;
                    this.gamePlayInfo.KEY_RIGHT.isUp = true;
                    this.gamePlayInfo.KEY_RIGHT.isPress = false;
                    break;
                case this.gamePlayInfo.KEY_DOWN.keyCode:
                    this.gamePlayInfo.KEY_DOWN.isDown = false;
                    this.gamePlayInfo.KEY_DOWN.isUp = true;
                    this.gamePlayInfo.KEY_DOWN.isPress = false;
                    break;
            }
        }

        private HandleOnKeyPress(keyCode: number): void {
            switch (keyCode) {
                case this.gamePlayInfo.KEY_LEFT.keyCode:
                    this.gamePlayInfo.KEY_LEFT.isPress = true;
                    break;
                case this.gamePlayInfo.KEY_UP.keyCode:
                    this.gamePlayInfo.KEY_UP.isPress = true;
                    break;
                case this.gamePlayInfo.KEY_RIGHT.keyCode:
                    this.gamePlayInfo.KEY_RIGHT.isPress = true;
                    break;
                case this.gamePlayInfo.KEY_DOWN.keyCode:
                    this.gamePlayInfo.KEY_DOWN.isPress = true;
                    break;
            }
        }

        OnKeyDown(e: Laya.Event): void {
            this.HandleOnKeyDown(e["keyCode"]);
        }

        OnKeyUp(e: Laya.Event): void {
            this.HandleOnKeyUp(e["keyCode"]);
        }

        OnKeyPress(e: Laya.Event): void {
            this.HandleOnKeyPress(e["keyCode"]);
        }

        GetGamePlayInfo(): GamePlayInfo {
            return this.gamePlayInfo;
        }
    }
}