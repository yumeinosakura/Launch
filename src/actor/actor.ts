module Actor {
    export interface ActorInfo {
        x: number;
        y: number;
        id: number;
        visible: boolean;
    }

    export interface ActorBase {
        Init(): void;
        Main(): void;
        Draw(): void;

        SetX(x: number): void;
        GetX(): number;

        SetY(y: number): void;
        GetY(): number;

        SetVisible(visible: boolean): void;
        isVisible(): boolean;
    }
}