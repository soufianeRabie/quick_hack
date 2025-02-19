import {
  ADD_EVENT,
  ADD_PHARMACY,
  ADD_TIME_TABLE,
  DELETE_ROOM,
  DELETE_EVENT,
  DELETE_PHARMACY,
  DELETE_USER,
  EDIT_ROOM,
  EDIT_EVENT,
  EDIT_PHARMACY,
  EDIT_USER,
  REMOVE_USER,
  SET_USER,
  DELETE_MEDICAMENT,
  EDIT_MEDICAMENT, ADD_MEDICAMENT, DELETE_DEP_MARCHE, EDIT_DEP_MARCHE, ADD_DEP_MARCHE
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
export const AddBudgetaireAction = (payload)=>(
  {
    type : 'Add_Budgetaire',
    payload
  }
)
export const EditLigneBudgetaireAction = (payload)=>(
  {
    type : 'Edit_Budgetaire',
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
export const AddPharmacyAction = (payload)=>(
  {
    type : ADD_PHARMACY,
    payload
  }
)

export const EditPharmacyAction = (payload)=>(
    {
        type : EDIT_PHARMACY,
        payload
    }
)

export const AddDepMarcheAction = (payload)=>(
  {
    type : ADD_DEP_MARCHE,
    payload
  }
)

export const EditDepMarcheAction = (payload)=>(
  {
    type : EDIT_DEP_MARCHE,
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

export const DeleteDepMarcheAction = (payload)=>(
  {
    type : DELETE_DEP_MARCHE,
    payload
  }
)

export const DeletePharmacyAction = (payload)=>(
    {
        type : DELETE_PHARMACY,
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
// export const AddRoomAction = (payload)=>(
//   {
//     type : ADD_ROOM,
//     payload
//   }
// )

// Edit Room
// export const EditRoomAction = (payload)=>(
//   {
//     type : EDIT_ROOM,
//     payload
//   }
// )

// Delete Room
// export const DeleteRoomAction = (payload)=>(
//   {
//     type : DELETE_ROOM,
//     payload
//   }
// )


// Sector Actions ------------------------------

// => Add Room
export const AddMedicamentAction = (payload)=>(
  {
    type : ADD_MEDICAMENT,
    payload
  }
)

// Edit Room
export const EditMedicamentAction = (payload)=>(
  {
    type : EDIT_MEDICAMENT,
    payload
  }
)

// Delete Room
export const DeleteMedicamentAction = (payload)=>(
  {
    type : DELETE_MEDICAMENT,
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



// EVENTSS

export const AddEventAction = (payload)=>(
    {
        type : ADD_EVENT,
        payload
    }
)

// Edit Room
export const EditEventAction = (payload)=>(
    {
        type : EDIT_EVENT,
        payload
    }
)

// Delete Room
export const DeleteEventAction = (payload)=>(
    {
        type : DELETE_EVENT,
        payload
    }
)
