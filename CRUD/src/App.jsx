import React, { useEffect, useState } from 'react'
import {EmployeeData} from "./EmployeeData"
const App = () => {

  const [data, setdata] = useState([])
    const [id, setid] = useState(0);
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
  const [salary, setsalary] = useState(0);
  const[update,setupdate]=useState(false)
  useEffect(() => {
  setdata(EmployeeData)
  }, [])
  
  const handleEdit = (id) => {
    const dt = data.filter((item)=>item.Id===id)
    if (dt !== undefined) {
      setupdate(true)
      setid(dt[0].Id)
      setname(dt[0].Name)
      setage(dt[0].Age)
      setsalary(dt[0].Salary);
    }
  }
   const handleDelete= id => {
     if (id > 0) {
       if (window.confirm("Are you want to de"))
       {
         const dt = data.filter((item) => item.Id != id)
         setdata(dt)
         
         }
     }
   };
 
  const handleupdate = () => {
    
  }
  const handleSave = () => { };
  const handleClear = () => {
      setid(0);
      setname('');
      setage('');
    setsalary('');
    setupdate(false)

  }
  
  return <div className="App">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <div>
          <label>
            Id
            <input style={{ marginLeft: "5px" }} type="text" placeholder="Enter Id" value={id} onChange={e => setid(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Name
            <input style={{ marginLeft: "5px" }} type="text" placeholder="Enter Name" value={name} onChange={e => setname(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Age
            <input style={{ marginLeft: "5px" }} type="text" placeholder="Enter Age" value={age} onChange={e => setage(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Salary
            <input style={{ marginLeft: "5px" }} type="text" placeholder="Enter salary" value={salary} onChange={e => setsalary(e.target.value)} />
          </label>
        </div>
        {!update ? <button style={{ marginLeft: "5px" }} onClick={() => handleSave(item.Id)} className="btn btn-primary">
              Save
            </button> : <button style={{ marginLeft: "5px" }} onClick={() => handleupdate(item.Id)} className="btn btn-primary">
              Update
            </button>}

        <button style={{ marginLeft: "5px" }} onClick={() => handleClear()} className="btn btn-danger">
          Clear
        </button>
      </div>
      <table className="table table-hover gap={3}">
        <thead>
          <tr>
            <td>S No.</td>
            <td>Emp Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {item.Id}
                </td>
                <td>
                  {item.Name}
                </td>
                <td>
                  {item.Age}
                </td>
                <td>
                  {item.Salary}
                </td>
                <td id="gap">
                  <button onClick={() => handleEdit(item.Id)} className="btn btn-primary">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.Id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>;
          })}
        </tbody>
      </table>
    </div>;
}

export default App