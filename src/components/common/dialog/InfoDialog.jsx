import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Info Dialog Component
 *
 * Basic Dialog to show information
 * The Portal component is used internally by the MUI Modal components. 
 *
 * @author Nikolas Sturaro
 */

export function InfoDialog({
  isOpen,
  handleClose,
  title,
  content,
  contentText,
  submitParams,
  onSubmit,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { minWidth: "300px", minHeight: content ? "200px" : "150px" , maxHeight: "100%"} }}
      fullScreen={fullScreen}
      maxWidth="xl"
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="info-dialog"
      scroll="paper"
    >
      <DialogTitle id="info-dialog">
        {title}{" "}
        {!onSubmit ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            color="noButton"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers={content ? true : false}>
        <DialogContentText>{contentText}</DialogContentText>
        {content}
      </DialogContent>
      {onSubmit && (
        <DialogActions>
          <Button onClick={() => onSubmit(submitParams)} autoFocus>
            {t("yes")}
          </Button>
          <Button color="noButton" onClick={handleClose}>
            {t("no")}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
