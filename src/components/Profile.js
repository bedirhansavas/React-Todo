import React from "react";
import "../css/App.css";
function Profile() {
  const [username, setUsername] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const pullInfos = () => {
    setUsername(localStorage.getItem('name'));
    setSurname(localStorage.getItem('surname'));
  }
  React.useEffect(() => {
   pullInfos();
  }, [])
  return (
    <div className="profile">
        <div className="mt4">
            <img src="/profilephoto11.png" alt="Profile" width="100" height="100"/>
        </div>
      
        <br/>
        <div className="flex-end" style={{marginLeft:'10px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}> 
        <div className="nameArea">
        <p className="p"> Name: {username}</p>
        </div>
        <div className="nameArea">
        <p className="p">Surname: {surname}</p>
        </div>
       </div>
        
      
    </div>
  );
}

export default Profile;
