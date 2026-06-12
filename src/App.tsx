import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { alpha, useTheme, type PaletteMode } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/autoplay";

import alyssonSignature from "./assets/alyssu-signature.png";
import alyssonPhoto from "./assets/imgalys.jpeg";
import amold from "./assets/amold.png";
import bblend from "./assets/bblend.png";
import dottas from "./assets/dottas.png";
import goAhead from "./assets/go-ahead.png";
import idea from "./assets/idea.png";
import ivy from "./assets/ivy.png";
import lanlink from "./assets/lanlink.png";
import maxwellPhoto from "./assets/imgpnd.jpeg";
import maxwellSignature from "./assets/signature.png";
import mobiPlus from "./assets/mobi-plus.png";
import murad from "./assets/murad.png";
import novaFutura from "./assets/nova-futura.png";
import pdsolucoes from "./assets/pdsolucoes.jpg";
import powerGo from "./assets/power-go.png";
import prime from "./assets/prime.webp";
import salesSense from "./assets/sales-sense.jpg";
import sbLabs from "./assets/sb-labs.svg";
import semParar from "./assets/sem-parar.png";
import siglo from "./assets/siglo.png";
import tazzij from "./assets/tazzi.jpg";
import topsystem from "./assets/topsystem.jpeg";
import traco from "./assets/traco.svg";
import video from "./assets/videos/233043.mp4";
import whirlpool from "./assets/whirlpool.png";
import yep from "./assets/yep.jpg";
import yogha from "./assets/yogha.png";
import logo from "./assets/svgs/DoneThink.svg";
import Footer from "./components/Footer";

function useBrand() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return {
    green: theme.palette.primary.main,
    greenDark: theme.palette.primary.dark,
    greenHover: isDark ? "#5dffc0" : "#25e596",
    onGreen: theme.palette.primary.contrastText,
    ink: theme.palette.text.primary,
    muted: theme.palette.text.secondary,
    line: alpha(theme.palette.primary.main, isDark ? 0.5 : 1),
    neutralLine: alpha(theme.palette.text.primary, isDark ? 0.12 : 0.14),
    separator:
      `linear-gradient(90deg, transparent, ${alpha(
        theme.palette.primary.main,
        isDark ? 0.26 : 0.34
      )} 18%, ${alpha(theme.palette.primary.dark, isDark ? 0.9 : 0.72)} 50%, ${alpha(
        theme.palette.primary.main,
        isDark ? 0.26 : 0.34
      )} 82%, transparent)`,
    soft: theme.palette.background.paper,
    page: theme.palette.background.default,
    surface: isDark ? "#0b110d" : "#ffffff",
    surfaceSoft: isDark ? alpha("#ffffff", 0.06) : "#eafff6",
    appBarBg: isDark
      ? alpha(theme.palette.background.default, 0.88)
      : alpha("#ffffff", 0.92),
    appBarTransparent: isDark
      ? alpha(theme.palette.background.default, 0)
      : alpha("#ffffff", 0),
    heroBackground: isDark
      ? "radial-gradient(circle at 80% 18%, rgba(51, 252, 167, 0.16), transparent 30%), linear-gradient(180deg, #050805 0%, #101813 100%)"
      : "radial-gradient(circle at 80% 18%, rgba(51, 252, 167, 0.18), transparent 28%), linear-gradient(180deg, #ffffff 0%, #f7faf8 100%)",
    glow: alpha(theme.palette.primary.main, isDark ? 0.18 : 0.2),
    shadow: isDark
      ? "0 30px 80px rgba(0, 0, 0, 0.45)"
      : "0 30px 80px rgba(7, 140, 102, 0.14)",
    logoFilter: isDark ? "invert(1) brightness(1.4)" : "none",
    mutedLogoFilter: isDark
      ? "grayscale(1) invert(1) brightness(1.4)"
      : "grayscale(1)",
  };
}

