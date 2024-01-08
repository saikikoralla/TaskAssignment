import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,HttpClientModule],
  providers:[ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskTest';
  employee:any={};
  selectedemployee:any;
  tasks:any={};
   taskModel:any={};
   posttask:any={};

  constructor(private api:ApiService )
  {
    this.api.getEmployee().subscribe((a) => {
      console.log(a);
      this.employee = a;
    },
     (b) => {
     console.log(b);
    });

    this.api.getTasks().subscribe((c)=>{
      console.log(c);
      this.tasks=c;
    },
    (d)=>{
      console.log(d);
    }


    );

    


  }
  
  changeTask(emp:any)
  {
 this.selectedemployee =emp.target.value
    
  }


  gettask()
  {
    this.api.getTasks().subscribe((c)=>{
      console.log(c);
      this.tasks=c;
    },
    (d)=>{
      console.log(d);
    }
    )

  }
   onSubmit() {
   // debugger;
    // Handle form submission logic here
    let url ="https://localhost:44371/api/tasks/PostTasks";
   this.posttask.taskName= this.taskModel.taskName;
   this.posttask.descriptionName= this.taskModel.description;
   this.posttask.employeeId= parseInt(this.selectedemployee);
console.log(this.posttask);

    this.api.postTask(url,this.posttask).subscribe((c)=>{
      console.log(c);
      this.gettask();
      
    },
    (d)=>{
      console.log(d);
    }


    );
    console.log('Form submitted!');
  }
}
