import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.styl']
})


export class HomeComponent implements OnInit ,OnDestroy{
  public allBlogs ;

  constructor(public httpService:HttpServiceService) { 
    console.log("constructor is called.");
  }

  ngOnInit() {
    console.log("onInit is called.");
    //this.allBlogs=this.httpService.getAllBlogs() ;
    
    this.allBlogs=this.httpService.getAllBlogs().subscribe(
      data=>{
       // console.log(data);
        this.allBlogs=data["data"] ;
      },
      error=>{
        console.log("some error occured");
        console.log(error.Message);
      }
    ) 
    
   // console.log(this.allBlogs);
  }

  ngOnDestroy() {
    console.log("onDestroy is called.");
  }

}
