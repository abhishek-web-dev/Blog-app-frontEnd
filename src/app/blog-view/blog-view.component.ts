import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { HttpServiceService } from '../http-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Location} from '@angular/common' ;


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['../home/home.component.css','./blog-view.component.styl'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty object
  public currentBlog ;

  
  constructor(private location:Location,private _route:ActivatedRoute,private router:Router, public blogService:BlogService,public httpService:HttpServiceService,public toastr: ToastrManager) {
    console.log("blog-view constructor is called.");
   }

  ngOnInit() {
    console.log("blog-view onInit is called.");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    //console.log(myBlogId) ;
    //this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId) ;

    this.httpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog=data["data"] ;
      },
      error=>{
        console.log("some error occured");
        console.log(error.Message);
      }
    ) 

  }

  public deleteThisBlog():any{
    this.httpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
       // console.log("blog deleted.");
       // console.log(data);
        this.toastr.successToastr('This blog is deleted successfully.', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
       // console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr('blog deleteing error.', 'Oops!');
      }

    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog-view onDestroy is called.");
  }

 

}
