import { api } from "./api";

export const login = async (email: string, password: string) => {
  const res = await api.post("/api/auth/login", { email, password });
  return res.data; // { token, role }
};

export const logout = () => {
  localStorage.removeItem("token");
};
