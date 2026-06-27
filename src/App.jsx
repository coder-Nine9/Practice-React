import "./App.css";
import { useState } from "react";
import Result from "./Result";
export default function App() {
  const [inputsValue, setInputValue] = useState({
    name: "",
    phoneNumber: "",
    age: null,
    employee: false,
    salary: "less than 5005",
  });
  const [buttonState, setButtonState] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const options = [
    { id: 1, salary: "less than 5005" },
    { id: 2, salary: "between 5005 and 20005" },
    { id: 3, salary: "above 20005" },
  ];

  const optionsList = options.map((option) => {
    return (
      <option key={option.id} value={option.salary}>
        {option.salary}
      </option>
    );
  });

  function enabelButton() {
    const canSubmit = Object.values(inputsValue).every((value) => value !== "");
    if (canSubmit) {
      setButtonState(false);
    }
  }

  function checkForm() {
    setShowResult(true);
  }
  return (
    <>
      {showResult && (
        <Result age={inputsValue.age} phoneNumber={inputsValue.phoneNumber} />
      )}

      <div className={"container"}>
        <header>
          <h1 style={{ paddingBottom: "10px" }}>Requesting a Loan</h1>
          <hr />
        </header>
        <main>
          <form
            className={"containerForm"}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => {
                  setInputValue((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                  enabelButton();
                }}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                onChange={(e) => {
                  setInputValue((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                  enabelButton();
                }}
              />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input
                min={"0"}
                type="number"
                id="age"
                onChange={(e) => {
                  let convertTypeAge = Number(e.target.value);
                  setInputValue((prev) => ({
                    ...prev,
                    age: !isNaN(convertTypeAge) ? convertTypeAge : null,
                  }));
                  enabelButton();
                }}
              />
            </div>

            <div>
              <label htmlFor="employee">Are you an employee?</label>
              <input
                type="checkbox"
                checked={inputsValue.employee}
                id="employee"
                onChange={(e) => {
                  setInputValue((prev) => ({
                    ...prev,
                    employee: e.target.checked,
                  }));
                  enabelButton();
                }}
              />
            </div>

            <div>
              <label htmlFor="salary">Salary</label>
              <select
                id="salary"
                onChange={(e) => {
                  setInputValue((prev) => ({
                    ...prev,
                    salary: e.target.value,
                  }));
                  enabelButton();
                }}
              >
                {optionsList}
              </select>
            </div>

            <button disabled={buttonState} onClick={checkForm}>
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
