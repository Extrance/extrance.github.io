import { Card, CardContent, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import * as React from "react";
import { useTranslation } from "react-i18next";

const CardComponent = ({
  title,
  warning,
  style
}) => {
  const { t } = useTranslation();

  return (
    <Card style={style}>
      <CardContent>
        <Typography variant="h5" component="div" display="flex" alignItems="center">
          <InfoIcon style={{marginRight: 5}}/>
          <>{t(title)}</>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {t(warning)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
