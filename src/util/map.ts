module util {
    // 默认hash函数
    export function DefaultHashMethod<T>(hash: number, map: Map<T>): number {
        let size = map.length();
        return hash % size;
    }

    interface Node<T> {
        key: number;
        value: T;
    };

    export class Map<T> {
        private _hashMethod: (hash: number, map: Map<T>) => number;
        private _container: List<Node<T>>[];

        constructor(defaultSize: number, hashMethod: (hash: number, map: Map<T>) => number) {
            this._hashMethod = hashMethod;
            this._container = [];
            this._container.length = defaultSize;
        }

        insert(key: number, value: T): void {
            let hashKey = this._hashMethod(key, this);

            // 创建列表
            if (this._container[hashKey] == null) {
                this._container[hashKey] = new List<Node<T>>();
            }
            let container = this._container[hashKey];

            // 检查是否有相同元素存在
            for (let node of container) {
                if (node.value == value) {
                    return;
                }
            }

            // 没有相同元素，插入列表头部
            container.push_front({key: key, value: value});
        }

        find(key: number): T {
            let hashKey = this._hashMethod(key, this);
            let container: List<Node<T>> = this._container[hashKey];
            
            if (container != null) {
                for (let node of container) {
                    if (node.key == key) {
                        return node.value;
                    }
                }
            }

            return undefined;
        }

        length(): number {
            return this._container.length;
        }
    };
};