import { create } from "apisauce";

const apiClient = create({
  baseURL: "/api/contact",
});

export default apiClient;
