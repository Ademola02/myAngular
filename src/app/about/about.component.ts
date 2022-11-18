import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { ActivatedRoute, OnInit } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users=[{name:'Teslim',phone:'43536275734'},{name:'Eniola',phone:'43536275734'},{name:'Shaban',phone:'43536275734'}]
  id:any =0;
  user:any='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // let id:any =this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap)=>{
    this.id=params.get('id');
    // console.log(params.get('id'));

    // this.user=this.users[this.id].name
    })
    // alert(this.user)
  }

}
