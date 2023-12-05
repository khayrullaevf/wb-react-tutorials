import { Component } from "react";

import { students } from "./mock";
import './State.css'

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:'Fazliddin',
      surname:'Khayrullaev',
      data:students,
    };
  }

  render() {
    console.log('re-render');
    const {data,name,surname} = this.state;
    const handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value.trim()
      })
      console.log(e.target.name);
    }
    const onFilter=(e)=>{
      console.log(e.target.value.trim());
      let res=students.filter((person)=>person.name.toLowerCase().includes(e.target.value.trim().toLowerCase()))
      this.setState({
        data:res
      })

    }
    return (
      <div>
        <h1>name: {name}</h1>
        <h1>surname:{surname}</h1>
        <input
          onChange={handleInput}
          name="name"
          type="text"
          placeholder="Enter name"
        />
        <input
          onChange={handleInput}
          name="surname"
          type="text"
          placeholder="Enter surname"
        />
        <input type="text" placeholder="Filter" onChange={onFilter} />
        <div className="students">
          <hr />
          {data.map(({ id, name, surname, status }, index) => (
            <div className="student" key={index}>
              <h1>
                {id}.{name}
              </h1>
              <h2>{surname}</h2>
              <h2>{status}</h2>
              <button>delete</button>
            </div>
          ))}
          <hr />
        </div>
      </div>
    );
  }
}

export default State;
