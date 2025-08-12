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
import "./WhoAmI.css";
import TrentoLogo from '../../imgs/trento.png';
import TronLogo from '../../imgs/tron.png';
import JedlikLogo from '../../imgs/jedlik.png';

const EducationAccordion = () => {
  const { t } = useTranslation();
  return (
    <Accordion
      disableGutters
      style={{ marginBottom: "100px", marginTop: "30px", borderRadius: "6px" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {t("wai_cv_studies").toUpperCase()}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={TrentoLogo} width={24} alt="Trento Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                2020-2023
              </Typography>
              <Typography variant="body1">
                Università di Trento
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Laurea Magistrale in Informatica
              </Typography>
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={TrentoLogo} width={24} alt="Trento Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                2016-2020
              </Typography>
              <Typography variant="body1">
                Università di Trento
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Laurea Triennale in Informatica
              </Typography>
            </Box>
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={TronLogo} width={24} alt="Tron Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                2011-2016
              </Typography>
              <Typography variant="body1">
                Liceo Scientifico N. Tron, Schio (VI)
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                Diploma
              </Typography>
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eee', borderRadius: '8px' }}>
              <img src={JedlikLogo} width={24} alt="Jedlik Logo" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={700} className="whoami-gradient-date">
                2015-2016
              </Typography>
              <Typography variant="body1">
                Jedlik Ányos Gépipari és Informatikai Technikum, Győr (HU)
              </Typography>
              <Typography variant="subtitle2" className="whoami-gradient-text">
                exchange program
              </Typography>
            </Box>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default EducationAccordion;
