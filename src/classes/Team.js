import Person from "./Person";

export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(member) {
    if (member instanceof Person && this.members.has(member) === false) {
      return this.members.add(member);
    }
    throw new Error('Unable to add')
  }
  addAll(...members) {
    members.forEach((member) => {
      return this.members.add(member)
    })
  }
  toArray() {
    return Array.from(this.members);
  }
  [Symbol.iterator] = () => {
    let iterable = this.toArray();
    let current = -1;
    let last = iterable.length();
    return {
      next() {
        if (current < last) {
          current += 1;
          return {
            done: false,
            value: iterable[current]
          }
        }
        return {
          done: true
        }
      }
    }
  }
}
