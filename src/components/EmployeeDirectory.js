import React, {useState, useEffect} from 'react';
import {getData} from '../utils/API'

  const TRow = ({data}) => {
      console.log(data)
      return (
        <tr>
          {/* dynamically pulling data from API below by referencing console log above */}
          <th><img src={data.picture.thumbnail} alt= {data.name.first + " " + data.name.last}/></th>
          <td>{data.name.first}</td>
          <td>{data.location.city}</td>
          {/* <td>Team Member</td> */}
        </tr>
      );

  }

function EmployeeDirectory(props) {
  const [users, setUsers] = useState([])
  useEffect(()=> getData()
  .then(({data})=> setUsers(data.results))
  , [])
    return (
      <>
      <div className="jumbotron">
        <h1>Brandon's Startup</h1>
      </div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">First Name</th>
          <th scope="col">City</th>
          {/* <th scope="col">Role</th> */}
        </tr>
      </thead>
      <tbody>
      {users.map(item =>
        <TRow data={item}/>)}
      </tbody>
    </table>
    </>
    );
  }

// looking into function to sort  
  // function ProductTable(props) {
  //   const { products } = props;
  //   let sortedProducts = [...products];
  //   sortedProducts.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   return (
  //     <Table>
  //       {/* as before */}
  //     </Table>
  //   );
  // }



export default EmployeeDirectory;