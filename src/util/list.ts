module util {
    interface Node<T> {
        value: T;
        next: Node<T>;
        prev: Node<T>;
    };

    export class List<T> {
        private _root: Node<T>;
        private _tail: Node<T>;

        constructor() {
            this._root = this._tail = null;
        }

        push_back(value: T): void {
            let node: Node<T> = {value: value, next: null, prev: null};
            if (this._tail == null) {
                this._root = this._tail = node;
            } else {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            }
        }

        push_front(value: T): void {
            let node: Node<T> = {value: value, next: null, prev: null};
            if (this._root == null) {
                this._root = this._tail = node;
            } else {
                this._root.prev = node;
                node.next = this._root;
                this._root = node;
            }
        }

        [Symbol.iterator]() {
            const self = this;
            let node = self._root;
            return {
                next() {
                    if (node != null) {
                        let v: T = node.value;
                        node = node.next;
                        return {done: false, value: v};
                    } else {
                        return {done: true, value: undefined};
                    }
                }   
            }
        }
    };
};