import api from "./api";

const MenteeService = {
  getAll: async () => {
    const res = await api.get("/mentees"); // GET /mentees
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/mentees/${id}`);
    return res.data;
  },

  create: async (payload) => {
    const res = await api.post("/mentees", payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await api.put(`/mentees/${id}`, payload);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/mentees/${id}`);
    return res.data;
  },
};

export default MenteeService;
