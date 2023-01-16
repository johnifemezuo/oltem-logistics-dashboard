// import axios, { AxiosRequestConfig } from "axios";
// import { ApiHeader, OptionsArgs } from "../interfaces/client";
// import { decrypt_key, handleLogout } from "../utils/auth-util";
// import { loginKey } from "../utils/constants";
// import storage from "../utils/storage";

// export type DefaultResponse = Record<string, unknown>;

// /** Axios interceptors to transform error message for clientFn */
// axios.interceptors.response.use(
//   // response
//   function (response: any) {
//     return response;
//   },

//   // Error
//   function (error:any) {
//     let errorArray: any = [];
//     const errorMessage = error?.response?.data ?? "Something went wrong! Please try again";

//     if (errorMessage.errors) {
//       const values = Object.values(errorMessage.errors);
//       errorArray = values;
//     }

//     if (errorMessage?.message.includes("Invalid or expired token")) {
//       handleLogout();
//     }
//     return Promise.reject(errorArray.length > 0 ? errorArray : errorMessage);
//   }
// );

// export async function client<ResponseType>(
//   endpoint: string,
//   method?: any,
//   { body, headers: customHeaders, ...customConfig }: OptionsArgs = {}
// ) {
//   const encrypted_token = storage.get(loginKey);
//   let token = "";

//   if (encrypted_token) {
//     token = decrypt_key(encrypted_token);
//   }

//   const headers: ApiHeader = {
//     "Content-Type": customConfig.isFormData ? "multipart/form-data" : "application/json",
//   };

//   if (token) headers.Authorization = `Bearer ${token}`;

//   delete customConfig.isHeader;

//   const params: AxiosRequestConfig = {
//     method: method || "GET",
//     ...customConfig,
//     headers: {
//       ...headers,
//       ...customHeaders,
//     },
//   };

//   if (body) params.data = body;

//   let response: ResponseType;
//   const { data } = await axios(`${endpoint}`, params);

//   if (data?.data) {
//     const { data: resolvedResponse } = data;
//     response = resolvedResponse;
//   } else {
//     response = data;
//   }

//   return response;
// }


export function clients(e:any,t:any,s:any) {
  // console.log(e, t, s);
}