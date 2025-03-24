import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validUsers = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
  ];

  loggedIn = false;

  logIn(username: string, password: string) {
    const user = this.validUsers.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedIn = true;
      console.log("true");
    }  else {
      this.loggedIn = false;
      console.log("false");
    }
  }

  logout() {
    this.loggedIn = false;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn)
      }
    );

    return isUserAdmin;
  }

}
