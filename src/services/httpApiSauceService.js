import { create } from "apisauce";

export const sellerUrl = process.env.REACT_APP_SELLER_URL;

export const buyerUrl = process.env.REACT_APP_BUYER_URL;

const apiClient = create({
  // baseURL: "https://agrific-backend.herokuapp.com",
  baseURL: process.env.REACT_APP_API_URL,
});

const apiClientFlutterWave = create({
  baseURL: "https://api.ravepay.co/v2/banks",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = sessionStorage.getItem("token");
  if (!authToken) {
    return;
  } else {
    request.headers["Authorization"] = `Bearer ${authToken}`;
  }
});

export default apiClient;
