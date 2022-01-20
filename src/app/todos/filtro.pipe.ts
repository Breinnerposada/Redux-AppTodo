import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todo: Todo[], filtro: string): Todo[] {

    switch (filtro) {
      case 'completados':
      return todo.filter(todo => todo.completado)

      case 'pendientes':
      return todo.filter(todo => !todo.completado)

      default:
        return todo
    }

  }

}
