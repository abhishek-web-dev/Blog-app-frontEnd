import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  public currentBlog ;

  constructor() {
    
    console.log("service is called.");
  
 }

  public allBlogs=[{
    "blogId":"1",
    "lastModified":"2019-5-23",
    "created":"2018",
    "tags":[],
    "author":"admin",
    "category":"comedy",
    "isPublished":true,
    "views":0,
    "bodyHtml":"this is blog body",
    "discription":"this is blog 1 discriptions.",
    "title":"this is blog 1"
},
{
  "blogId":"2",
  "lastModified":"2019-5-23",
  "created":"2018",
  "tags":[],
  "author":"admin",
  "category":"comedy",
  "isPublished":true,
  "views":0,
  "bodyHtml":"<h1>this is blog body</h1><p>this is paragraph.</p>",
  "discription":"this is blog 2 discriptions.",
  "title":"this is blog 2"
},
{
"blogId":"3",
"lastModified":"2019-5-23",
"created":"2018",
"tags":[],
"author":"admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"<h1>this is blog body</h1><p>this is paragraph.</p>",
"discription":"this is blog 3 discriptions.",
"title":"this is blog 3"
}
] ;


}
