module enemy {
    export function CreateEnemy(): number {
        return 0;
    }

    export function ReleaseEnemy(id: number): void {
    }

    abstract class Enemy {
        private _Id: number;
        private _X: number;
        private _Y: number;
        private _IsDead: boolean;

        set Id(id: number) {
            this._Id = id;
        }

        get Id(): number {
            return this._Id;
        }

        set X(x: number) {
            this._X = x;
        }

        get X(): number {
            return this._X;
        }

        set Y(y: number) {
            this._Y = y;
        }

        get Y(): number {
            return this._Y;
        }

        set IsDead(isDead: boolean) {
            this._IsDead = isDead;
        }

        get IsDead(): boolean {
            return this._IsDead;
        }

        abstract Main(): void;
        abstract Draw(): void;
    };
};