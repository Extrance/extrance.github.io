import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

/**
 * Confirm Modal Component
 *
 * Basic Modal to confirm an action
 *
 * @author Andrea Balasso
 */

const ConfirmModal = ({
  isOpen,
  handleCloseModal,
  handleSubmitModal,
  message,
}) => {
  const { t } = useTranslation();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("confirm")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t(message)}
          </Typography>
          <Stack direction="row" justifyContent="right" alignItems="right">
            <Button onClick={handleSubmitModal} autoFocus>
              {t("yes")}
            </Button>
            <Button color="noButton" onClick={handleCloseModal}>
              {t("no")}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
