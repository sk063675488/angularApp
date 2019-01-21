import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Tutorial} from '../../model/auth.model';

export const ADD_TUTORIAL = '[Tutorial] add';
export const REMOVE_TUTORIAL = '[Tutorial] remove';

export class addTutorial implements Action{
  readonly type = ADD_TUTORIAL;
  constructor( public paylaod:Tutorial){

  }
}


export class removeTutorial implements Action{
  readonly type = REMOVE_TUTORIAL;
  constructor( public paylaod:number){

  }
}

export type Actions = addTutorial |removeTutorial