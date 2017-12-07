module Base {
    export interface BaseLogic {
        Init(): void;
        Main(): void;
        Draw(): void;
        Destroy(): void;
    }
}