import axios from "axios";

const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com/api/galleria",
//   baseURL: "http://localhost:5002/api/galleria",
});

export const getAll = async () => {
  try {
    const res = await instance.get("/all");

    return res.data;
  } catch (error) {
    return error;
  }
};
