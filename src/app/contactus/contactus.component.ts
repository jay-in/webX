import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name = new FormControl("");
  email = new FormControl("");

  postContactData(){
    console.log(this.name.value,this.email.value);
    axios.post("http://localhost:4000/contact",{
      name:this.name.value,
      email:this.email.value
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
