import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterServiceService]
})
export class RegisterComponent implements OnInit {

  user: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterServiceService,
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.registerService.register(this.user)
        .subscribe(
            data => {
              console.log("Im in");
                //this.alertService.success('Registration successful', true);
                this.router.navigate(['login']);
            },
            error => {
                console.log(error.error.message)
                //this.alertService.error(error.error.message);
                if(error.error.message.includes('User already exist')) {
                    this.router.navigate(['login']);
                }

                this.loading = false;
            });
  }
}
