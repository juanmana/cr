import React, { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    id: '',
    email: '',
    first_name:'',
    last_name:''


  });

  useEffect(() => {
    axios

      .get(`https://reqres.in/api/users`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);









  return (
    <div>
      <ul>
        {data.map((user) => (
          <div  key={user.id}>
            
            <li>{user.email}</li>

            <li>{user.first_name}</li>

            <li>{user.last_name}</li>

             <button>Delete</button>
             <button>Edit</button>

             <hr/>
          </div>
        ))}
      </ul>
    </div>
  );
};
