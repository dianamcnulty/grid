import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  people: Array<any>;
  personList(){
    if (!this.people){
      let array = []
      for(let i=1; i<129; i++){
        let person = {id: i,
                      status: "",
                      firstName: "Joe",
                      lastName: "test" + i,
                      phone: "867-5309",
                      email: "joe"+i+"@email.com",
                      url: "http://www.schoolofpersonalflight.com"
                      }

        if (i % 15 < 4){
          person.status = "waiting";
        } else if (i % 15 > 7){
          person.status = "finished";
        } else if (i % 92 == 4){
          person.status = "emergency";
        } else if (i % 15 == 7){
          person.status = "out";
        }else {
          person.status = "working";
        }
        array.push(person)
      }
      this.people = array;
    }
    return this.people
  }

  updateStatus(update) {
    const id = update.id;
    const newStatus = update.status;
    let personToUpdate = this.people.find(person=>{
      return person.id === id
    })
     personToUpdate['status'] = newStatus;
    console.log( 'persons new status', personToUpdate)

  }
  constructor() { }

}
