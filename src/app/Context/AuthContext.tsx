import { createContext } from "react";
import { User } from "../modelos/Auth";


export const AuthContext = createContext({
  isAuthenticated: false,
  user: null as User | null,
  login: (userData: User) => {},
  logout: () => {}
});