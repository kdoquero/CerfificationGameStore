import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from '../entities/password-validation';
import { GameStoreApiService } from '../services/game-store-api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [FormBuilder],
  
})

export class SignUpComponent implements OnInit {
  form: FormGroup;
  invalidCredentials:Boolean = false;
  constructor(private fb: FormBuilder,private gameStoreApi:GameStoreApiService) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(8)]]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
   }

  ngOnInit() {
   
  }

  onSubmit(){
    delete this.form.value["confirmPassword"];
    console.log(this.form.value);
    
    this.gameStoreApi.newClient(this.form.value).subscribe(newClient =>{
      console.log(newClient);
      delete this.form.value["name"];
      this.gameStoreApi.login(this.form.value).subscribe(log=>{
        this.gameStoreApi.setToken(log['id']);
         this.gameStoreApi.createCart(newClient.id).subscribe(newCart=>{
        console.log("createdCart",newCart);
        
      })
      })
     
    }, (error) => {
       this.invalidCredentials = true;
      //console.log(form);
    })  
  }
  

}
