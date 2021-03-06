import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { borrarTodo, editarTodo, toggle } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editando:boolean = false;

  @ViewChild('inputFisico') txtInputFisico!: ElementRef<any>;
  constructor( private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo?.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

    this.chkCompletado.valueChanges.subscribe( (valor:any) => {
      this.store.dispatch( toggle({id: this.todo.id}) )
    })
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto)
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.texto){return;}
    this.store.dispatch(editarTodo({
      id: this.todo.id,
      texto: this.txtInput.value,
    }))
  }


  borrarTodo(){
    this.store.dispatch(borrarTodo({id: this.todo.id}))
  }
}
