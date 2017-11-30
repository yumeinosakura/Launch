// 程序入口
let gGameConfig = new GameConfig.ApplicationConfig();
GameConfig.DebugEnableFPS(true);

let gGame: Game = new Game();
Laya.timer.frameLoop(1, gGame, gGame.MainLoop);