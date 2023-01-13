import { useMutation } from "@tanstack/react-query";
import { LoginInterface } from "../../interfaces/auth";
import { clients } from "./client";
import { LOGIN_ENDPOINT } from "./endpoints";

async function login(payload: LoginInterface) {
    const response = await clients(LOGIN_ENDPOINT, "POST", {
      body: payload,
      isHeader: true,
    });
    return response;
}
  
export function useLogins(options = {}) {
  return useMutation(login, options);
}
