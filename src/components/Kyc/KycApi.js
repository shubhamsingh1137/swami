import axios from "axios";

export const fetchKycDataAPI = async (token) => {
  return await axios.get("https://m1blog.aaragroups.com/kyc-api/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const submitKycAPI = async (formData, token) => {
  return await axios.post("https://m1blog.aaragroups.com/kyc-api/", formData, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
