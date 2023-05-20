import { sen, cos, sec, csc, tan, cot } from "./functions.js";

export class ResultBuilder {
  /**
   *
   * @param {number} ca
   * @param {number} co
   * @param {number} h
   */
  constructor(ca, co, h) {
    this.ca = ca;
    this.co = co;
    this.h = h;
  }

  /**
   *
   * @param {Function} fn
   * @returns {string}
   */
  showResult(fn) {
    const functionTypes = {
      sen: `sen(x) = ${this.co}/${this.h} = ${sen(this.co, this.h)}`,
      cos: `cos(x) = ${this.ca}/${this.h} = ${cos(this.ca, this.h)}`,
      sec: `sec(x) = ${this.h}/${this.ca} = ${sec(this.h, this.ca)}`,
      csc: `csc(x) = ${this.h}/${this.co} = ${csc(this.h, this.co)}`,
      tan: `tan(x) = ${this.co}/${this.ca} = ${tan(this.co, this.ca)}`,
      cot: `cot(x) = ${this.ca}/${this.co} = ${cot(this.ca, this.co)}`
    }

    if (!fn) return null;
    if (!(fn instanceof Function) || !functionTypes[fn.name]) return "No results";

    return functionTypes[fn.name];
  }
}
