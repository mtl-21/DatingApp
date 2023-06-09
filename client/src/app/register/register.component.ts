import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor (private accountService: AccountService) {}

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(respone =>{
      console.log(respone);
      this.cancel();
    }, errol => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
