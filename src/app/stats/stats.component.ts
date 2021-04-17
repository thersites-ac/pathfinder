import { Component, OnInit, Input } from '@angular/core';
import { Stat } from '../model/stat.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  str: Stat;

  @Input()
  dex: Stat;

  @Input()
  con: Stat;

  @Input()
  wis: Stat;

  @Input()
  int: Stat;

  @Input()
  cha: Stat;

  ngOnInit() {
  }

  constructor() { }

  allStats(): Stat[] {
    return [ this.str
           , this.dex
           , this.con
           , this.wis
           , this.int
           , this.cha
           ];
  }

}
