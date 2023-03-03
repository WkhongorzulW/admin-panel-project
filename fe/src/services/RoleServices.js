import axios from "axios";

export async function addRole(e, setUserRoles, URL) {
  e.preventDefault();

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      roleName: e.target.roleName.value,
    },
  });
  console.log(FETCHED_DATA.data.data);
  setUserRoles(FETCHED_DATA.data.data);
}
