import axios from "axios";

export async function addUsers(e, users, setUsers, URL) {
  e.preventDefault();

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      birthDate: e.target.birthDate.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      roleId: e.target.roleId.value,
      address: e.target.address.value,
    },
  });
  setUsers(FETCHED_DATA);
}

export async function editUser(setUsers, URL, currentUser) {
  const editedUser = {
    userId: currentUser.id,
    lastName: currentUser.last_name,
    email: currentUser.email,
    phoneNumber: currentUser.phone_number,
    roleId: currentUser.user_role_id,
    address: currentUser.address,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: editedUser,
  });
  setUsers(FETCHED_DATA);
}
