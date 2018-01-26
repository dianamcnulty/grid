import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  personList: Array<any>;
  personNumber: number;
  update = <any>{};
  constructor(private route : ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.personList = this.peopleService.personList()
  }
  updateStatus(update) {
    console.log(update)
    const id = update.id;
    const name = update.firstName.toLowerCase();
    let updated = false;
    //verify id and name match
    const personToUpdate = this.personList.find(person =>{
      return person.id === id
    })
    console.log('person from the list:', personToUpdate)
    if (!personToUpdate){
      document.getElementById('status-update-msg').innerHTML = "Id does not exist in our files.";
    } else if (personToUpdate.firstName.toLowerCase() !== name){
      document.getElementById('status-update-msg').innerHTML = 'Name and Id do not match.';
    } else if (personToUpdate.firstName.toLowerCase() == name){
      this.peopleService.updateStatus(update)
    }
  }
}
