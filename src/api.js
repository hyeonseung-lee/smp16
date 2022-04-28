import axios from "axios";
// GET
// api/users/:userId
// api/users

// POST
// api/users/login
// api/users/signup

const api = axios.create({
  baseURL: "http://13.125.152.225:3000/api/users",
  params: {},
});

export const usersApi = {
  users: () => api.get(),
};
