import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, CardMedia, Container, IconButton, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";
import logo from "../assets/svgs/DoneThink.svg";

const footerLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const ink = theme.palette.primary.contrastText;
  const footerBg = isDark ? theme.palette.primary.dark : theme.palette.primary.main;
  const hoverBg = alpha(ink, isDark ? 0.16 : 0.08);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: footerBg,
        color: ink,
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Stack spacing={1.5}>
              <CardMedia
                component="img"
                image={logo}
                alt="DoneThink"
                sx={{
                  width: 178,
                  filter: "brightness(0)",
                }}
              />
              <Typography sx={{ color: ink, maxWidth: 420 }}>
                Product, design, and engineering teams for web, mobile, and API
                products.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", rowGap: 1 }}
            >
              {footerLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  sx={{
                    color: ink,
                    textTransform: "none",
                    fontWeight: 700,
                    minWidth: "auto",
                    px: 1,
                    "&:hover": {
                      bgcolor: hoverBg,
                      color: ink,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{
              pt: 3,
              borderTop: `1px solid ${alpha(ink, 0.22)}`,
            }}
          >
            <Typography variant="subtitle2" sx={{ color: ink }}>
              © 2026 DoneThink. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={1}>
              <SocialIcon
                href="mailto:contact@donethink.com"
                label="Email"
                icon={<EmailIcon fontSize="medium" />}
                newTab={false}
              />
              <SocialIcon
                href="https://linkedin.com/company/donethink"
                label="LinkedIn"
                icon={<LinkedInIcon fontSize="medium" />}
              />
              <SocialIcon
                href="https://instagram.com/done_think"
                label="Instagram"
                icon={<InstagramIcon fontSize="medium" />}
              />
              <SocialIcon
                href="https://wa.me/5535997330160"
                label="WhatsApp"
                icon={<WhatsAppIcon fontSize="medium" />}
              />
            </Stack>
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
