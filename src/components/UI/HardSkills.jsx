import { Box, Typography, Grid, Paper, Chip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DataObjectIcon from '@mui/icons-material/DataObject';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SourceIcon from '@mui/icons-material/Source';
import ExtensionIcon from '@mui/icons-material/Extension';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const hardSkills = [
  { name: 'Git & GitHub', icon: <GitHubIcon color="primary" /> },
  { name: 'Bitbucket', icon: <SourceIcon color="primary" /> },
  { name: 'Linux & CLI', icon: <TerminalIcon color="primary" /> },
  { name: 'Databases', icon: <StorageIcon color="primary" /> },
  { name: 'Cloud Platforms', icon: <CloudIcon color="primary" /> },
  { name: 'Programming', icon: <CodeIcon color="primary" /> },
  { name: 'Debugging', icon: <BugReportIcon color="primary" /> },
  { name: 'Data Science', icon: <DataObjectIcon color="primary" /> },
  { name: 'VS Code & IDEs', icon: <ExtensionIcon color="primary" /> },
  { name: 'AI Tools', icon: <SmartToyIcon color="primary" /> },
];

const HardSkills = () => (
  <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 3 }}>
    <Grid container spacing={2} justifyContent="center">
      {hardSkills.map((skill) => (
        <Grid item key={skill.name}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ mb: 0.1 }}>{skill.icon}</Box>
            <Chip
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
          </Box>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default HardSkills;
