"use client";

import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculation = (operator: string) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult("Unknown operation");
        break;
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg w-80">
      <h2 className="text-center text-lg font-bold mb-4">Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="mb-2 p-2 w-full border border-gray-300 rounded-md"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="mb-2 p-2 w-full border border-gray-300 rounded-md"
      />

      <div className="buttons grid grid-cols-4 gap-2 mt-4">
        <button
          className="bg-blue-500 text-white py-2 rounded-md"
          onClick={() => handleCalculation("+")}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white py-2 rounded-md"
          onClick={() => handleCalculation("-")}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white py-2 rounded-md"
          onClick={() => handleCalculation("*")}
        >
          *
        </button>
        <button
          className="bg-blue-500 text-white py-2 rounded-md"
          onClick={() => handleCalculation("/")}
        >
          /
        </button>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
