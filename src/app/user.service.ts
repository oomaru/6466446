import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
  
  users = [
    {
      name: 'Luca',
      lastname: 'Marino',
      email: 'luca.marino@gmail.com',
      fiscalcode: 'MRNLCU91A01F205H',
      province: 'Milano',
      phone: '+ 39 347 53 87 987',
      age: 32
    },
    {
      name: 'Michela',
      lastname: 'Ferro',
      email: 'michela.ferro@gmail.com',
      fiscalcode: 'FRRMHL95A41L219R',
      province: 'Torino',
      phone: '+ 39 347 53 87 365',
      age: 28
    },
    {
      name: 'Marco',
      lastname: 'Rossi',
      email: 'marco.rossi@gmail.com',
      fiscalcode: 'RSSMRC80A01H501W',
      province: 'Roma',
      phone: '+ 39 347 53 87 145',
      age: 43
    },
    {
      name: 'Sara',
      lastname: 'Leone',
      email: 'sara.leone@gmail.com',
      fiscalcode: 'SRALNE85A01L219Y',
      province: 'Torino',
      phone: '+ 39 347 53 87 456',
      age: 38
    }
  ];

     getUsers() {
        return this.users;
    }

    deleteUser(user:any) {
      const index = this.users.indexOf(user);
      if(index > -1){
        this.users.splice(index,1);
      }
    }

}