// 程序入口
new GameConfig.ApplicationConfig()

let gGame: Game = new Game();
Laya.timer.frameLoop(1, gGame, gGame.MainLoop);