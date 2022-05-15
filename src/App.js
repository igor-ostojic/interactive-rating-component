import { useEffect, useState } from "react";

// components
import ThankYou from "./ThankYou";

// assets
import star from "./images/icon-star.svg";

function App() {
  const [rating, setRating] = useState();
  const [showComponent, setShowComponent] = useState(null);

  const handleButton = (e) => {
    setRating(e.target.innerText);
    console.log(e.target);
    e.target.classList.add("selected-button");
  };

  return (
    <main className="Main">
      {!showComponent && (
        <div className="App">
          <div className="first-container">
            <div className="star-container">
              <img src={star} alt="Star Icon" className="star" />
            </div>
            <p className="big-text">How did we do?</p>
            <p className="small-text">
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>
            <div className="button-container">
              <button className="rating-button" onClick={(e) => handleButton(e)}>
                1
              </button>
              <button className="rating-button" onClick={(e) => handleButton(e)}>
                2
              </button>
              <button className="rating-button" onClick={(e) => handleButton(e)}>
                3
              </button>
              <button className="rating-button" onClick={(e) => handleButton(e)}>
                4
              </button>
              <button className="rating-button" onClick={(e) => handleButton(e)}>
                5
              </button>
            </div>
            <button className="submit" onClick={() => setShowComponent(true)}>
              Submit
            </button>
          </div>
        </div>
      )}

      {showComponent && <ThankYou rating={rating} />}
    </main>
  );
}

export default App;
