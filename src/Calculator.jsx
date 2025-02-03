import { useState } from 'react';
import './Calculator.css';  // Import the CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput(''); // Clears the entire input
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1)); // Deletes the last character
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      {/* Header Section */}
      

      <div className="calculator">
        <h3 className="calculator-title">Calculator</h3>
        <div className="calculator-display-container">
          <input
            type="text"
            className="calculator-display"
            value={input}
            readOnly
          />
        </div>
        <div className="calculator-buttons">
          {/* Number Buttons and Decimal */}
          <div className="button-grid">
            {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='].map((val) => (
              <button
                key={val}
                className={`calculator-btn ${val === '=' ? 'equal' : ''}`}
                onClick={() =>
                  val === '=' ? handleEvaluate() : handleClick(val)
                }
              >
                {val}
              </button>
            ))}
          </div>

          {/* Operator Buttons */}
          <div className="button-column">
            {['+', '-', '*', '/'].map((operator) => (
              <button
                key={operator}
                className="calculator-btn operator"
                onClick={() => handleClick(operator)}
              >
                {operator}
              </button>
            ))}
            {/* Backspace Button */}
            <button className="calculator-btn backspace" onClick={handleBackspace}>
              C
            </button>
            {/* Clear Button */}
            <button className="calculator-btn clear" onClick={handleClear}>
              AC
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Calculator;
