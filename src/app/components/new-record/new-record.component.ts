import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INewRecord} from "../../../entities/types";

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {
  public name: string = ''
  public checkbox: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newRecordValue = new EventEmitter<INewRecord>()

  newRecord() {
    console.log(this.name, this.checkbox)
    const newRecord: INewRecord = {
      name: this.name,
      isImportant: this.checkbox
    }
    this.name && this.newRecordValue.emit(newRecord)
    this.name = ''
    this.checkbox = false
  }

}
