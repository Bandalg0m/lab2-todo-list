import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INewRecord} from "../../../entities/types";

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRecordComponent implements OnInit {
  public name: string = ''
  public checkbox: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newRecordValue = new EventEmitter<INewRecord>()

  newRecord() {
    const newRecord: INewRecord = {
      name: this.name,
      isImportant: this.checkbox
    }
    this.name && this.newRecordValue.emit(newRecord)
    this.name = ''
    this.checkbox = false
  }

}
