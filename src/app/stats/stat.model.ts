export class Stat {

  private tempMod: number;

  constructor(public name: string, public base: number) {
    this.tempMod = 0;
  }

  public setTempMod(tempMod: number) {
    this.tempMod = tempMod;
  }

  public getTempMod(): string {
    if (this.tempMod === 0) {
      return '-'
    } else {
      return this.tempMod + '';
    }
  }

  public modifier() {
    return Math.floor((this.base + this.tempMod - 10) / 2);
  }

}
