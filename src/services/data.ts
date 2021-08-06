import axios from "axios";
import { History } from "../models";

/**
 *
 * @param url URL's API
 * @returns A Promise with the response from the API
 */
export const getData = async (
  url: string = "http://localhost:3041/history"
) => {
  const res = await axios.get<Array<History>>(url);
  return res.data;
};

export const postData = ({
  url = "http://localhost:3041/history",
  data,
}: {
  url?: string;
  data: History;
}) => {
  return axios
    .post(url, data)
    .then((data) => data)
    .catch((e) => e);
};
