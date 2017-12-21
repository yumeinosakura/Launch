module Stage {
    export enum StageType {
        STAGE_NONE,
        STAGE_LOADING,
        STAGE_TITLE,
        STAGE_AIR,
        STAGE_MAX,
    }

    export abstract class StageBase implements Base.BaseLogic {
        protected stageType: StageType;
        protected nextStageType: StageType;

        constructor() {
            this.stageType = StageType.STAGE_NONE;
            this.nextStageType = StageType.STAGE_NONE;
            this.Init();
        }

        get stagetype(): StageType {
            return this.stageType;
        }

        set stagetype(stagetype: StageType) {
            this.stageType = stagetype;
        }

        get nextstagetype(): StageType {
            return this.nextStageType;
        }

        set nextstagetype(nextstagetype: StageType) {
            this.nextStageType = nextstagetype;
        }

        abstract Init(): void;
        abstract Destroy(): void;
        abstract Main(): void;
        abstract Draw(): void;
    }
}