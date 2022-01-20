import { createAction, props } from "@ngrx/store";




export const setFiltro = createAction('[FILTRO] SetFiltro',
props<{filtro:string}>())
