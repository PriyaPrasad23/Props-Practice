import React from "react";
import Card from "./card";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading ">My Contacts</h1>
      <Card
        name="Priya"
        img="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/20/e717a65d7c4ce25a81efaa0029ba24ea1666276428622396_original.jpg?impolicy=abp_cdn&imwidth=650"
        tel="9113905208"
        email="ppiua@sk.com"
      />

      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />

      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />

      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
