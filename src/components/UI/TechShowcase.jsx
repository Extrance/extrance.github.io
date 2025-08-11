import { motion } from "framer-motion";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import ReactImg from '../../imgs/react-logo.png';
import NextImg from '../../imgs/nextjs-logo.png';
import AngularImg from '../../imgs/angular-logo.png';
import NodeJsImg from '../../imgs/nodejs-logo.png';
import JavaImg from '../../imgs/java-logo.png';
import PythonImg from '../../imgs/python-logo.png';

const technologies = [
  { name: "React", logo: ReactImg },
  { name: "Next.js", logo: NextImg },
  { name: "Angular", logo: AngularImg },
  { name: "Node.js", logo: NodeJsImg },
  { name: "Java", logo: JavaImg },
  { name: "Python", logo: PythonImg },
];

export default function TechShowcase() {
  return (
    <div style={{ padding: "2rem 2rem 0rem 2rem", textAlign: "center" }}>
      <Grid container spacing={3} justifyContent="center">
        {technologies.map((tech) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card
                elevation={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  style={{ marginBottom: "0.5rem", borderRadius: "8px" }}
                />
                <CardContent style={{ textAlign: "center", padding: 0 }}>
                  <Typography variant="h6" component="p">
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}