import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['../blog-create/blog-create.component.css','./blog-edit.component.styl']
})
export class BlogEditComponent implements OnInit {

  constructor(public httpService:HttpServiceService , private _route:ActivatedRoute,private router:Router,public toastr: ToastrManager) { }

  public currentBlog ;
  public possibleCategories:string[]=["comedy","drama","action","Technology"] ;

  ngOnInit() {
    //console.log("blog-view onInit is called.");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId) ;
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

  public editThisBlog():any{
    this.httpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data => {
        console.log("blog editedted.");
        console.log(data);
        this.toastr.successToastr('This blog is edited successfully.', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr('blog editinging error.', 'Oops!');
      }
    )
  }

}