function separatorSx(position: "top" | "bottom", brand: ReturnType<typeof useBrand>) {
  const edge = position === "top" ? "top" : "bottom";

  return {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    [edge]: 0,
    height: "1px",
    background: brand.separator,
    boxShadow: `0 0 18px ${alpha(brand.green, 0.24)}`,
    pointerEvents: "none",
  };
}

function electricCardSx(
  brand: ReturnType<typeof useBrand>,
  options: { soft?: boolean } = {}
) {
  return {
    "--electric-angle": "0deg",
    border: `1px solid ${brand.neutralLine}`,
    backgroundColor: options.soft ? brand.soft : brand.surface,
    boxShadow: `0 0 18px ${alpha(brand.green, 0.06)}`,
    transition:
      "transform 0.24s ease, box-shadow 0.24s ease, filter 0.24s ease",
    animation: "electric-glow 4.8s ease-in-out infinite",
    "@property --electric-angle": {
      syntax: '"<angle>"',
      inherits: false,
      initialValue: "0deg",
    },
    "@keyframes electric-glow": {
      "0%, 100%": {
        boxShadow: `0 0 16px ${alpha(brand.green, 0.05)}`,
      },
      "50%": {
        boxShadow: `0 0 24px ${alpha(brand.green, 0.11)}`,
      },
    },
  };
}

function electricCardHoverSx(brand: ReturnType<typeof useBrand>) {
  return {
    boxShadow: `0 0 28px ${alpha(brand.green, 0.22)}`,
    filter: "saturate(1.08)",
  };
}

const startProjectWhatsappUrl =
  "https://wa.me/5535997330160?text=Ol%C3%A1%2C%20quero%20iniciar%20um%20projeto%20com%20a%20DoneThink.";

const clientLogos = [
  amold,
  bblend,
  dottas,
  goAhead,
  idea,
  ivy,
  lanlink,
  mobiPlus,
  murad,
  novaFutura,
  pdsolucoes,
  powerGo,
  prime,
  salesSense,
  sbLabs,
  semParar,
  siglo,
  tazzij,
  topsystem,
  traco,
  whirlpool,
  yep,
  yogha,
];

const sections = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
];

const trustItems = [
  { value: "20+", label: "clients and partners" },
  { value: "Web", label: "mobile and API products" },
  { value: "Product", label: "design and engineering" },
];

const services = [
  {
    icon: <AutoAwesomeIcon />,
    title: "Product Discovery",
    description:
      "Shape ideas into clear product goals, priorities, and practical delivery paths.",
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Design",
    description:
      "Design interfaces that feel simple, useful, and ready for real users.",
  },
  {
    icon: <DevicesIcon />,
    title: "Web Apps",
    description:
      "Build fast, scalable web platforms with polished user experiences.",
  },
  {
    icon: <MobileFriendlyIcon />,
    title: "Mobile Apps",
    description:
      "Create mobile experiences that stay consistent across devices and teams.",
  },
  {
    icon: <ApiIcon />,
    title: "APIs & Integrations",
    description:
      "Connect products, services, data, and workflows through reliable APIs.",
  },
  {
    icon: <CloudQueueIcon />,
    title: "DevOps & Scaling",
    description:
      "Prepare infrastructure, delivery pipelines, and systems for growth.",
  },
];

const processSteps = [
  {
    title: "Understand",
    text: "We learn the business, product, users, and technical context first.",
  },
  {
    title: "Design",
    text: "We turn uncertainty into flows, interfaces, architecture, and priorities.",
  },
  {
    title: "Build",
    text: "We ship iteratively with product, frontend, backend, mobile, and DevOps.",
  },
  {
    title: "Iterate",
    text: "Each cycle adapts the team's focus to what matters most that week.",
  },
  {
    title: "Scale",
    text: "We refine the product foundation so it can keep evolving after launch.",
  },
];

