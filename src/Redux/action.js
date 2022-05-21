export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SORT_TODO = "SORT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLEUPDATE_TODO = "TOGGLEUPDATE_TODO"

export const addTodo = (data) =>{
  
    return {
        type:ADD_TODO,
        payload:data
    }
}

export const deleteTodo = (id) =>{
   
    return {
        type:DELETE_TODO,
        payload:id
    }
}
export const toggleTodo = (id) =>{
   
    return {
        type:TOGGLE_TODO,
        payload:id
    }
}

export const editTodo = (data) =>{
   
    return {
        type:EDIT_TODO,
        payload:data
    }
}
export const toggleUpdateTodo = (id) =>{
   
    return {
        type:TOGGLEUPDATE_TODO,
        payload:id
    }
}


export const sortTodo = (by) =>{
   
    return {
        type:SORT_TODO,
        payload:by
    }
}

