// 程序入口
let gameConfig = new GameConfig.ApplicationConfig()
gameConfig.DebugEnableFPS(true)

let gGame: Game = new Game();
Laya.timer.frameLoop(1, gGame, gGame.MainLoop);