import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-grid-box',
  templateUrl: './grid-box.component.html',
  styleUrls: ['./grid-box.component.css']
})
export class GridBoxComponent implements OnInit {
  personList: Array<any>;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.personList = this.peopleService.personList()
    console.log(this.personList)
  }
  // buildArray(){
  //   let array = []
  //   for(let i=1; i<129; i++){
  //     let person = {id: i,
  //                   status: "",
  //                   name: "Joe Test",
  //                   phone: "867-5309",
  //                   email: "joe"+i+"@email.com",
  //                   url: "www.randomurl.com"
  //                   }
  //
  //     if (i % 15 < 4){
  //       person.status = "waiting"
  //       console.log(person)
  //     } else if (i % 15 > 4){
  //       person.status = "finished"
  //     } else if (i % 15 == 4){
  //       person.status = "emergency"
  //     } else {
  //       person.status = "working"
  //     }
  //     array.push(person)
  //   }
  //   this.gridArray = array
  // }
}
