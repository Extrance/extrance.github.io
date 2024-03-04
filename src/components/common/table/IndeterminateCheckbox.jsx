import { Checkbox } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <Fragment>
      <Checkbox ref={resolvedRef} {...rest} />
    </Fragment>
  );
});

export default IndeterminateCheckbox;
