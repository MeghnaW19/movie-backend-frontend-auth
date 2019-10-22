import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
   
 user: any = {};
  loading = false;
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
    
   
   ) { }

   ngOnInit() {
   }
  login() {
    this.loading = true;
    this.loginService.login(this.user)
        .subscribe(
            data => {
               
               this.router.navigate(['movie']);
            },
            error => {
                //this.alertService.error(error.error.message);
                alert("Invalid Credentials");
                this.loading = false;
            });
  }

  link(){
    this.router.navigate(['register']);
  }

}
