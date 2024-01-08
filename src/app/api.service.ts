import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import {Task} from "./task";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    constructor(private http: HttpClient) { }
  
    getEmployee() {
      return this.http.get<Employee>("https://localhost:44371/api/tasks/Employees");
    }

    getTasks()
    {
      return this.http.get<Task>("https://localhost:44371/api/tasks/Tasks")
    }

 

    postTask(url: string, paramval?:any) {
      let x= new HttpHeaders({
        'Content-Type':'application/json'

      })
      let options = {headers:x}
       return this.http.post("https://localhost:44371/api/tasks/PostTasks",JSON.stringify(paramval),options)
      
}
}