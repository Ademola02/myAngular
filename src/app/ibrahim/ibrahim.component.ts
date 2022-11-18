import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouterInternal } from '@angular/router/testing';


@Component({
  selector: 'app-ibrahim',
  templateUrl: './ibrahim.component.html',
  styleUrls: ['./ibrahim.component.css']
})
export class ibrahimComponent implements OnInit {
  message="";
  tasks:any=[];
    show ='signin';
  users=[{name:'Teslim',phone:'123456907666'},{name:'Eniola',phone:'123456907666'},{name:'Shaban',phone:'123456907666'}]
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  login(){
    localStorage.setItem('loggedIn','true')
    this.router.navigate(['dashboard'])
  }
   add(){
    this.tasks.push({name:this.message,done:false});
    
   }
}
