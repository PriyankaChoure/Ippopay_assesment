import axios from "axios";
/**
 * API List-
 * to save answer - localhost:8082/backend/save
 */
const SERVER_URL = "http://localhost:8082/backend/";

// save answer
export const saveAnswerToServer = async (ans) => {
  const URL = `${SERVER_URL}`;
  try {
    const responseData = await axios.post(URL, ans);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
