import { Backdrop, SpeedDial as Dial, SpeedDialAction, SpeedDialIcon, useTheme } from '@mui/material';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PayPalIcon from '../../UI/Icons/PayPalIcon';

const linkedInUrl = "http://www.linkedin.com/in/andreabalasso97";
const instagramUrl = "https://www.instagram.com/extranceit";
const youtubeUrl = "https://www.youtube.com/@extranceIT";
const paypalUrl = "https://www.paypal.me/extrance";

const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn', onClick: () => window.open(linkedInUrl, "_blank") },
  { icon: <InstagramIcon />, name: 'Instagram', onClick: () => window.open(instagramUrl, "_blank") },
  { icon: <YouTubeIcon />, name: 'YouTube', onClick: () => window.open(youtubeUrl, "_blank") },
  { icon: <PayPalIcon />, name: 'PayPal', onClick: () => window.open(paypalUrl, "_blank") },
];

export default function SpeedDial() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <Dial
        ariaLabel="speed-dial"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon sx={{ color: theme.palette.mode === "dark" ? "black" : "white" }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={isMobile}
            onClick={() => { if (action.onClick) { action?.onClick() } handleClose(); }}
          />
        ))}
      </Dial>
    </>
  );
}