import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service'
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  personList: Array<any>;
  personNumber: number;
  currentPerson: any;
  constructor(private route : ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.personList = this.peopleService.personList()
    console.log("params are", this.route.params)

    this.route.params.forEach( param =>{
      console.log('param in each loop', param["id"])
      this.currentPerson = this.personList.find( person => {
          return person.id === parseInt(param["id"])
      });
    })
    console.log(this.currentPerson)
  }

}