const founders = [
  {
    name: "Maxwell Siqueira",
    role: "CEO",
    image: maxwellPhoto,
    imagePosition: "50% 24%",
    signature: maxwellSignature,
    bio: "Technology leader and software developer with 14+ years of experience building digital products, teams, and scalable solutions.",
    modalBio: [
      "CEO of doneThink and software engineer with over 14 years of experience building digital products.",
      "Specialized in software architecture, full-stack development, and scalable solutions, I bridge technology and business to create systems, automation, and products that deliver real results for companies.",
      "Passionate about technology, innovation, and continuous learning, I believe in the power of technology to simplify processes, drive growth, and turn ideas into impactful results.",
    ],
  },
  {
    name: "Alysson Sene",
    role: "Co-founder",
    image: alyssonPhoto,
    imagePosition: "50% 22%",
    signature: alyssonSignature,
    bio: "Software developer focused on product quality, interface detail, collaboration, and elegant engineering practices.",
    modalBio: [
      "Co-founder of doneThink and software developer with solid experience in creating digital solutions focused on enhancing people's experience. Since 2018, he has worked in the technology field, with a strong presence in agile, dynamic, and collaborative environments.",
      "At 30 years old, he combines attention to detail, aesthetic sense, and strategic vision with best development practices to deliver functional, scalable, and well-designed products.",
      "He is ambitious to grow toward technical leadership positions, contributing to the development of new talents and helping build scalable, elegant, and purposeful solutions.",
    ],
  },
];

