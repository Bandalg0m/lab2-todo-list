import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ISearchQuery, Status} from "../../../entities/types";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public name: string =''
  public status: string = 'all'
  constructor() { }

  ngOnInit(): void {
  }


  @Output() searchValue = new EventEmitter<ISearchQuery>()

  newSearch(): void {
    this.searchValue.emit({name: this.name, status: this.status})
  }

  protected readonly Status = Status;
}
