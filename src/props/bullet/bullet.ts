module Bullet {
    export interface BulletInfo {
        pos: util.Point;
        rotate: util.Rotate;
        visible: boolean;
        alive: boolean;
    }

    export abstract class BulletBase implements Base.BaseLogic {
        constructor(protected bulletInfo: BulletInfo) {
        }

        abstract Init(): void;
        abstract Main(): void;
        abstract Draw(): void;
        abstract Destroy(): void;
    }
}