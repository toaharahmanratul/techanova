import { BASE_API_URL } from "@/utils/constants";
import axios from "axios";

const API = axios.create({
  BASE_API_URL,
});

export const createNewUser = (payload) => API.post("/api/user", payload);
export const verifyEmail = (payload) =>
  API.post("/api/user/verifyemail", payload);
export const getUser = (id) => API.get(`/api/user/${id}`);
