module Actor {
    export interface ActorInfo {
        pos: util.Point;
        id: number;
        visible: boolean;
    }

    export abstract class ActorBase implements Base.BaseLogic {
        protected actorInfo: ActorInfo;
        
        constructor(actorInfo: ActorInfo) {
            this.actorInfo = actorInfo;
        }

        abstract Init(): void;
        abstract Main(): void;
        abstract Draw(): void;

        get pos(): util.Point {
            return this.actorInfo.pos;
        }

        set pos(pos: util.Point) {
            this.actorInfo.pos = pos;
        }

        get visible(): boolean {
            return this.actorInfo.visible;
        }

        set visible(visible: boolean) {
            this.actorInfo.visible = visible;
        }
    }
}