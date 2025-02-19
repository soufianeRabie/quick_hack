import {
  ADD_MEDICAMENT,
  ADD_EVENT, ADD_PHARMACY,
  ADD_TIME_TABLE,
  ADD_TRAINER, DELETE_EVENT, DELETE_PHARMACY,
  DELETE_USER, EDIT_EVENT, EDIT_PHARMACY,
  EDIT_USER, REMOVE_USER, SET_USER, DELETE_MEDICAMENT, EDIT_MEDICAMENT
} from "@/context/Features/ActionsName.js";


export const initialState = {
    user: null,
  lignes_budgetaire: [], // Added for budget lines
  dep_marche: [], // Added for expenses
  expense_types: [], // Added for expense types linked to budget lines
    users : [],
    table1s:[],
    lignes_budgetaire:[],
    table2s:[],
    events:[],
    filieres:[],
    levels:[],
    sectors:[],
    seances:[],
    time_tables:[],
    modules : [],
    isLoading : false ,
    isError : false ,
    isSuccess : false ,
  pharmacies :[],
    error : null ,
   isRamadan : false ,
}


 const AppReducer = (state = initialState , action)=>
{

  switch (action.type)
  {

    case SET_USER:
      return {
        ...state , user:action.payload.user
      }

    case REMOVE_USER:
      return {
        ...state , user:null
      }
    case 'SET_INITIALIZE':

      return {...state ,
        table1s: action.payload.table1s,
        lignes_budgetaire: action.payload.lignes_budgetaire || [],
        dep_marche: action.payload.dep_marche || [],
        expense_types: action.payload.expense_types || [],
        medicaments: action.payload.medicaments,
        pharmacies : action.payload.pharmacies,
        events: action.payload.events,
        lignes_budgetaire: action.payload.lignes_budgetaire,

        // table2s:  action.payload.table2s,
        // filieres:  action.payload.filieres,
        // sectors: action.payload.sectors,
        // time_tables: action.payload.time_tables,
        // modules: action.payload?.modules,
        // levels: action.payload.levels,
        // seances :action.payload.seances,
        users: action.payload.users,
        isLoading: false ,
        isError: false,
        isSuccess: true,
        error: null
      }

    case 'SET_IS_ERROR':
      return {...state ,
        isError: action.payload.isError,
        isSuccess: !action.payload.isError,
        isLoading: false,
        error: action.payload.error
      }
    case 'ADD_GROUP':
      return {...state ,
      groups:  [ action.payload.group ,...state.groups ]
      }

    case 'ADD_SEANCE':

      const seanceWithInfo= action.payload.seanceWithInfo
      return {
        ...state,
        seances: [ seanceWithInfo, ...state.seances],
        time_tables: state.time_tables.map((time_table) => {
          if (seanceWithInfo.time_table_id === time_table?.id) {
            return {
              ...time_table,
              seances: [...time_table.seances, seanceWithInfo]
            };
          }
          return time_table;
        })
      };
    case 'CHANGE_ACTIVATION':
      const Tm = action?.payload?.timeTable;
      console.log('')

      // Find the currently active time table
      const activeTimeTable = state.time_tables.find(
        (timeTable) => timeTable?.group_id === Tm?.group_id && parseInt(timeTable?.active) === 1
      );


      // Map over the time tables to update the active status
      const updatedTimeTables = state.time_tables.map((time_table) => {
        if (time_table.id === activeTimeTable?.id) {
          // Deactivate the currently active time table
          return { ...time_table, active: 0 };
        } else if (time_table.id === Tm.id) {
          // Toggle the activation status of the time table provided in the payload
          return { ...time_table, active: 1 };
        } else {
          return time_table;
        }
      });



      // Update the groups time tables if groups exist
      const updatedGroups = state.groups
        ? state.groups.map((group) => {
          if (group.time_tables) {
            console.log('yes')
            return {
              ...group,
              time_tables: group.time_tables.map((timeTable) =>
                {
                  if(  timeTable?.id === activeTimeTable?.id)
                  {
                    return { ...timeTable, active: 0}
                  }
                  if(timeTable.id === Tm.id)
                  {
                    return { ...timeTable, active: 1}
                  }
                  return  timeTable
                }
              ),
            };
          } else {
            return group;
          }
        })
        : state.groups;

      // Return the updated state
      return { ...state, time_tables: updatedTimeTables, groups: updatedGroups };
    case "DELETE_SEANCE":
      // console.log(action.payload.id , state.seances.filter((seance)=>seance.id !== action.payload.id))
      return {...state ,
        seances : state.seances.filter((seance)=>seance.id !== action.payload.id ,
          ),
        time_tables:  state.time_tables.map((timeTable)=>
        {
          if(timeTable.id  === action.payload.timeTableId)
          {
            return {...timeTable , seances : timeTable.seances.filter((seance)=>seance.id !== action.payload.id) }
          }
          return timeTable
        })
      }

    case ADD_TIME_TABLE:
      console.log(action.payload)
      const timeTable = action.payload.timeTable
      return {...state,
        time_tables: [timeTable , ...state.time_tables],
        groups: state.groups.map((group)=>{
          if(group.id === timeTable.group_id)
          {
            return {...group , time_tables : [timeTable , ... group.time_tables]}
          }
          return group
        })
      }

      // ADD TRAINER ACTION
    case ADD_TRAINER:
      console.log(action)
      return {...state ,
        trainers: [action.payload.trainer , ...state.trainers]
      }
    case EDIT_USER:
      const user = action.payload.user
        // console.log(action)
        // console.log('id' ,user.id)
        return {...state , users:
            state.users.map((fl)=>fl.id === user.id? user : fl  )
        }

    case DELETE_USER :
      return {...state , users:
        state.users.filter((tr)=>tr.id !==action.payload.id )
      }

      // MEDICAMENT

    case ADD_MEDICAMENT:
      return {...state ,
        medicaments: [action.payload.medicament , ...state.medicaments]
      }
    case EDIT_MEDICAMENT:
      const medicament = action.payload.medicament
      return {...state , medicaments:
            state.medicaments.map((fl)=>fl.id === medicament.id? medicament : fl  )
      }

    case DELETE_MEDICAMENT :
      return {...state , medicaments:
            state.medicaments.filter((tr)=>tr.id !==action.payload.id )
      }

      // ---------------------FILIERE ACTIONS --------------------

    // case ADD_FILIERE:
    //   console.log(action)
    //   return {...state ,
    //     filieres: [action.payload.filiere , ...state.filieres]
    //   }
    // case EDIT_FILIERE:
    //   const filiere = action.payload.filiere
    //   console.log(action)
    //   console.log('id' ,filiere.id)
    //   return {...state , filieres:
    //       state.filieres.map((fl)=>fl.id === filiere.id? filiere : fl  )
    //   }
    //
    // case DELETE_FILIERE :
    //   return {...state , filieres:
    //       state.filieres.filter((fl)=>fl.id !==action.payload.id )
    //   }

    // ---------------------ROOM ACTIONS --------------------

    case ADD_PHARMACY:
      return {...state ,
        pharmacies: [action.payload.pharmacy , ...state.pharmacies]
      }
    case EDIT_PHARMACY:
      console.log(state.pharmacies)
      const pharmacy = action.payload.pharmacy
      return {...state , pharmacies:
          state.pharmacies.map((rm)=>rm?.id === pharmacy.id? pharmacy : rm  )
      }

    case DELETE_PHARMACY :
      return {...state , pharmacies:
          state.pharmacies.filter((fl)=>fl.id !==action.payload.id )
      }

    // --------------------- SECTOR ACTIONS --------------------

    case ADD_EVENT:
      return {...state ,
        events: [action.payload.event , ...state.events]
      }
    case EDIT_EVENT:
      const event = action.payload.event
      return {...state , events:
          state.events.map((sc)=>sc.id === event.id? event : sc  )
      }

    case DELETE_EVENT :
      return {...state , events:
          state.events.filter((sc)=>sc.id !==action.payload.id )
      }
    default :
      return state
  }
}

export default AppReducer
