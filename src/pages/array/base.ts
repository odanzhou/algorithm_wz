
/**
 * 基础数组
 */
export class List<T> {
  private _list: T[];
  get list() {
    return this._list
  }
  set list(val) {
    this._list = val
  }
  length: number;

  constructor(list?: T[]) {
    const val = list || []
    this._list = Array.isArray(val) ? val : []
    this.length = this._list.length
  }
  private setLength(changLen: number) {
    this.length = Math.max(0, this.length + changLen)
  }
  protected push(...items: T[]) {
    this.setLength(items.length)
    return this.list.push(...items)
  }
  protected pop() {
    this.setLength(-1)
    return this.list.pop()
  }
}