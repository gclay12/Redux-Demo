import { useSelector } from "react-redux";

const Profile = () => {

  const user = useSelector((state) => state.user.value);
  

  return (
    <div style={profilestyle}>
      <h2>Basic Redux Demo</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;


const profilestyle = {
  color: 'white',
  marginTop: '90px'
}