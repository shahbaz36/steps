import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, changeStep] = useState(1);
  const message = messages[step - 1];

  function previous() {
    changeStep((e) => {
      if (e === 2 || e === 3) return e - 1;
      return e;
    });
  }

  function next() {
    changeStep((e) => {
      if (e === 1 || e === 2) return e + 1;
      return e;
    });
  }

  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((e) => !e)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {message}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previous}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
