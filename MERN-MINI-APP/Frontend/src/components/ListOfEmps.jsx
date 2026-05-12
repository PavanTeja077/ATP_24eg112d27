import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    // navigate to employee page with empObj as selected
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    // navigate to edit employee page with empObj as selected
    navigate(`/edit/${empObj._id}`, { state: empObj });
  };
  const getEmps = async () => {
    let res = await fetch("http://localhost:5000/api/employees");
    if (res.status === 200) {
      let resObj = await res.json();
      setEmps(resObj);
    }
  };

  const gotoDeleteEmployee = async (empObj) => {
    let res = await axios.delete(`http://localhost:5000/api/employees/delete/${empObj._id}`);
    if(res.status===200){
      getEmps()
    }
  };

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-blue-100 p-5 w-max mx-auto my-5 gap-10">
            <p>{empObj.email}</p>
            <p className='mb-3'>{empObj.name}</p>
            <div className="flex justify-around mt-4">
              <button onClick={() => gotoEmployee(empObj)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Edit</button>
              <button onClick={() => gotoDeleteEmployee(empObj)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;