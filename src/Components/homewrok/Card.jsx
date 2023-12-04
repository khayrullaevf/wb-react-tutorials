
import React from "react";
import "./Fruits.css";


class Card extends React.Component{

    render(){
        const{src,title}=this.props
        return (
          <div className="card">
            <img
              src={src}
              alt={title}
            />
            <h3>{title}</h3>
          </div>
        );
    }
}

export default Card