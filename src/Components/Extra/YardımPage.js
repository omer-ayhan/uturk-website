import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import MainStyle from "../MainStyle";
import AdvertiseBox from "./AdvertiseBox";

export default function YardımPage() {
  const [useStyles, , stylesMain] = MainStyle();
  const classes = useStyles();

  return (
    <Box className={classes.respMainWrap} px="80px" mb="40px" height="100%">
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ion-icon
              style={stylesMain.textTheme}
              name="caret-down"
              size="large"></ion-icon>
          }
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant="h6" component="h6">
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ion-icon
              style={stylesMain.textTheme}
              name="caret-down"
              size="large"></ion-icon>
          }
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography variant="h6" component="h6">
            Accordion 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ion-icon
              style={stylesMain.textTheme}
              name="caret-down"
              size="large"></ion-icon>
          }
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography variant="h6" component="h6">
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <AdvertiseBox />
      <AdvertiseBox />
    </Box>
  );
}
