import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, deleteEmployee, updateEmployeeName } from './features/Employees';

function App() {

  //function to get actions to dispatch
const dispatch = useDispatch();
//useState to grab the value
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [dept, setDept] = useState("");
const [title, setTitle] = useState("");

const [newFirstname, setNewFirstname] = useState("");

//getting access with this method throughout every component
  const employeeList = useSelector((state) => state.employees.value)

  return (
    <div className="App">
        <div className='addEmployee'>
          {/* getting the value of the  form*/}
          <div className='employeeInfo'>
          <div className='form-data'>
            <label for="firstname"> Firstname</label>
          <input type="text" placeholder="firstname" onChange={(e) => setFirstname(e.target.value)}/>
          </div>
          <div className='form-data'>
            <label for="lastname"> Lastname</label>
            <input type="text" placeholder='lastname' onChange={(e) => setLastname(e.target.value)}/>

          </div>
          <div className='form-data'>
            <label for="dept">Department: </label>
            <input type="text" placeholder='dept' onChange={(e) => setDept(e.target.value)} />

          </div>
          <div className='form-data'>
            <label for="title">Title</label>
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />

          </div>
          </div>




          {/* dispatch the value to the function */}
          <button onClick={() => {dispatch(addEmployee(
            {
              id: employeeList[employeeList.length -1].id + 1,
              firstname,
              lastname,
              dept,
              title
            }
          ))}}>Add employee</button>
        </div>
        <div className='displayEmployee'>
          {
            employeeList.map((user) => {
              return (
              <div className='display' key={user.id}>
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
                <input type="text" placeholder='New firstname' onChange={(e) => setNewFirstname(e.target.value)} />
                <div className='editing'>
                <button className='editing' onClick={() => {
                  dispatch(updateEmployeeName({id: user.id, firstname: newFirstname})
                    )
                }}>Update firstname</button> 
                  <button onClick={() => { dispatch(deleteEmployee({id: user.id})) }}>Delete Firstname</button>
                  </div>

              </div>)

            })
          }
        </div>
    </div>
  );
}

export default App;
