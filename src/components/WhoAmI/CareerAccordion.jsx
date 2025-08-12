import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import BFTLogo from '../../imgs/bft.png';
import ReplyLogo from '../../imgs/reply.png';
import ComuneLogo from '../../imgs/comune.png';
import "./WhoAmI.css";

const CareerAccordion = () => {
  const { t } = useTranslation();
  return (
    <Accordion
      disableGutters
      style={{ marginTop: "30px", borderRadius: "6px" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {t("wai_cv_work").toUpperCase()}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={ReplyLogo} width={24} alt="Reply Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                giu 2023 - oggi
              </Typography>
              <Typography variant="body1">
                Technology Reply SpA
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Junior Consultant
              </Typography>
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={BFTLogo} width={24} alt="BFT Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                lug 2019 - dic 2019
              </Typography>
              <Typography variant="body1">
                BFT SpA
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Analyst Programmer (Internship)
              </Typography>
            </Box>
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={ComuneLogo} width={24} alt="Comune Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                giu 2024 - oggi
              </Typography>
              <Typography variant="body1">
                Comune di San Vito di Leguzzano (VI)
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Consigliere comunale
              </Typography>
            </Box>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default CareerAccordion;
