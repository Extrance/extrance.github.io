import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

/**
 * Editable cell renderer Component
 *
 * @author Nikolas Sturaro
 */

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed externall, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <InputStyle value={value} onChange={onChange} onBlur={onBlur} />;
};

EditableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired,
  }),
  row: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }),
  column: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  updateMyData: PropTypes.func.isRequired,
};

export default EditableCell;

const InputStyle = styled.input({
  padding: 0,
  margin: 0,
  border: 0,
  background: "transparent",
});
