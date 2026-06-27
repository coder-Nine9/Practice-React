import "./App.css";
import { useState } from "react";
export default function App() {
  const [options, setOptions] = useState([
    { id: 1, salary: "less than 5005" },
    { id: 2, salary: "between 5005 and 20005" },
    { id: 3, salary: "above 20005" },
  ]);

  const optionsList = options.map((option) => {
    return <option>{option.salary}</option>;
  });
  return (
    <div className={"container"}>
      <header>
        <h1 style={{ paddingBottom: "10px" }}>Requesting a Loan</h1>
        <hr />
      </header>
      <main>
        <form className={"containerForm"}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
          </div>

          <div>
            <label htmlFor="employee">Are you an employee?</label>
            <input type="checkbox" id="employee" />
          </div>

          <div>
            <label htmlFor="salary">Salary</label>
            <select id="salary">{optionsList}</select>
          </div>

          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}
