import { Component } from "react";

import { students } from "./mock";
import "./State.css";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
      surname: "",
      status: "",
      data: students,
      search: "id",
      active: null,
    };
  }

  render() {
    console.log("re-render");
    const { data, name, surname, status, search } = this.state;
    const handleInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value.trim(),
      });
      console.log(e.target.name);
    };
    const onFilter = (e) => {
      console.log(e.target.value.trim());
      let res = students.filter((person) =>
        `${person[search]}`
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      );
      this.setState({
        data: res,
      });
    };
    const onDelete = (id) => {
      console.log(id);
      let newData = this.state.data.filter((person) => person.id !== id);
      this.setState({
        data: newData,
      });
    };
    const onAdd = () => {
      let user = {
        id: data.length + 1,
        name: name,
        surname: surname,
        status: status,
      };
      console.log(user);
      this.setState({
        data: [...data, user],
        name: "",
        status: "",
        surname: "",
      });
    };

    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    const onEdit = ({ id, name, surname, status }, isSave) => {
      if (isSave) {
        let myData = this.state.data.map((person) =>
          person.id === this.state.active.id
            ? {
                ...person,
                name: this.state.name,
                surname: this.state.surname,
                status: this.state.status,
              }
            : person
        );
        this.setState({ active: null, data: myData });
      } else {
        this.setState({
          name: name,
          surname: surname,
          status: status,
          active: { id, name, surname, status },
        });
      }
    };
    return (
      <div>
        <h1>name: {name}</h1>
        <h1>surname:{surname}</h1>
        <h1>status:{status}</h1>
        <input
          onChange={handleInput}
          name="name"
          type="text"
          placeholder="Enter name"
          value={name}
        />
        <input
          onChange={handleInput}
          name="surname"
          type="text"
          placeholder="Enter surname"
          value={surname}
        />
        <input
          onChange={handleInput}
          name="status"
          type="text"
          placeholder="Enter status"
          value={status}
        />
        <button onClick={onAdd}>add</button>
        <hr />
        <select onChange={onSelect} name="" id="">
          <option value="id">id</option>
          <option value="name">name</option>
          <option value="surname">surname</option>
          <option value="status">status</option>
        </select>

        <input type="text" placeholder="Filter" onChange={onFilter} />
        <div>
          <hr />
          <table border="1" width={"100%"}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map(({ id, name, surname, status }, index) => (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={handleInput}
                          value={this.state.name}
                          type="text"
                          name="name"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {" "}
                      {this.state.active?.id === id ? (
                        <input
                          onChange={handleInput}
                          value={this.state.surname}
                          type="text"
                          name="surname"
                        />
                      ) : (
                        surname
                      )}
                    </td>
                    <td>
                      {" "}
                      {this.state.active?.id === id ? (
                        <input
                          onChange={handleInput}
                          value={this.state.status}
                          type="text"
                          name="status"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          onEdit(
                            { id, name, surname, status },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? "save" : "edit"}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => onDelete(id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th colSpan={6}>
                    <h1>No Data</h1>
                  </th>
                </tr>
              )}
            </tbody>
          </table>

          <hr />
        </div>
      </div>
    );
  }
}

export default State;
