import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INewRecord} from "../../../entities/types";

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newRecordValue = new EventEmitter<INewRecord>()

  newRecord(recordNameInput: HTMLInputElement, recordStatusInput: HTMLInputElement) {
    const newRecord: INewRecord = {
      name: recordNameInput.value,
      isImportant: recordStatusInput.checked
    }
    recordNameInput.value && this.newRecordValue.emit(newRecord)
  }

}
