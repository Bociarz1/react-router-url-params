import { useParams } from "react-router-dom";

function User() {
  // Object params {has userId element}
const params = useParams()
const userId = params.userId
  return ( 
    <>
      user {userId}
    </>
   );
}

export default User;