import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import{throwError, Subject, BehaviorSubject} from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    
    // expires_in: string;
    // token_type: string;
    // refresh_token: string;
    // id_token: string;
    // user_id: string;
    // project_id: string;
    registered?:boolean;
   
}


@Injectable({ providedIn: "root" })
export class AuthService {

    user=new BehaviorSubject<User>(null);
    constructor(private http: HttpClient) { }

    onSignUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVb56NAM84vpQTWUaI-Ki3tJX1CFhJn5I',
            {
                email: email,
                password: password,
                returnSecureToken:true,
            }).pipe(catchError(this.handleError),
            tap(resData=>{
            this.handleAuthentiction(resData.email, resData.localId,resData.idToken,+resData.expiresIn)
            })
            )
             }



     login(email:string,password:string)
     {
       return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVb56NAM84vpQTWUaI-Ki3tJX1CFhJn5I',
         {
            email: email,
            password: password,
            returnSecureToken:true,
        }
         ).pipe(catchError( this.handleError)
         ,tap(resData=>{
          this.handleAuthentiction(resData.email, resData.localId,resData.idToken,+resData.expiresIn)
           })
           )
     }



     private handleAuthentiction(email:string,localId:string,idToken:string,expiresIn:number)
     {
        const expirationDate=new Date(new Date().getTime()+ expiresIn*1000)
        const   user=new User(email,localId,idToken,expirationDate);
        this.user.next(user);
     }

     private handleError(errorRes:HttpErrorResponse)
     {
        let errorMessage="An unknown error occured!";
        if(!errorRes.error || !errorRes.error.error)
        {
          return  throwError(errorMessage);
        }
    switch(errorRes.error.error.message)
    {
    case 'EMAIL_EXISTS':errorMessage="This email already exists";
                          break;

    case 'EMAIL_NOT_FOUND':errorMessage="This Email does not exists";
                            break;
                        
    case 'INVALID_PASSWORD':errorMessage='The password is incorrect'
                            break;
    }

   return  throwError(errorMessage)
     }
 

}