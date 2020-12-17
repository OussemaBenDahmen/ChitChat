import React, { useEffect, useState } from "react";
import ChitChatLogo from "../../assets/ChitChatLogo.png";
import "./style.css";
function Loader({ component = component, ...rest }) {
  const [isLoading, setIsLoading] = useState(true);
  const FakeLoader = () => {
    setTimeout(() => setIsLoading(false), 3000);
  };
  useEffect(() => {
    FakeLoader();
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <div className="LoaderContainer">
          <img className="LoaderLogo" src={ChitChatLogo} alt="Loader" />
        </div>
      ) : (
        component
      )}
    </>
  );
}

export default Loader;
