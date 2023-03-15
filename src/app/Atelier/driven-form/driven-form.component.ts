import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { carte } from 'src/app/core/model/driven-carte';
import { user } from 'src/app/core/model/driven-user';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
  user !: user;
  carte !: carte;

  constructor() { }

  ngOnInit(): void {
    this.user = new user;
    this.carte = new carte;
  }

}
