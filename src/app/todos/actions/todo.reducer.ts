import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { borrarTodo, clearComplete, createTodo, editarTodo, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { texto }) =>  [...state, new Todo(texto)]   ),

  on(borrarTodo, (state, {id}) => state.filter(todo => todo.id !== id)),


  on(clearComplete, (state) => state.filter(todo => !todo.completado)),

  on(toggle, (state, { id }) =>  {
    return state.map(todo => {
      if(todo.id === id){
      return {
        ...todo,
        completado: !todo.completado
      }
    }else {
      return todo;
    }
    })
  }),


  on(toggleAll, (state) =>  {
    return state.map(todo => {
      return {
        ...todo,
        completado: !todo.completado
      }
    })
  }),

  on(editarTodo, (state, { id,texto }) =>  {
    return state.map(todo => {
      if(todo.id === id){
      return {
        ...todo,
        texto: texto
      }
    }else {
      return todo;
    }
    })
  }),

);

export function todoReducer(state:any, action:any) {
  return _todoReducer(state, action);
}
