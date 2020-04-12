import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private _permissions:Array<any> = []
  private subjectPermissions = new Subject();
  user:User

  constructor() { 
   
  }

  get allPermissions(){
    return this._permissions
  }
  get permissions(){
    return this.subjectPermissions.asObservable()
  }
  set permissions(value)
  {
    this.subjectPermissions.next(value) 
    
  }

  canAccessTo(value):boolean{
    debugger
    return this._permissions.includes(value)
  }


}
