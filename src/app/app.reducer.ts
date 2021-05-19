import { Action } from "@ngrx/store";

export interface AppState {
  texto : string
}

export const initialState = {
  texto : 'pruebas'
}

export function miReducer(state : AppState = initialState , action: Action){
  console.log(action);
  return state;
}
