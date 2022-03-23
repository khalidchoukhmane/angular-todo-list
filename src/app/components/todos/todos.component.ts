import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  inputTodo:string ="";

  constructor() { }

  ngOnInit(): void {

    this.todos=[
    {
      content: 'First todo',
      Completed: false
    },
    {
      content: 'Second todo',
      Completed: false
    }

    ]
  }

  toggleDone(id:number){
    this.todos.map((v, i) =>{
      if(i == id) v.Completed = !v.Completed
      return v;
    })
  }

  deleteTodo(id:number){
    //if 'i' not equal to 'id'
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      Completed: false
    });
    this.inputTodo = "";
  }
}
