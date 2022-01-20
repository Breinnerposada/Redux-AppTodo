import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFiltro } from 'src/app/filtro/filtro.actions';
import { clearComplete } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual:string = '';
  filtros = ['todos','completados','pendientes'];

  pendientes: number = 0;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store
      .subscribe( ({todos,filtro}) => {
        this.filtroActual = filtro;
        this.pendientes = todos.filter( todo => !todo.completado).length
      })


  }

  filterSearch(filter:string){
    this.store.dispatch( setFiltro({filtro: filter}) )
  }

  cleanComplete(){
    this.store.dispatch( clearComplete() )

  }

}
