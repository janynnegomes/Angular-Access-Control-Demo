import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/shared/services/accessservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   userName:string
   canAddUser: boolean;
   canSearchUser:boolean;
   candRemoveUser:boolean;

  constructor(
    private access: AccessService
  ) { }

  ngOnInit() {
    console.log('home component init')
    //{first_name} = this.access.user

//this.userName = `${first_name} ${last_name}`

  }  

}
