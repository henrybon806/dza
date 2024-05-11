type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  append(item: T): void {
    this.length += 1;
    const itemNode: Node<T> = {value: item}
    if(this.tail != undefined){
      this.tail.next = itemNode;
      this.tail = itemNode;
    }
    else {
      this.head = itemNode;
      this.tail = itemNode;
    }
  }

  prepend(item: T): void {
    this.length += 1;
    const itemNode: Node<T> = {value: item, next: this.head}
    if(this.head != undefined){
      this.head = itemNode;
    }
    else {
      this.head = itemNode;
      this.tail = itemNode;
    }
  }

  get(i: number): T | undefined {
    if(this.head == undefined || i > this.length - 1){
      return undefined;
    }
    if(this.length - 1 == i){
      return this.tail.value;
    }
    else{
      var itemNode: Node<T> = this.head
      for(var k = 0; k < i; k++){
        itemNode = itemNode.next;
      }
      return itemNode.value;
    }
  }

  remove(i: number): T | undefined {
    if(this.head == undefined || i > this.length - 1){
      return undefined;
    }
    var itemNode: Node<T> = this.head
    for(var k = 0; k < i - 1; k++){
      itemNode = itemNode.next;
    }
    const toReturn = itemNode.next;
    if(i != this.length - 1){
      const bridge = toReturn.next;
      itemNode.next = bridge;
    }
    else{
      itemNode.next = undefined;
      this.tail = itemNode;
    }
    this.length--;
    return toReturn.value;
  }

  peek(): T | undefined {
    return head.value;
  }
}
