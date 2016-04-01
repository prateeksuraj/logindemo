import { User } from '../model/user.model';
import { USERS } from '../mock-data/data';

export class LoginService {
    authenticate(inUserName, inPassword){
       let i:number = 0;
       let user: User = null;
        while(i<USERS.length){
            
            if((inUserName == USERS[i].username) && (inPassword == USERS[i].password)){
               user = USERS[i];
               console.log(" Username: "+user.username);
               console.log(" Password: "+user.password);
               console.log(" Role: "+user.role);
    
            } 
            
            i++;
        }
        return user;
    }
}