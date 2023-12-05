import { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:'Fazliddin',
      surname:'Khayrullaev'
    };
  }

  render() {
    console.log('re-render');
    const { count, name,surname } = this.state;
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };

    const handleName=(e)=>{
      this.setState({
        name:e.target.value.trim()
      })
    }
      const handleSurname = (e) => {
        this.setState({
          surname: e.target.value.trim(),
        });
      };
   const onSelect=(e)=>{
    console.log(e.target.value);

   }
   const onCheck=(e)=>{
    console.log(e.target.checked);

   }
    return (
      <div>
        <h1>name: {name}</h1>
        <h1>surname:{surname}</h1>
        <h1>State:{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <input onChange={handleName} type="text" placeholder="Enter name" />
        <input onChange={handleSurname} type="text" placeholder="Enter surname" />
        <select onChange={onSelect} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input onChange={onCheck} type="checkbox" name="" id="" />
      </div>
    );
  }
}

export default State;
