import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Stat } from './stat.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  base: Character = { str: 9, dex: 15, con: 12, wis: 10, int: 18, cha: 14 };

  str: Stat;
  dex: Stat;
  con: Stat;
  wis: Stat;
  int: Stat;
  cha: Stat;

  constructor() { }

  ngOnInit(): void {
    this.str = new Stat('STR', this.base.str);
    this.dex = new Stat('DEX', this.base.dex);
    this.con = new Stat('CON', this.base.con);
    this.wis = new Stat('WIS', this.base.wis);
    this.int = new Stat('INT', this.base.int);
    this.cha = new Stat('CHA', this.base.cha);
  }

  allStats(): Stat[] {
    return [this.str, this.dex, this.con, this.wis, this.int, this.cha];
  }

}
