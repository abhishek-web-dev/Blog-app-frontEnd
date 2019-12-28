import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse} from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  public allBlogs ;
  public currentBlog  ;
  public baseUrl = 'http://localhost:3000/api/v1/blogs/' ;
  public authToken= '?authToken=Admin';


  constructor(private _http:HttpClient) {
    console.log("http-service is called!") ;
   }

   //http exception error handler
   private handleError(err:HttpErrorResponse){

     console.log("handel http error.");
     console.log(err.message);
     return Observable.throw(err.message);
     
   }

   // method to return all the blogs
  public getAllBlogs():any {
    let myResponse =this._http.get(this.baseUrl +'all' +this.authToken)  ;

   // console.log(myResponse) ;
    return myResponse ;
  }

  //to create a blog
  public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl + 'create'+ this.authToken ,blogData);
    return myResponse ;
  }

  //to delete a blog
  public deleteBlog(blogId):any{
    let myResponse=this._http.post(this.baseUrl + blogId +'/delete' + this.authToken,blogId);
    return myResponse ;
  }

  //to edit a blog
  public editBlog(blogId,blogData):any{
    let myResponse=this._http.put(this.baseUrl + blogId +'/edit' + this.authToken,blogData);
    return myResponse ;
  }

// toreturn current blog
  public getSingleBlogInformation(currentBlogId):any {
    let myResponse =this._http.get(this.baseUrl +'view/'+currentBlogId +this.authToken)  ;

    return myResponse ;
  }

}
