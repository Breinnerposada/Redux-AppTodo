import { ActionReducerMap } from "@ngrx/store";
import { filtroReducer } from "./filtro/filtro.reducer";
import { todoReducer } from "./todos/actions/todo.reducer";
import { Todo } from "./todos/models/todo.model";



export interface AppState{
  todos: Todo[],
  filtro: string

}


export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
