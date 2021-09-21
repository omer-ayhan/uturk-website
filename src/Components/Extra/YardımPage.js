import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import MainStyle from "../MainStyle";
import AdvertiseBox from "./AdvertiseBox";
import { useTranslation } from "react-i18next";

export default function YardımPage() {
  const [useStyles, , stylesMain] = MainStyle();
  const { t } = useTranslation();
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
          <Typography aria-label="yardım başlık" variant="h6" component="h6">
            {t("faq.0.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography aria-label="yardım paragraf">
            {t("faq.0.text")}
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
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography aria-label="yardım başlık" variant="h6" component="h6">
            {t("faq.0.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography aria-label="yardım paragraf">
            {t("faq.0.text")}
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
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography aria-label="yardım başlık" variant="h6" component="h6">
            {t("faq.0.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography aria-label="yardım paragraf">
            {t("faq.0.text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <AdvertiseBox />
      <AdvertiseBox />
    </Box>
  );
}
