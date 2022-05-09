import axios from "axios";

const API_URL = "https://random-data-api.com/api/users/random_user?size=10";

async function fetchAllData() {
  const { data: jsonContent } = await axios.get(API_URL);
  return jsonContent;
}

export default { fetchAllData };
