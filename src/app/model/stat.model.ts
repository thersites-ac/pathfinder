export class Stat {

  constructor(public name: string, public base: number, public tmpMod: number) { }

  actual(): number {
    return this.base + this.tmpMod;
  }

  modifier(): number {
    return Math.floor((this.actual() - 10)/2);
  }

}
