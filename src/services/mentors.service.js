import api from "./api";

const MentorService = {
  getAll: async () => {
    const res = await api.get("/mentors"); // GET /mentors
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/mentors/${id}`);
    return res.data;
  },

  create: async (payload) => {
    const res = await api.post("/mentors", payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await api.put(`/mentors/${id}`, payload);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/mentors/${id}`);
    return res.data;
  },
};

export default MentorService;
