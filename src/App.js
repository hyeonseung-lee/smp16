import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [userId, setUser] = useState();
  const setUserId = (id) => {
    setUser(id);
  };
  return (
    <>
      <AppRouter userId={userId} setUserId={setUserId} />
    </>
  );
}

export default App;
