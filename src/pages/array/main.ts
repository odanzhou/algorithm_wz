
import { List } from './base'
/**
 * 自定义数组
 */
export class MyList<T> extends List<T> {
  constructor(list?: T[]) {
    super(list)
  }
  private move(index: number, movLen = 1) {
    if (!movLen) return
    const len = this.length
    if (index < this.length && index >= 0) {
      for (let i = index; i < len - movLen; i++) {
        if (movLen < 0) {
          this.list[i - movLen] = this.list[i]
        } else {
          this.list[i] = this.list[i + movLen]
        }
      }
    }
    while (movLen > 0) {
      movLen--
      this.pop()
    }
  }
  del(index: number) {
    const len = this.length
    index = index < 0 ? len + index : index
    const val = this.list[index]
    this.move(index)
    return val
  }
  insert(index: number, val: T) {

  }
}