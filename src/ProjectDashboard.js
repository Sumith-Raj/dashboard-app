import { useState } from "react";

export const ProjectDashboard = () => {
  const initialData = {
    projectname: "",
    startdate: "",
    enddate: "",
    status: "",
    id: "",
    edit: false,
  };
  const [inputs, setinputs] = useState(initialData);
  const [list, setlist] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setinputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputs.projectname.length === 0) {
      return;
    }
    if (inputs.edit) {
      setlist(
        list.map((l) => {
          if (l.id === inputs.id) {
            l.data = inputs;
          }
          return l;
        })
      );
      setinputs(initialData);
    } else {
      const items = {
        id: Date.now(),
        data: inputs,
      };
      setlist(list.concat(items));
      setinputs(initialData);
    }
  }

  const handleEdit = (id) => {
    const editList = list.filter((item) => item.id === id);
    console.log(editList);
    console.log(editList[0]?.data?.projectname);
    setinputs(editList[0].data);
    setinputs((inputs) => ({
      ...inputs,
      id,
      edit: true,
    }));
  };

  const handleDelete = (id) => {
    const editList = list.filter((item) => item.id !== id);
    setlist(editList);
  };
  return (
    <>
      <h3>Projects</h3>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                name="projectname"
                onChange={handleChange}
                value={inputs.projectname}
              />
            </td>
            <td>
              <input
                name="startdate"
                type="date"
                onChange={handleChange}
                value={inputs.startdate}
              />
            </td>
            <td>
              <input
                name="enddate"
                type="date"
                onChange={handleChange}
                value={inputs.enddate}
              />
            </td>
            <td>
              <input
                name="status"
                onChange={handleChange}
                value={inputs.status}
              />
            </td>
            <td>
            <span className="material-icons submit"onClick={handleSubmit}>add_task</span>
            </td>
          </tr>
          {list.length > 0 ? (
            list.map((l) => (
              <tr key={l.id}>
                <td>{l.data.projectname}</td>
                <td>{l.data.startdate}</td>
                <td>{l.data.enddate}</td>
                <td>{l.data.status}</td>
                <td>
                  <span class="material-icons edit" onClick={() => handleEdit(l.id)}>edit</span>
                  <span class="material-icons delete" onClick={() => handleDelete(l.id)}>delete</span>
                </td>
              </tr>
            ))
          ) : (
            <tr  >
              <p style={{textAlign:"center"}}>no data to show</p>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
