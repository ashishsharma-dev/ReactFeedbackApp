import { useState } from "react";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <>
      <ul className="ratingBox">
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 1}
            id="num1"
            value="1"
          />
          <label htmlFor="num">1</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 2}
            id="num2"
            value="2"
          />
          <label htmlFor="num">2</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 3}
            id="num3"
            value="3"
          />
          <label htmlFor="num">3</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 4}
            id="num4"
            value="4"
          />
          <label htmlFor="num">4</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 5}
            id="num5"
            value="5"
          />
          <label htmlFor="num">5</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 6}
            id="num6"
            value="6"
          />
          <label htmlFor="num">6</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 7}
            id="num7"
            value="7"
          />
          <label htmlFor="num">7</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 8}
            id="num8"
            value="8"
          />
          <label htmlFor="num">8</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 9}
            id="num9"
            value="9"
          />
          <label htmlFor="num">9</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === 10}
            id="num10"
            value="10"
          />
          <label htmlFor="num">10</label>
        </li>
      </ul>
    </>
  );
};

export default RatingSelect;
