import React from "react";

class ComponentA extends React.Component {
  render() {

   const {data}=this.props;
   const{id,name,status}=data;
    return (
      <div>
        <h1>{id}.{name} </h1>
        <h3>{status}</h3>

      </div>
    );
  }
}

export default ComponentA;


