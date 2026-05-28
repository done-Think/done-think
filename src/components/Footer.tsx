import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#33fca7",
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 4 },
        mt: { xs: 10, md: 20 },
        minHeight: 90,
      }}
    >
      <Stack direction="row" maxWidth={1280} mx="auto">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            fontWeight={500}
            color="text.primary"
            textAlign="center"
          >
            © 2025 doneThink. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://linkedin.com/company/donethink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="medium" sx={{ color: "#000" }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://instagram.com/done_think"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="medium" sx={{ color: "#000" }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/5535997330160"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon fontSize="medium" sx={{ color: "#000" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
