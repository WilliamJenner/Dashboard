import * as React from "react";

const FourOhFour: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Error 404: Page not found.</h1>
      <p>Have a JoJo gif instead!</p>
      <hr />
      <img src={'https://i.giphy.com/media/QyDHI3LJx8I9hA51Qs/giphy.webp'}/>
      </React.Fragment>
  );
};

export default FourOhFour;
