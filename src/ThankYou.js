import ThankYouIcon from "./images/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
  return (
    <div className="ThankYou">
      <img src={ThankYouIcon} alt="Phone Icon" className="phone" />
      <div className="selected">You selected {rating} out of 5</div>
      <p className="thankYouText">Thank you!</p>
      <p className="thankYouParagraph">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
