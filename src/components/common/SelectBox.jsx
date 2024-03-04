import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { forwardRef } from "react";

const SelectBox = forwardRef((props, ref) => {
  const itemsList = props.list.map((item) => (
    <MenuItem key={item.id} value={item.value}>
      {item.label}
    </MenuItem>
  ));

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: props.minWidth }} required>
      <InputLabel id="select-box-label">{props.label}</InputLabel>
      <Select
        labelId="select-box-label"
        id="select-box"
        inputRef={ref}
        label={props.label}
        onChange={ (event) => ref = event.target.value}
        defaultValue={props.list[0].value}
      >
        {props.noneVisible && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {itemsList}
      </Select>
    </FormControl>
  );
});

export default SelectBox;
