import { Injectable } from '@angular/core';
import { Person } from './person';
// import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private typeOfPersonArr: Person[] = [
    new Person("Melina Whitlock", 29),
    new Person("Jace Whitlock", .83),
    new Person("Logan Whitlock", 30)
  ];

  constructor() { }

  async delay(ms: number) { await new Promise(resolve => setTimeout(() => resolve(), ms)); }

  getPersons(): Person[] {
    return this.typeOfPersonArr.filter((person) => {
      return "Name: " + person.getFullName() + ", Age: " + person.getAge();
    })
  }
  // getPersons(): Observable<Person[]> {
  //   return of(peeps);
  // }


}
