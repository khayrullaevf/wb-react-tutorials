import { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "React JS",
    };
  }

  render() {
    console.log('re-render');
    const { count, title } = this.state;
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };

    const handleInput=(e)=>{
      this.setState({
        title:e.target.value.trim()
      })
    }
   const onSelect=(e)=>{
    console.log(e.target.value);

   }
   const onCheck=(e)=>{
    console.log(e.target.checked);

   }
    return (
      <div>
        <h1>{title}</h1>
        <h1>State:{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <input onChange={handleInput} type="text" placeholder="Enter title" />
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
