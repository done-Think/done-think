import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const ink = theme.palette.primary.contrastText;
  const footerBg = isDark
    ? theme.palette.primary.dark
    : theme.palette.primary.main;

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: footerBg,
        color: ink,
        py: { xs: 1.8, md: 2.16 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="subtitle2" sx={{ color: ink }}>
            © <b>2026 doneThink</b>. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <SocialIcon
              href="mailto:contact@donethink.com"
              label="Email"
              icon={<EmailIcon fontSize="small" />}
              newTab={false}
            />
            <SocialIcon
              href="https://linkedin.com/company/donethink"
              label="LinkedIn"
              icon={<LinkedInIcon fontSize="small" />}
            />
            <SocialIcon
              href="https://instagram.com/done_think"
              label="Instagram"
              icon={<InstagramIcon fontSize="small" />}
            />
            <SocialIcon
              href="https://wa.me/3723205825"
              label="WhatsApp"
              icon={<WhatsAppIcon fontSize="small" />}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function SocialIcon({
  href,
  label,
  icon,
  newTab = true,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  newTab?: boolean;
}) {
  const theme = useTheme();
  const ink = theme.palette.primary.contrastText;

  return (
    <IconButton
      component="a"
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      aria-label={label}
      sx={{
        color: ink,
        bgcolor: alpha(ink, 0.1),
        width: 34,
        height: 34,
        "&:hover": {
          bgcolor: alpha(ink, 0.18),
          color: ink,
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
