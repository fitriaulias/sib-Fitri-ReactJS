import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [ users, setUsers ] = useState([]);

  //fetch API untuk mendapatkan data api
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, []);

  return (
   <div>
    <div className="p-5 mb-4 bg-light rounded-3 border mt-4">
      <Link to="/"
        type="button" 
        className="btn btn-success btn-lg"
        role="button">
          Back to Home
      </Link>
      <div className='container-fluid py-5'>
      <table className='col-md 8 fs-4 table table-bordered'>
        <thead>
          <tr className='table-dark'>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </div>
  </div>
  </div>
  );
};

export default Users;
