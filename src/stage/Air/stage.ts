module StageAir {
    interface StageInfo {
        name: String;
    }

    export class Air {
        constructor() {

        }

        Main() {
            console.log("Stage-Air-Main");
        }

        Draw() {
            console.log("Stage-Air-Draw");
        }
    }
}