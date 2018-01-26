import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  personList(){
    let array = [];
    for(let i=1; i<129; i++){
      let person = {id: i,
                    status: "",
                    name: "Joe Test",
                    phone: "867-5309",
                    email: "joe"+i+"@email.com",
                    url: "http://www.schoolofpersonalflight.com"
                    }

      if (i % 15 < 4){
        person.status = "waiting";
      } else if (i % 15 > 4){
        person.status = "finished";
      } else if (i % 15 == 4){
        person.status = "emergency";
      } else {
        person.status = "working";
      }
      array.push(person)
    }
    return array
  }
  constructor() { }

}
