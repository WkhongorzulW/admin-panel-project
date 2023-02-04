import axios from "axios";

/*------------- POST -------------*/
async function addUsers(e, setUsers, URL) {
  e.preventDefault();

  const postUserData = {
    firstname: e.target.firstname.value,
    lastname: e.target.lastname.value,
    email: e.target.email.value,
    age: e.target.age.value,
    phonenumber: e.target.phonenumber.value,
    role: e.target.role.value,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: postUserData,
  });
  setUsers(FETCHED_DATA.data.data);
}

async function deleteUser(userId, setUsers, URL) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

async function editUser(e, setUsers, URL, currentUser) {
  const putUserData = {
    id: currentUser.id,
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    email: currentUser.email,
    age: currentUser.age,
    phonenumber: currentUser.phonenumber,
    role: currentUser.role,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: putUserData,
  });
  setUsers(FETCHED_DATA.data.data);
}

export { addUsers, deleteUser, editUser };
