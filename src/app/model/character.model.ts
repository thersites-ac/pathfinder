import { PlayerClass } from './player-class.model';
import { Save } from './save.model';
import { Skill } from './skill.model';
import { Stat } from './stat.model';

export class Character {

  str: Stat;
  dex: Stat;
  con: Stat;
  wis: Stat;
  int: Stat;
  cha: Stat;

  playerClass: PlayerClass;

  fort: Save;
  refl: Save;
  will: Save;

  skills: Skill[];

  constructor(str: number, dex: number, con: number, wis: number, int: number, cha: number,
             playerClass: PlayerClass) {
    // need to validate inputs
    this.str = new Stat('STR', str, 0);
    this.dex = new Stat('DEX', dex, 0);
    this.con = new Stat('CON', con, 0);
    this.wis = new Stat('WIS', wis, 0);
    this.int = new Stat('INT', int, 0);
    this.cha = new Stat('CHA', cha, 0);
    this.playerClass = playerClass;
    this.fort = new Save('FORT', this.playerClass.fortBase, [this.str, this.dex]);
    this.refl = new Save('REFL', this.playerClass.reflBase, [this.dex]);
    this.will = new Save('WILL', this.playerClass.willBase, [this.wis]);

    this.skills = [];
  }

  addSkill(name: string, points: number, stat: string) {
    var isClassSkill = name in this.playerClass.classSkills;
    var affectingStat;
    switch (stat) {
      case 'str':
        affectingStat = this.str;
        break;
      case 'dex':
        affectingStat = this.dex;
        break;
      case 'con':
        affectingStat = this.con;
        break;
      case 'wis':
        affectingStat = this.wis;
        break;
      case 'int':
        affectingStat = this.int;
        break;
      case 'cha':
        affectingStat = this.cha;
        break;
    }
    this.skills.push(new Skill(name, points, isClassSkill, affectingStat));
  }

}
