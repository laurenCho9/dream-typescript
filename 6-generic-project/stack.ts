// 재사용될 가능성이 있다면 재사용성이 중요하다면 제네릭을 이용해 좀 더 다양한 타입을 받을 수 있도록 구현하자.
interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
