import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  display: boolean = true;
  logs: Date[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  onToogleDisplay(): void {
    this.display = !this.display;
    this.logs.push(new Date());
  }
}
