import { Component, OnInit } from 'angular2/core';
import { DataService } from '../service/data.service';
import { User } from '../model/user.model';
import { Router } from 'angular2/router';
@Component({
    selector: 'my-home',
    template: `
        <nav>
            <a (click)= "logout()" >Logout</a>
        </nav>
       <h1>Hello {{user.username}}!</h1>
       <h3>Welcome to Menumate Technologies...</h3>
       <h3>Your role is: {{user.role}}</h3>     
               `
})

export class HomeComponent implements OnInit {

    user: User;

    constructor(private _router: Router, private _data: DataService) {

    }
    logout() {
        this._data.setUser(null);
        this._router.navigate(['Login']);
    }
    ngOnInit() {
        

        if (this._data.getUser() == null) {
            this._router.navigate(['Login']);
        }else{
            this.user = this._data.getUser();    
        }
    }
}