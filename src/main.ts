// 程序入口
Laya.init(320, 480);

let gGame: Game = new Game();
Laya.timer.frameLoop(1, gGame, gGame.MainLoop);