import api from "./api";

const ClassService = {
  getAll: async () => {
    const res = await api.get("/classes"); // GET /classes
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/classes/${id}`);
    return res.data;
  },

  create: async (payload) => {
    const res = await api.post("/classes", payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await api.put(`/classes/${id}`, payload);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/classes/${id}`);
    return res.data;
  },
};

export default ClassService;
