class ArrayContent<T> {
  constructor(public data: T[]) {}
  get(index: number): T {
    return this.data[index];
  }
}

const elem = new ArrayContent<number>([1, 2, 3, 4]);
