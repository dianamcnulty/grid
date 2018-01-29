import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  person = <any>{}

  constructor(private route : ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
  }
  addPerson(person){
    this.person = person;
    console.log(person);
    this.peopleService.addPerson(person)
  }
}
