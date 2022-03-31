import { useState } from "react";

const Homepage = () => {
  const [currentClickedTimes, setCurrentClickedTimes] = useState(0);

  return (
    <section className="section">
      <h1 className="title is-2 block">
        ❤️ Template
      </h1>
      <div className="is-medium block">
        <p className="block">Lorem ipsum.</p>
        <button
          className="button is-primary block"
          onClick={() => setCurrentClickedTimes(currentClickedTimes + 1)}
        >
          Click me!
        </button>
        <p>The button was clicked {currentClickedTimes} times.</p>
      </div>
    </section>
  );
};

export default Homepage;
