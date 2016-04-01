import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from '../model/user.model';
import { LoginService } from '../service/login.service';
import { DataService } from '../service/data.service';

@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']  
})


export class LoginComponent {
    username: number;
    password: string;
    user: User;
    
    constructor(
        private _login: LoginService, 
        private _data: DataService,
        private _router: Router
        ){    }
    
    logIn(){
        this.user = this._login.authenticate(this.username, this.password);
        
        if(this.user != null){
            this._data.setUser(this.user);
            this._router.navigate(['Home']);
        }else{
            alert("Please check your credentials");
        }
    }
}