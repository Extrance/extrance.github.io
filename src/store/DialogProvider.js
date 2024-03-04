import { createContext, useCallback, useContext, useState } from "react";
import { InfoDialog } from "../components/common/dialog/InfoDialog";

const DialogContext = createContext({
  openDialog: (dialogObject) => {},
  closeDialog: () => {},
});

const DialogProvider = (props) => {
  const [dialog, setDialog] = useState({ isOpen: false });

  const openDialog = useCallback(
    (dialogObject) => {
      setDialog({ ...dialogObject, isOpen: true });
    },
    [setDialog]
  );

  const closeDialog = useCallback(() => {
    setDialog((dialog) => {
      if (dialog?.handleClose) {
        dialog.handleClose();
      }
      return { ...dialog, isOpen: false };
    });
  }, [setDialog]);

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }} {...props}>
      {props.children}
      <InfoDialog {...dialog} handleClose={closeDialog} />
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    console.error("useDialog must be used within a DialogProvider");
  }

  return context;
};

export { DialogProvider, useDialog };
