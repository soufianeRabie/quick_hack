import {
    ADD_ROOM, ADD_SECTOR, ADD_TABLE1,
    ADD_TIME_TABLE,
    DELETE_ROOM, DELETE_SECTOR, DELETE_TABLE1,
    DELETE_USER, EDIT_ROOM, EDIT_SECTOR, EDIT_TABLE1, EDIT_USER, REMOVE_USER, SET_USER
} from "@/context/Features/ActionsName.js";

export const SetIsLoading = (payload)=>
({
  type : 'SET_IS_LOADING',
  payload
})
export const SetIsSucces = (payload)=>
  ({
    type : 'SET_IS_SUCCESS',
    payload
  })

export const SetIsError = (payload)=>
  ({
    type : 'SET_IS_ERROR',
    payload
  })

export const SetError = (payload)=>
  ({
    type : 'SET_ERROR',
    payload
  })


export const SetInitialize = (payload)=>
  ({
    type : 'SET_INITIALIZE',
    payload
  })

export const AddGroupToState = (payload)=>
  ({
    type : 'ADD_GROUP',
    payload
  })

export const AddSeance = (payload)=>(
  {
    type : 'ADD_SEANCE',
    payload
  }
)
export const DeleteSeance = (payload)=>(
  {
    type : 'DELETE_SEANCE',
    payload
  }
)


export const ChangeActivation = (payload)=>(
  {
    type : 'CHANGE_ACTIVATION',
    payload
  }
)


export const AddTimeTableAction = (payload)=>(
  {
    type : ADD_TIME_TABLE,
    payload
  }
)

// Add Trainer Action
export const AddTable1Action = (payload)=>(
  {
    type : ADD_TABLE1,
    payload
  }
)

export const EditTable1Action = (payload)=>(
    {
        type : EDIT_TABLE1,
        payload
    }
)

// Edit Trainer
export const EditUserAction = (payload)=>(
  {
    type : EDIT_USER,
    payload
  }
)

// Delete Trainer
export const DeleteUserAction = (payload)=>(
  {
    type : DELETE_USER,
    payload
  }
)

export const DeleteTable1Action = (payload)=>(
    {
        type : DELETE_TABLE1,
        payload
    }
)

// Filer Actions ------------------------------

// => Add Filiere
// export const AddFiliereAction = (payload)=>(
//   {
//     type : ADD_FILIERE,
//     payload
//   }
// )
//
// // Edit Filiere
// export const EditFiliereAction = (payload)=>(
//   {
//     type : EDIT_FILIERE,
//     payload
//   }
// )
//
// // Delete Filiere
// export const DeleteFiliereAction = (payload)=>(
//   {
//     type : DELETE_FILIERE,
//     payload
//   }
// )


// Room Actions ------------------------------

// => Add Room
export const AddRoomAction = (payload)=>(
  {
    type : ADD_ROOM,
    payload
  }
)

// Edit Room
export const EditRoomAction = (payload)=>(
  {
    type : EDIT_ROOM,
    payload
  }
)

// Delete Room
export const DeleteRoomAction = (payload)=>(
  {
    type : DELETE_ROOM,
    payload
  }
)


// Sector Actions ------------------------------

// => Add Room
export const AddSectorAction = (payload)=>(
  {
    type : ADD_SECTOR,
    payload
  }
)

// Edit Room
export const EditSectorAction = (payload)=>(
  {
    type : EDIT_SECTOR,
    payload
  }
)

// Delete Room
export const DeleteSectorAction = (payload)=>(
  {
    type : DELETE_SECTOR,
    payload
  }
)

// Set User
export const SetUserAction = (payload)=>
  ({
  type : SET_USER,
    payload
})

// Remove User {logout}
export const RemoveUserAction = ()=>
  ({
    type : REMOVE_USER,
  })

