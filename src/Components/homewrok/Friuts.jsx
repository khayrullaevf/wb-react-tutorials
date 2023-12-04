import React from "react";
import Card from "./Card";
import './Fruits.css'



class Fruits extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Card
          title="Banaa"
          src="https://dobrazdrava.ru/wp-content/uploads/2023/06/banan.jpg"
        />
        <Card
          title="Orange"
          src="https://avatars.mds.yandex.net/i?id=49408bb2825591c6d06df97f8310be1e-4245511-images-thumbs&n=13"
        />
        <Card
          title="Apple"
          src="https://bioproducto.ru/upload/iblock/31a/31ada44ce85ffd218711086b8ea4dccb.jpg"
        />
      </div>
    );
  }
}

export default Fruits;
