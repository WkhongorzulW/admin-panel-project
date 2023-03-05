import axios from "axios";

/*------------- POST ------------*/
export async function addRole(e, setUserRoles, URL) {
  e.preventDefault();

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      roleName: e.target.roleName.value,
    },
  });
  console.log(FETCHED_DATA.data);
  setUserRoles(FETCHED_DATA.data);
}

/*---------------- DELETE -----------------*/
export async function deleteRole(setUserRoles, roleName, URL) {
  const FETCHET_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      roleName: roleName,
    },
  });
  setUserRoles(FETCHET_DATA.data);
}

/*------------- EDIT --------------*/
export async function editRoleName(setUserRoles, URL, currentRole) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: {
      roleId: currentRole.id,
      roleName: currentRole.user_role_name,
    },
  });
  console.log(currentRole);
  setUserRoles(FETCHED_DATA.data);
}
