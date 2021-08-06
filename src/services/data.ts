import axios from "axios";
import { History } from "../models";

export const getData = async (
  url: string = "http://localhost:3041/history"
) => {
  const res = await axios.get<Array<History>>(url);
  return res.data;
};
