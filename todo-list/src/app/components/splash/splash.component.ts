import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  title = "Todo List";
  todos = [
    new Todo("This is the first task", false),
    new Todo("This is the second task", true),
    new Todo("This is the third task", false)
  ]

  ngOnInit() {
  }

  handleComplete() {
    console.log("This works")
  }

}
