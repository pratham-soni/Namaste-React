import { useState } from "react";

const User = ({ name }) => {
  const [count1] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <h3>Location: Varanasi</h3>
      <h4>Contact: @Pratham</h4>
    </div>
  );
};

export default User;
