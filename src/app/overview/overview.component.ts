import { Character } from '../model/character.model';
import { PlayerClass } from '../model/player-class.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  character: Character;
  constructor() { }

  ngOnInit(): void {
    var classSkills = ['Use Magic Device', 'Bluff', 'Stealth'];
    this.character =  new Character(9, 15, 12, 10, 18, 14, new PlayerClass(3,6,6, classSkills));
    this.character.addSkill('Bluff', 14, 'cha');
    this.character.addSkill('Use Magic Device', 5, 'cha');
    this.character.addSkill('Stealth', 8, 'dex');
    this.character.addSkill('Fly', 7, 'dex');
  }

}
