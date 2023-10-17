import {Component, Input, OnInit} from '@angular/core';
import {Status} from "../../entities/types";

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.scss']
})
export class ListRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  title?: string
  status?: keyof typeof Status

}
