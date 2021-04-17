import { Component, OnInit, Input } from '@angular/core';
import { Save } from '../model/save.model';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit {

  @Input()
  fort: Save;

  @Input()
  refl: Save;

  @Input()
  will: Save;

  constructor() { }

  ngOnInit(): void {
  }

  allSaves(): Save[] {
    return [this.fort, this.refl, this.will];
  }

}
