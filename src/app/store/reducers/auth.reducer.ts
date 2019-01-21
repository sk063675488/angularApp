import { Action } from '@ngrx/store';
import { Tutorial} from '../../model/auth.model';
import * as tutorialAction from '../actions/auth.actions';

const initalState : Tutorial = {
  name:'sandeep',
  url:'https://www.google.com'
}

export function reducer(state:Tutorial[]= [initalState], action:tutorialAction.Actions){

  switch(action.type){
    case tutorialAction.ADD_TUTORIAL:
        return [...state, action.paylaod]
    default:
      return state
  }
}