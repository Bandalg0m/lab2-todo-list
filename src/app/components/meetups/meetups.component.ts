import { Component, OnInit } from '@angular/core';
import {MeetupsService} from "../../services/meetups/meetups.service";

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  constructor(private service: MeetupsService) { }

  ngOnInit(): void {
    this.service.getMeetups().subscribe((data) => console.log(data))
  }

}
