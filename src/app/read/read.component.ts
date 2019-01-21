import { Component, OnInit } from '@angular/core';
import { Tutorial} from '../model/auth.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {AppSate} from '../app.state'


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials : Observable<Tutorial[]>
  constructor( private state : Store<AppSate>) {
    this.tutorials = this.state.select('tutorial');
   }

  ngOnInit() {
    
    //console.log(this.tutorials);
  }

}
