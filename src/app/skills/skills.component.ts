import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input()
  skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
