import axiosConfig from "@/Services/axios/axiosConfig.js";
// import { AddPharmacy } from "../../components/Admin/Pharmacy/AddPharmacy";

export const ActionsApi = {
  login: async (data) => {
    return await axiosConfig.post("/api/login", data);
  },
  getUser: async () => {
    return await axiosConfig.get("/api/me");
  },
  AddMedicament: async (medicament) => {
    return await axiosConfig.post("/api/medicaments", medicament);
  },
  AddTrainer: async (trainer) => {
    return await axiosConfig.post("/api/trainers", trainer);
  },
  AddPharmacy: async (table) => {
    return await axiosConfig.post("/api/pharmacies", table);
  },
  EditUser: async (user) => {
    return await axiosConfig.put("/api/users/" + user?.id, user);
  },
  EditMedicament: async (medicament) => {
    return await axiosConfig.put("/api/medicaments/" + medicament?.id, medicament);
  },
  EditPharmacy: async (pharmacies) => {
    return await axiosConfig.put(
      "/api/pharmacies/" + pharmacies?.id,
      pharmacies
    );
  },
  DeleteMedicament: async (medicamentId) => {
    return await axiosConfig.delete("/api/medicaments/" + medicamentId);
  },
  DeleteUser: async (userId) => {
    return await axiosConfig.delete("/api/users/" + userId);
  },
  AddRoom: async (room) => {
    return await axiosConfig.post("/api/rooms", room);
  },
  EditRoom: async (room) => {
    return await axiosConfig.put("/api/rooms/" + room?.id, room);
  },
  DeleteRoom: async (roomId) => {
    return await axiosConfig.delete("/api/rooms/" + roomId);
  },
  DeletePharmacy: async (tableId) => {
    return await axiosConfig.delete("/api/pharmacies/" + tableId);
  },
  AddSeance: async (seance) => {
    return await axiosConfig.post("/api/seances", seance);
  },
  DeleteSeance: async (seanceId) => {
    return await axiosConfig.delete("/api/seances/" + seanceId);
  },
  GetGroups: async () => {
    return await axiosConfig.get("/api/groups");
  },
  GetInitialize: async () => {
    return await axiosConfig.get("/api/initialize");
  },
  ChangeTimeTableActivation: async (id) => {
    return await axiosConfig.post("api/time_table/update_activate", { id });
  },
  AddTimeTable: async (data) => {
    return await axiosConfig.post("api/time_tables", data);
  },
  AddModules: async (data) => {
    return await axiosConfig.post("api/modules/multi", { data });
  },
  AffectModulesToTrainer: async (data) => {
    return await axiosConfig.post("api/affectModulesTorTrainer", data);
  },
  AddFiliere: async (data) => {
    return await axiosConfig.post("api/filieres", data);
  },
  DeleteFiliere: async (filiereId) => {
    return await axiosConfig.delete("/api/filieres/" + filiereId);
  },
  EditFiliere: async (filiereId, data) => {
    return await axiosConfig.put("/api/filieres/" + filiereId, data);
  },
  AddSector: async (data) => {
    return await axiosConfig.post("api/sectors", data);
  },
  DeleteSector: async (filiereId) => {
    return await axiosConfig.delete("/api/sectors/" + filiereId);
  },
  EditSector: async (filiereId, data) => {
    return await axiosConfig.put("/api/sectors/" + filiereId, data);
  },
};
