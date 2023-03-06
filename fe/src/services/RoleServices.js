import axios from "axios";

/*------------- POST ------------*/
export async function addRole(e, userRoles, setUserRoles, URL) {
  e.preventDefault();

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      roleName: e.target.roleName.value,
    },
  });
  setUserRoles(FETCHED_DATA);
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
  setUserRoles(FETCHET_DATA);
}

/*------------- EDIT --------------*/
export async function editRoleName(userRoles, setUserRoles, URL, currentRole) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: {
      roleId: currentRole.id,
      roleName: currentRole.user_role_name,
    },
  });
  setUserRoles(FETCHED_DATA);
}