function App({
  mode,
  onToggleMode,
}: {
  mode: PaletteMode;
  onToggleMode: () => void;
}) {
  const brand = useBrand();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<
    (typeof founders)[number] | null
  >(null);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const markerPosition = window.scrollY + window.innerHeight * 0.35;
      const sectionPositions = sections
        .map((section) => {
          const element = document.getElementById(section.id);

          return element ? { id: section.id, offsetTop: element.offsetTop } : null;
        })
        .filter((section): section is { id: string; offsetTop: number } =>
          Boolean(section)
        )
        .sort((a, b) => a.offsetTop - b.offsetTop);

      const currentSection = sectionPositions.reduce(
        (current, section) =>
          section.offsetTop <= markerPosition ? section.id : current,
        "home"
      );

      setIsScrolled(window.scrollY > 8);
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: brand.surface }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          position: "fixed",
          bgcolor:
            isScrolled || isMobileMenuOpen
              ? brand.appBarBg
              : brand.appBarTransparent,
          borderBottom: "1px solid transparent",
          backdropFilter: isScrolled || isMobileMenuOpen ? "blur(18px)" : "none",
          transition: "all 0.25s ease",
          "&::after":
            isScrolled || isMobileMenuOpen
              ? separatorSx("bottom", brand)
              : {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "1px",
                  background: "transparent",
                  pointerEvents: "none",
                },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ minHeight: { xs: 72, md: 84 } }}
          >
            <ButtonBase
              onClick={handleLogoClick}
              sx={{
                width: { xs: 148, sm: 172, md: 188 },
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                image={logo}
                alt="DoneThink"
                sx={{ filter: brand.logoFilter }}
              />
            </ButtonBase>

            <Stack
              direction="row"
              spacing={{ md: 3, lg: 4 }}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {sections.map((section) => (
                <Button
                  key={section.id}
                  disableRipple
                  sx={{
                    color: brand.ink,
                    minWidth: "auto",
                    px: 0,
                    py: 0.5,
                    position: "relative",
                    textTransform: "none",
                    fontWeight: 600,
                    backgroundColor: "transparent",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -2,
                      height: 2,
                      bgcolor:
                        activeSection === section.id
                          ? brand.green
                          : "transparent",
                      transition: "background-color 0.2s",
                    },
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                  onClick={() => handleScrollTo(section.id)}
                >
                  {section.label}
                </Button>
              ))}

              <IconButton
                aria-label={
                  mode === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                onClick={onToggleMode}
                sx={{
                  color: brand.ink,
                  bgcolor: brand.surfaceSoft,
                  width: 40,
                  height: 40,
                  "&:hover": {
                    bgcolor: brand.glow,
                  },
                }}
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                href={startProjectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: brand.green,
                  color: brand.onGreen,
                  borderRadius: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "none",
                  px: 2.5,
                  "&:hover": {
                    bgcolor: brand.greenHover,
                    boxShadow: "none",
                  },
                }}
              >
                Start a project
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={0.75}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                aria-label={
                  mode === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                onClick={onToggleMode}
                sx={{
                  color: brand.ink,
                  bgcolor: brand.surfaceSoft,
                  width: 40,
                  height: 40,
                }}
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <IconButton
                aria-label={
                  isMobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                sx={{
                  color: brand.ink,
                  width: 40,
                  height: 40,
                }}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </Stack>

          {isMobileMenuOpen ? (
            <Stack
              spacing={0.5}
              sx={{
                display: { xs: "flex", md: "none" },
                pb: 2,
              }}
            >
              {sections.map((section) => (
                <Button
                  key={section.id}
                  sx={{
                    justifyContent: "flex-start",
                    color: brand.ink,
                    bgcolor:
                      activeSection === section.id ? brand.surfaceSoft : "transparent",
                    borderRadius: 1.5,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                  onClick={() => handleScrollTo(section.id)}
                >
                  {section.label}
                </Button>
              ))}
              <Button
                variant="contained"
                href={startProjectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 1,
                  bgcolor: brand.green,
                  color: brand.onGreen,
                  borderRadius: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "none",
                }}
              >
                Start a project
              </Button>
            </Stack>
          ) : null}
        </Container>
      </AppBar>

      <Box component="main">
        <Box
          id="home"
          sx={{
            minHeight: { xs: "auto", md: "100svh" },
            pt: { xs: 13, md: 16 },
            pb: { xs: 9, md: 12 },
            display: "flex",
            alignItems: "center",
            background: brand.heroBackground,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3.5} alignItems="flex-start">
                  <Chip
                    icon={<RocketLaunchIcon />}
                    label="Software teams for ambitious products"
                    sx={{
                      bgcolor: brand.surfaceSoft,
                      color: brand.greenDark,
                      borderRadius: 1.5,
                      fontWeight: 700,
                      "& .MuiChip-icon": { color: brand.greenDark },
                    }}
                  />

                  <Typography
                    component="h1"
                    sx={{
                      color: brand.ink,
                      fontSize: {
                        xs: "2.0625rem",
                        sm: "3.0625rem",
                        md: "4.3125rem",
                      },
                      lineHeight: 0.95,
                      fontWeight: 800,
                      maxWidth: 680,
                    }}
                  >
                    You didn't even think – we've already got the solution.
                  </Typography>

                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: { xs: "1.08rem", md: "1.25rem" },
                      lineHeight: 1.7,
                      maxWidth: 560,
                    }}
                  >
                    Product, design, and engineering teams for web, mobile, and
                    API-based products. Clear strategy, focused execution, and
                    software that keeps moving.
                  </Typography>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => handleScrollTo("contact")}
                      sx={{
                        bgcolor: brand.green,
                        color: brand.onGreen,
                        minHeight: 52,
                        borderRadius: 1.5,
                        px: 3,
                        textTransform: "none",
                        fontWeight: 800,
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: brand.greenHover,
                          boxShadow: "none",
                        },
                      }}
                    >
                      Start a project
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleScrollTo("clients")}
                      sx={{
                        color: brand.ink,
                        borderColor: brand.green,
                        minHeight: 52,
                        borderRadius: 1.5,
                        px: 3,
                        textTransform: "none",
                        fontWeight: 800,
                        "&:hover": {
                          borderColor: brand.green,
                          bgcolor: brand.surfaceSoft,
                        },
                      }}
                    >
                      See clients
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    border: "1px solid rgba(51, 252, 167, 0.65)",
                    bgcolor: brand.surface,
                    p: { xs: 1.5, sm: 2 },
                    boxShadow: brand.shadow,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: "auto -20% -30% 30%",
                      height: 220,
                      bgcolor: brand.glow,
                      filter: "blur(48px)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: brand.surface,
                      aspectRatio: { xs: "4 / 3", sm: "16 / 11" },
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                        backgroundColor: brand.surface,
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            position: "relative",
            bgcolor: brand.surface,
            py: { xs: 3, md: 4 },
            "&::before": separatorSx("top", brand),
            "&::after": separatorSx("bottom", brand),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              {trustItems.map((item) => (
                <Grid key={item.value} size={{ xs: 12, sm: 4 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Typography
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 800,
                        color: brand.ink,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography sx={{ color: brand.muted, lineHeight: 1.35 }}>
                      {item.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          id="services"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: brand.surface,
          }}
        >
          <Container maxWidth="lg">
            <SectionHeading
              eyebrow="What we do"
              title="Focused teams for the full product lifecycle."
              description="We combine product thinking, design craft, and engineering execution so each stage of the work stays connected."
            />

            <Grid container spacing={2.5} sx={{ mt: { xs: 5, md: 7 } }}>
              {services.map((service) => (
                <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      ...electricCardSx(brand),
                      height: "100%",
                      borderRadius: 2,
                      p: { xs: 2.5, md: 3 },
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": {
                          ...electricCardHoverSx(brand),
                          transform: "translateY(-3px)",
                        },
                      },
                    }}
                  >
                    <Stack spacing={2} sx={{ minWidth: 0 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 1.5,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: brand.surfaceSoft,
                          color: brand.greenDark,
                          animation: "service-icon-float 3.4s ease-in-out infinite",
                          boxShadow: `0 0 18px ${alpha(brand.green, 0.08)}`,
                          "@keyframes service-icon-float": {
                            "0%, 100%": {
                              transform: "translateY(0) rotate(0deg)",
                              boxShadow: `0 0 18px ${alpha(brand.green, 0.08)}`,
                            },
                            "50%": {
                              transform: "translateY(-4px) rotate(2deg)",
                              boxShadow: `0 0 24px ${alpha(brand.green, 0.18)}`,
                            },
                          },
                          "& .MuiSvgIcon-root": {
                            animation:
                              "service-icon-pulse 2.8s ease-in-out infinite",
                          },
                          "@keyframes service-icon-pulse": {
                            "0%, 100%": {
                              transform: "scale(1)",
                              opacity: 0.9,
                            },
                            "50%": {
                              transform: "scale(1.08)",
                              opacity: 1,
                            },
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            animation: "none",
                            "& .MuiSvgIcon-root": {
                              animation: "none",
                            },
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        component="h3"
                        sx={{
                          color: brand.ink,
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          whiteSpace: "normal",
                          wordBreak: "keep-all",
                          overflowWrap: "normal",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: brand.muted,
                          lineHeight: 1.65,
                          wordBreak: "normal",
                          overflowWrap: "break-word",
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          id="process"
          sx={{
            position: "relative",
            py: { xs: 10, md: 15 },
            bgcolor: brand.soft,
            "&::before": separatorSx("top", brand),
            "&::after": separatorSx("bottom", brand),
          }}
        >
          <Container maxWidth="lg">
            <SectionHeading
              eyebrow="How we work"
              title="A flexible model that adapts week by week."
              description="The team focus can shift as the product evolves: design-heavy one week, backend-heavy the next, always aligned with the highest-value work."
            />

            <Grid container spacing={2.5} sx={{ mt: { xs: 5, md: 7 } }}>
              {processSteps.map((step, index) => (
                <Grid key={step.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
                  <Stack
                    spacing={2}
                    sx={{
                      ...electricCardSx(brand),
                      height: "100%",
                      p: { xs: 2.5, md: 2.75 },
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: brand.green,
                        color: brand.onGreen,
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{ color: brand.ink, fontWeight: 800 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: brand.muted, lineHeight: 1.6 }}>
                      {step.text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          id="about"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: brand.surface,
          }}
        >
          <Container maxWidth="lg">
            <SectionHeading
              eyebrow="About DoneThink"
              title="Small enough to stay close. Experienced enough to carry the work."
              description="DoneThink is led by builders who care about product clarity, engineering quality, and practical execution from the first conversation to launch."
            />

            <Grid container spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
              {founders.map((founder) => (
                <Grid key={founder.name} size={{ xs: 12, md: 6 }}>
                  <Card
                    elevation={0}
                    sx={{
                      ...electricCardSx(brand),
                      height: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": {
                          ...electricCardHoverSx(brand),
                          transform: "translateY(-2px)",
                          boxShadow: brand.shadow,
                        },
                      },
                    }}
                  >
                    <CardActionArea
                      onClick={() => setSelectedFounder(founder)}
                      aria-label={`Open ${founder.name} details`}
                      sx={{
                        height: "100%",
                        p: { xs: 2.5, md: 3 },
                        alignItems: "stretch",
                      }}
                    >
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={3}
                        alignItems={{ xs: "flex-start", sm: "center" }}
                      >
                        <Box
                          sx={{
                            width: 148,
                            height: 148,
                            borderRadius: "50%",
                            border: `4px solid ${brand.surfaceSoft}`,
                            overflow: "hidden",
                            flexShrink: 0,
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={founder.image}
                            alt={founder.name}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: founder.imagePosition,
                              transform: "scale(1.18)",
                            }}
                          />
                        </Box>
                        <Stack spacing={1.5} sx={{ flex: 1 }}>
                          <Box>
                            <Typography
                              component="h3"
                              sx={{
                                color: brand.ink,
                                fontSize: "1.35rem",
                                fontWeight: 800,
                              }}
                            >
                              {founder.name}
                            </Typography>
                            <Typography sx={{ color: brand.greenDark }}>
                              {founder.role}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{ color: brand.muted, lineHeight: 1.7 }}
                          >
                            {founder.bio}
                          </Typography>
                          <CardMedia
                            component="img"
                            image={founder.signature}
                            alt={`${founder.name} signature`}
                            sx={{
                              width: founder.name.includes("Alysson")
                                ? 138
                                : 190,
                              maxWidth: "100%",
                              objectFit: "contain",
                              filter: brand.mutedLogoFilter,
                              opacity: 0.75,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          id="clients"
          sx={{
            position: "relative",
            py: { xs: 10, md: 15 },
            bgcolor: brand.soft,
            "&::before": separatorSx("top", brand),
            "&::after": separatorSx("bottom", brand),
          }}
        >
          <Container maxWidth="lg">
            <SectionHeading
              eyebrow="Clients"
              title="Trusted across different markets and product stages."
              description="We keep the client section calm and easy to scan, so the brands support the story instead of overwhelming it."
            />

            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                width: "100vw",
                ml: "calc(50% - 50vw)",
                overflow: "hidden",
                "& .swiper-wrapper": {
                  transitionTimingFunction: "linear",
                },
              }}
            >
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={12}
                loop
                speed={2600}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  600: {
                    spaceBetween: 14,
                  },
                  900: {
                    spaceBetween: 16,
                  },
                  1200: {
                    spaceBetween: 18,
                  },
                }}
              >
                {clientLogos.map((clientLogo, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "clamp(180px, 15vw, 240px)" }}
                  >
                    <LogoTile image={clientLogo} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Container>
        </Box>

        <Box
          id="contact"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: brand.surface,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={3}>
                  <Typography
                    sx={{
                      color: brand.greenDark,
                      textTransform: "uppercase",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                    }}
                  >
                    Contact
                  </Typography>
                  <Typography
                    component="h2"
                    sx={{
                      color: brand.ink,
                      fontSize: { xs: "2.25rem", md: "3.6rem" },
                      lineHeight: 1.05,
                      fontWeight: 800,
                    }}
                  >
                    Tell us what you're building.
                  </Typography>
                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "1.08rem",
                      lineHeight: 1.75,
                    }}
                  >
                    Share the product, challenge, or opportunity. We'll help you
                    find the clearest next step.
                  </Typography>
                  <Divider />
                  <Stack spacing={1.5}>
                    <InfoLine
                      label="Email"
                      value="contact@donethink.com"
                      href="mailto:contact@donethink.com"
                    />
                    <InfoLine
                      label="WhatsApp"
                      value="+55 35 99733-0160"
                      href="https://wa.me/5535997330160"
                      external
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Card
                  elevation={0}
                  sx={{
                    ...electricCardSx(brand, { soft: true }),
                    borderRadius: 2,
                    p: { xs: 2.5, sm: 4, md: 5 },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Full name" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email address" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth select label="Project type" defaultValue="">
                        <MenuItem value="">Choose one</MenuItem>
                        <MenuItem value="web">Web application</MenuItem>
                        <MenuItem value="mobile">Mobile application</MenuItem>
                        <MenuItem value="api">API or integration</MenuItem>
                        <MenuItem value="product">Product discovery</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Timeline" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={5}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          minHeight: 54,
                          bgcolor: brand.green,
                          color: brand.onGreen,
                          borderRadius: 1.5,
                          textTransform: "none",
                          fontWeight: 800,
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: brand.greenHover,
                            boxShadow: "none",
                          },
                        }}
                      >
                        Send message
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Dialog
        open={Boolean(selectedFounder)}
        onClose={() => setSelectedFounder(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: "hidden",
          },
        }}
      >
        {selectedFounder ? (
          <DialogContent sx={{ p: 0 }}>
            <Grid container>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    height: { xs: 340, md: "100%" },
                    minHeight: { md: 520 },
                    bgcolor: brand.soft,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={selectedFounder.image}
                    alt={selectedFounder.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: selectedFounder.imagePosition,
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5} sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Box>
                      <Typography
                        component="h2"
                        sx={{
                          color: brand.ink,
                          fontSize: { xs: "2rem", md: "2.6rem" },
                          lineHeight: 1.05,
                          fontWeight: 800,
                        }}
                      >
                        {selectedFounder.name}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.75,
                          color: brand.greenDark,
                          fontWeight: 700,
                        }}
                      >
                        {selectedFounder.role}
                      </Typography>
                    </Box>
                    <IconButton
                      aria-label="Close founder details"
                      onClick={() => setSelectedFounder(null)}
                      sx={{
                        color: brand.ink,
                        flexShrink: 0,
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Stack>

                  <Divider />

                  <Stack spacing={2}>
                    {selectedFounder.modalBio.map((paragraph) => (
                      <Typography
                        key={paragraph}
                        sx={{
                          color: brand.muted,
                          fontSize: "1rem",
                          lineHeight: 1.75,
                        }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </DialogContent>
        ) : null}
      </Dialog>

      <Footer />
    </Box>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const brand = useBrand();

  return (
    <Stack spacing={2} sx={{ maxWidth: 760 }}>
      <Typography
        sx={{
          color: brand.greenDark,
          textTransform: "uppercase",
          fontWeight: 800,
          fontSize: "0.8rem",
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        component="h2"
        sx={{
          color: brand.ink,
          fontSize: { xs: "2.25rem", md: "3.6rem" },
          lineHeight: 1.08,
          fontWeight: 800,
          maxWidth: 700,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: brand.muted,
          fontSize: { xs: "1rem", md: "1.12rem" },
          lineHeight: 1.75,
          maxWidth: 680,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

function LogoTile({ image, index }: { image: string; index: number }) {
  const brand = useBrand();

  return (
    <Card
      elevation={0}
      sx={{
        height: 112,
        borderRadius: 2,
        border: `1px solid ${brand.neutralLine}`,
        bgcolor: brand.surface,
        p: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`Client logo ${index + 1}`}
        sx={{
          maxWidth: "100%",
          maxHeight: 64,
          objectFit: "contain",
        }}
      />
    </Card>
  );
}

function InfoLine({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const brand = useBrand();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: brand.green,
          flexShrink: 0,
        }}
      />
      <Typography sx={{ color: brand.muted, minWidth: 86 }}>{label}</Typography>
      <Typography
        component={href ? "a" : "span"}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        sx={{
          color: brand.ink,
          fontWeight: 700,
          textDecoration: "none",
          "&:hover": {
            color: brand.greenDark,
            textDecoration: "underline",
          },
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

export default App;
