import { Stat } from './stat.model';

export class Skill {

  public bonus: number = 0;

  constructor(public name: string,
              public points: number,
              public isClassSkill: boolean,
              public stat: Stat) { }

  public modifier(): number {
    let mod = this.bonus + this.points + this.stat.modifier();
    return this.isClassSkill ? 3 + mod : mod;
  }

}
