export class AuthService{
    loggedIn : boolean;

    constructor(){
    }

    logIn(): void{      
        localStorage.setItem("token","myToken");
    }

    logOut(): void{
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("email");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }
}