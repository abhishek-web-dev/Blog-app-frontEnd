import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css','./blog-create.component.styl']
})
export class BlogCreateComponent implements OnInit {

  constructor(public httpService:HttpServiceService , private _rout:ActivatedRoute,private router:Router,public toastr: ToastrManager) { 
   
  }

  public blogTitle:string ;
  public blogBodyHtml:string ;
  public blogDescription:string ;
  public blogCategory:string ;
  public possibleCategories:string[]=["comedy","drama","action","Technology"] ;



  ngOnInit() {
  }

  public createBlog():any{
    let blogData={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }//end blog data

    this.httpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created.");
        console.log(data);
        this.toastr.successToastr('This is success toast.', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr('This is error toast.', 'Oops!');
      }
    )

  }

}
