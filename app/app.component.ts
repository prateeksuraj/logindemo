import { Component, OnInit } from 'angular2/core';
import { LoginService } from './service/login.service';
import { DataService } from './service/data.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS  } from 'angular2/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <!-- nav>
            <a [routerLink]="['Login']">Login</a>
            <a [routerLink]="['Signup']">Signup</a>
        </nav -->
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, LoginService, DataService]   
    
})

@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/signup',
        name: 'Signup',
        component: RegisterComponent
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    }
    
])

export class AppComponent implements OnInit {
       title:string = "Menumate";
       public loggedIn: boolean = false;
       constructor(private _auth: DataService){   }
       
       ngOnInit(){
           this.loggedIn = this._auth.isAuthenticated();
           console.log(this.loggedIn);
       }
}