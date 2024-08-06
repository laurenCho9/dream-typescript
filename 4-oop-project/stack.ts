interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 불변성 유지를 위해 readonly 지정
  readonly value: string;
  //  readonly next: StackNode | undefined; 한줄아래와 동일한 내용의 코드
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    // null == undefined, null !== undefined : null과 undefined 둘다 잡아내기 위해 느슨한모드 == 사용
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

// constructor 생성자함수로 횟수 10회로 제한
const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop(); 비어있는데 한번더 호출하면 에러 발생
