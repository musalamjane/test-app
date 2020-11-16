import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LantronixService } from '../lantronix.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-lantronix-form',
  templateUrl: './lantronix-form.component.html',
  styleUrls: ['./lantronix-form.component.sass']
})
export class LantronixFormComponent implements OnInit {

  constructor(private lantronixservice:LantronixService) { }
  public profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  onsubmit(){
    this.lantronixservice.getLogin(this.profileForm.value.username, this.profileForm.value.password);
  }
}
