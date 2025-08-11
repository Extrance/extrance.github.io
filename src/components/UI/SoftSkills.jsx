import React from "react";
import { Box, Typography, Chip, Grid, Paper } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupsIcon from "@mui/icons-material/Groups";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GavelIcon from "@mui/icons-material/Gavel";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const softSkills = [
  { name: "Problem Solving", icon: <EmojiObjectsIcon color="primary" /> },
  { name: "Teamwork", icon: <GroupsIcon color="success" /> },
  { name: "Critical Thinking", icon: <PsychologyIcon color="warning" /> },
  { name: "Communication", icon: <HandshakeIcon color="info" /> },
  { name: "Adaptability", icon: <TipsAndUpdatesIcon color="secondary" /> },
  { name: "Leadership", icon: <EmojiEventsIcon color="warning" /> },
  { name: "Project Management", icon: <QueryStatsIcon color="secondary" /> },
  { name: "Empathy", icon: <VolunteerActivismIcon color="error" /> },
  { name: "Ethics & Integrity", icon: <GavelIcon color="primary" /> },
  { name: "Analytical Skills", icon: <QueryStatsIcon color="success" /> },
];

const SoftSkills = () => (
  <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 3 }}>
    <Grid container spacing={2} justifyContent="center">
      {softSkills.map((skill) => (
        <Grid item key={skill.name}>
          <Chip
            
            icon={skill.icon}
            label={
              <span className="softskill-gradient-text" style={{ fontSize: "1rem", transition: "background 0.4s, color 0.4s" }}>
                {skill.name}
              </span>
            }
            variant="outlined"
            sx={{ fontSize: "1rem", p: 1, minWidth: 160,
              '& .softskill-gradient-text': {
                color: 'inherit',
                background: 'none',
                WebkitBackgroundClip: 'initial',
                WebkitTextFillColor: 'initial',
              },
              '&:hover .softskill-gradient-text': {
                background: 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)',
                WebkitBackgroundClip: 'text',
                fontWeight: 'bold',
                WebkitTextFillColor: 'transparent',
                color: 'inherit',
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default SoftSkills;
