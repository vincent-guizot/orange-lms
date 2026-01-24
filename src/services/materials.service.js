import api from "./api";

const MaterialService = {
  getAll: async () => {
    const res = await api.get("/material"); // GET /material
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/material/${id}`);
    return res.data;
  },

  create: async (payload) => {
    const res = await api.post("/material", payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await api.put(`/material/${id}`, payload);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/material/${id}`);
    return res.data;
  },
};

export default MaterialService;
