import {User} from '../model/user.model';

export class DataService {
    user: User;
    isAuthenticated(){
        if(this.user != null){
            console.log("user present");
            return true;
        }else{
            console.log("user not present");
            return false;
        }
    }
    getUser(){
        return this.user;
    }
    
    setUser(inUser){
        this.user = inUser;
    }
}