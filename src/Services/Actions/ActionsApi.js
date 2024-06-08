import axiosConfig from "@/Services/axios/axiosConfig.js";

export const ActionsApi = {
  login : async (data)=>
  {
    return await axiosConfig.post('/api/login' , data);
  },
  getUser : async ()=>
  {
    return await axiosConfig.get('/api/me')
  },
  AddGroup : async(group)=>{
    return await axiosConfig.post('/api/add_group' , group);
  },
  AddTrainer : async(trainer)=>{
   return  await axiosConfig.post('/api/trainers' , trainer);
  },
  AddTable1 : async(table)=>{
    return  await axiosConfig.post('/api/table1s' , table);
  },
  EditUser : async(user)=>{
    return  await axiosConfig.put('/api/users/' + user?.id , user);
  },
  EditTable1 : async(table1)=>{
    return  await axiosConfig.put('/api/table1s/' + table1?.id , table1);
  },
  DeleteTrainer : async(trainerId)=>{
    return  await axiosConfig.delete('/api/trainers/' + trainerId);
  },
  DeleteUser : async(userId)=>{
    return  await axiosConfig.delete('/api/users/' + userId);
  },
  AddRoom : async(room)=>{
    return await axiosConfig.post('/api/rooms' , room);
  },
  EditRoom : async(room)=>{
    return await axiosConfig.put('/api/rooms/' + room?.id, room);
  },
  DeleteRoom : async(roomId)=>{
    return  await axiosConfig.delete('/api/rooms/' + roomId);
  },
  DeleteTable1 : async(tableId)=>{
    return  await axiosConfig.delete('/api/table1s/' + tableId);
  },
  AddSeance : async(seance)=>{
    return await axiosConfig.post('/api/seances' , seance);
  },
  DeleteSeance : async(seanceId)=>{
    return  await axiosConfig.delete('/api/seances/' + seanceId);
  },
  GetGroups : async()=>{
   return  await axiosConfig.get('/api/groups' );
  },
  GetInitialize : async ()=>
  {
      return await axiosConfig.get('/api/initialize');
  },
  ChangeTimeTableActivation : async (id)=>
  {
    return await axiosConfig.post('api/time_table/update_activate' , {id}) ;
  },
  AddTimeTable : async (data)=>
  {
    return await axiosConfig.post('api/time_tables' , data );
  },
  AddModules : async (data)=>
  {
    return await axiosConfig.post('api/modules/multi' , {data} );
  },
  AffectModulesToTrainer : async (data)=>
  {
    return await axiosConfig.post('api/affectModulesTorTrainer' , data);
  },
  AddFiliere : async (data)=>
  {
    return await axiosConfig.post('api/filieres' , data)
  },
  DeleteFiliere : async(filiereId)=>{
    return  await axiosConfig.delete('/api/filieres/' + filiereId);
  },
  EditFiliere : async(filiereId , data)=>{
    return  await axiosConfig.put('/api/filieres/' + filiereId , data);
  },
  AddSector : async (data)=>
  {
    return await axiosConfig.post('api/sectors' , data)
  },
  DeleteSector : async(filiereId)=>{
    return  await axiosConfig.delete('/api/sectors/' + filiereId);
  },
  EditSector : async(filiereId , data)=>{
    return  await axiosConfig.put('/api/sectors/' + filiereId , data);
  },
}
