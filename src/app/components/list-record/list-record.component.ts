import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from "../../../entities/types";

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

  @Input()
  status?: keyof typeof Status

  @Output() statusChange = new EventEmitter<keyof typeof Status>()

  @Output() deleteRecord = new EventEmitter()

  handleStatusChange(event: keyof typeof Status):void {
    this.statusChange.emit(event)
  }

  handleDelete():void {
    this.deleteRecord.emit()
  }

  protected readonly Status = Status;
}
