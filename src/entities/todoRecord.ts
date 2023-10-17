import {Status} from "./types";

export class TodoListRecord {
  constructor(
    public id: number,
    public name: string,
    public status: keyof typeof Status,
  ) {
  }

  get RecordId() {
    return this.id;
  }
  get RecordName() {
    return this.name;
  }

  get RecordStatus() {
    return this.status;
  }
  set RecordId(value) {
    this.id = value;
  }
  set RecordName(value) {
    this.name = value;
  }

  set RecordStatus(value) {
    this.status = value;
  }
}
