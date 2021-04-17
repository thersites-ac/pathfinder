import { Stat } from './stat.model';

export class Save {

  bonus: number = 0;
  tmpMod: number = 0;

  constructor(public name: string, public classBase: number, public affectingStats: Stat[]) { }

  statsBonus(): number {
    let bonus: number = 0;
    this.affectingStats.forEach(stat => {
      bonus = bonus + stat.modifier();
    });
    return bonus;
  }

  modifier(): number {
    return this.classBase + this.bonus + this.tmpMod + this.statsBonus();
  }

}
