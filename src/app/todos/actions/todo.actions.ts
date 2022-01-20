import { createAction, props } from "@ngrx/store";


export const createTodo = createAction('[TODO] CrearTodo',
props<{texto:string}>()
)

export const toggle = createAction('[TODO] ToggleTrue',
props<{id:number}>()
)

export const editarTodo = createAction('[TODO] EditarTodo',
props<{id:number, texto: string}>()
)

export const borrarTodo = createAction('[TODO] BorrarTodo',
props<{id:number}>()
)

export const toggleAll = createAction('[TODO] ToggleAllTodo')

export const clearComplete = createAction('[FILTRO] ClearCompletes')
