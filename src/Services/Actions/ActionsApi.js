import axiosConfig from "@/Services/axios/axiosConfig.js";
// import { AddPharmacy } from "../../components/Admin/Pharmacy/AddPharmacy";

export const ActionsApi = {


  getLignesBudgetaires: async () => {
    return await axiosConfig.get("/api/ligne-budgetaires");
  },
  ChatBot: async (message) => {
    return await axiosConfig.post("/api/ChatBot" , message);
  },
  getAnalysis: async () => {
    return await axiosConfig.get("/api/getAnalysis");
  },
  addLigneBudgetaire: async (ligneBudgetaire) => {
    return await axiosConfig.post("/api/ligne-budgetaires", ligneBudgetaire);
  },
  updateLigneBudgetaire: async (id, ligneBudgetaire) => {
    return await axiosConfig.put(`/api/ligne-budgetaires/${id}`, ligneBudgetaire);
  },
  deleteLigneBudgetaire: async (id) => {
    return await axiosConfig.delete(`/api/ligne-budgetaires/${id}`);
  },


  addbudgetairesPlafond: async (data , id) => {
    return await axiosConfig.post(`/ligne-budgetaires/${id}/plafonds`, data);
  },
  // Expense Types
  getExpenseTypes: async () => {
    return await axiosConfig.get("/api/expense-types");
  },
  addExpenseType: async (expenseType) => {
    return await axiosConfig.post("/api/expense-types", expenseType);
  },
  updateExpenseType: async (id, expenseType) => {
    return await axiosConfig.put(`/api/expense-types/${id}`, expenseType);
  },
  deleteExpenseType: async (id) => {
    return await axiosConfig.delete(`/api/expense-types/${id}`);
  },

  // Dep Marche
  getDepMarches: async () => {
    return await axiosConfig.get("/api/dep-marches");
  },
  addDepMarche: async (depMarche) => {
    return await axiosConfig.post("/api/dep-marches", depMarche);
  },
  updateDepMarche: async (id, depMarche) => {
    return await axiosConfig.put(`/api/dep-marches/${id}`, depMarche);
  },
  deleteDepMarche: async (id) => {
    return await axiosConfig.delete(`/api/dep-marches/${id}`);
  },



  login: async (data) => {

    return await axiosConfig.post("/api/login", data);
  },
  getUser: async () => {
    return await axiosConfig.get("/api/me");
  },
  AddMedicament: async (medicament) => {
    return await axiosConfig.post("/api/medicaments", medicament);
  },
  ValidateEvent : async (id) => {
    return await axiosConfig.put("/api/event/valid/" + id)
  },
  AddEvent: async (event) => {
    return await axiosConfig.post("/api/events", event);
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
  DeleteEvent: async (eventId) => {
    return await axiosConfig.delete("/api/events/" + eventId);
  },
  EditEvent: async (event) => {
    return await axiosConfig.put("/api/events/" + event?.id, event);
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
