module util {
    class Map<T> {
        private _hashMethod: (hash: number) => number;
        private _container: T[];

        constructor(defaultSize: number, hashMethod: (hash: number) => number) {
            this._hashMethod = hashMethod;
            this._container = [];
            this._container.length = defaultSize;
        }
    };
};