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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { alpha, useTheme, type PaletteMode } from "@mui/material/styles";
import { type FormEvent, useEffect, useRef, useState } from "react";
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
import lightHeroVideo from "./assets/videos/233043.mp4";
import darkHeroVideo from "./assets/videos/fundo preto.mp4";
import whirlpool from "./assets/whirlpool.png";
import yep from "./assets/yep.jpg";
import yogha from "./assets/yogha.png";
import logo from "./assets/svgs/DoneThink.svg";
import logoSvg from "./assets/svgs/DoneThink.svg?raw";
import darkIvy from "./assets/dark/1 ivy verso preta.png";
import darkMurad from "./assets/dark/6 verso escura.png";
import darkIdea from "./assets/dark/7.png";
import darkAmold from "./assets/dark/amold-dark.png";
import darkDottas from "./assets/dark/dottas-dark.png";
import darkGoAhead from "./assets/dark/go-ahead-dark.png";
import darkLanlink from "./assets/dark/lanlink-dark.png";
import darkMobiPlus from "./assets/dark/mobi-plus-dark.png";
import darkNovaFutura from "./assets/dark/nova-futura-dark.png";
import darkPdSolucoes from "./assets/dark/pd-solucoes-dark.png";
import darkPowerGo from "./assets/dark/power2go-dark.png";
import darkPrime from "./assets/dark/prime-interway-dark.png";
import darkSalesSense from "./assets/dark/sales-sense-dark.png";
import darkSbLabs from "./assets/dark/sb-labs-dark.png";
import darkSemParar from "./assets/dark/sem-parar-dark.png";
import darkSiglo from "./assets/dark/siglo-dark.png";
import darkTazzi from "./assets/dark/tazzi-dark.PNG";
import darkTopsystem from "./assets/dark/top-systems-dark.png";
import darkTraco from "./assets/dark/traco-dark.png";
import darkWhirlpool from "./assets/dark/whirl.png";
import darkYep from "./assets/dark/yep-dark.png";
import darkYogha from "./assets/dark/yogha-dark.png";
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
    logoFilter: "none",
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

const whatsappPhoneNumber = "3723205825";
const startProjectWhatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=Ol%C3%A1%2C%20quero%20iniciar%20um%20projeto%20com%20a%20DoneThink.`;

const darkLogo = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  logoSvg.replace('fill="#000" stroke="none"', 'fill="#fff" stroke="none"')
)}`;

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

const darkClientLogos = [
  darkAmold,
  bblend,
  darkDottas,
  darkGoAhead,
  darkIdea,
  darkIvy,
  darkLanlink,
  darkMobiPlus,
  darkMurad,
  darkNovaFutura,
  darkPdSolucoes,
  darkPowerGo,
  darkPrime,
  darkSalesSense,
  darkSbLabs,
  darkSemParar,
  darkSiglo,
  darkTazzi,
  darkTopsystem,
  darkTraco,
  darkWhirlpool,
  darkYep,
  darkYogha,
];

const sections = [
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Clients", id: "clients" },
  { label: "About", id: "about" },
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
    role: "Co-funder & CEO",
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
    role: "Co-funder & CTO",
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
  const [servicesVisible, setServicesVisible] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<
    (typeof founders)[number] | null
  >(null);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const servicesGridRef = useRef<HTMLDivElement | null>(null);
  const activeClientLogos = mode === "dark" ? darkClientLogos : clientLogos;
  const activeLogo = mode === "dark" ? darkLogo : logo;
  const heroVideoBaseStyle = {
    objectFit: "cover",
    objectPosition: "42% center",
    position: "absolute",
    inset: "auto",
    zIndex: 2,
    display: "block",
    backgroundColor: "#000",
    transition: "opacity 0.18s ease",
  } as const;
  const lightHeroVideoStyle = {
    ...heroVideoBaseStyle,
    width: "123.12%",
    height: "119.02%",
    left: "calc(-11.56% + 20px)",
    top: "calc(-9.51% - 29px)",
    clipPath: "none",
    opacity: mode === "dark" ? 0 : 1,
    visibility: mode === "dark" ? "hidden" : "visible",
  } as const;

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = [
      "Ola, DoneThink! Quero falar sobre um projeto.",
      "",
      `Nome: ${contactForm.fullName.trim() || "Nao informado"}`,
      `Email: ${contactForm.email.trim() || "Nao informado"}`,
      "",
      "Mensagem:",
      contactForm.message.trim() || "Nao informada",
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const darkHeroVideoStyle = {
    ...heroVideoBaseStyle,
    width: "144%",
    height: "139.2%",
    left: "calc(-22% + 27px)",
    top: "calc(-19.6% - 36px)",
    clipPath: "inset(0 18% 0 0)",
    opacity: mode === "dark" ? 1 : 0,
    visibility: mode === "dark" ? "visible" : "hidden",
  } as const;

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

  useEffect(() => {
    const servicesGrid = servicesGridRef.current;

    if (!servicesGrid) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(servicesGrid);

    return () => observer.disconnect();
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
                alignItems: "center",
                alignSelf: "center",
                lineHeight: 0,
                position: "relative",
                transform: { xs: "translateY(10px)", md: "translateY(13px)" },
              }}
            >
              <CardMedia
                component="img"
                image={activeLogo}
                alt="DoneThink"
                sx={{
                  display: "block",
                  width: "100%",
                  filter: brand.logoFilter,
                }}
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
                    bgcolor: "#000",
                    width: { xs: "100%", md: "82%" },
                    mx: "auto",
                    p: 0,
                    boxShadow: brand.shadow,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 0,
                      overflow: "hidden",
                      bgcolor: "#000",
                      aspectRatio: { xs: "4 / 3", sm: "16 / 11" },
                    }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={lightHeroVideoStyle}
                      >
                        <source src={lightHeroVideo} type="video/mp4" />
                      </video>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={darkHeroVideoStyle}
                      >
                        <source src={darkHeroVideo} type="video/mp4" />
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
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      position: "relative",
                      width: "fit-content",
                      transition: "transform 0.24s ease",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -8,
                        height: 2,
                        background: `linear-gradient(90deg, ${alpha(
                          brand.green,
                          0.9
                        )}, transparent)`,
                        opacity: 0,
                        transform: "scaleX(0.3)",
                        transformOrigin: "left",
                        transition:
                          "opacity 0.24s ease, transform 0.28s ease",
                      },
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                        "&:hover::after": {
                          opacity: 1,
                          transform: "scaleX(1)",
                        },
                        "&:hover .trust-number": {
                          color: brand.greenDark,
                          textShadow: `0 0 18px ${alpha(brand.green, 0.36)}`,
                          transform: "scale(1.06)",
                        },
                      },
                    }}
                  >
                    <Typography
                      className="trust-number"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 800,
                        color: brand.ink,
                        transition:
                          "color 0.24s ease, text-shadow 0.24s ease, transform 0.24s ease",
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

            <Grid
              ref={servicesGridRef}
              container
              spacing={2.5}
              sx={{ mt: { xs: 5, md: 7 } }}
            >
              {services.map((service, index) => (
                <Grid
                  key={service.title}
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  sx={{
                    opacity: servicesVisible ? 1 : 0,
                    transform: servicesVisible
                      ? "translateY(0)"
                      : "translateY(22px)",
                    transition:
                      "opacity 0.52s ease, transform 0.52s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    transitionDelay: servicesVisible
                      ? `${index * 90}ms`
                      : "0ms",
                    "@media (prefers-reduced-motion: reduce)": {
                      opacity: 1,
                      transform: "none",
                      transition: "none",
                    },
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      ...electricCardSx(brand),
                      position: "relative",
                      isolation: "isolate",
                      overflow: "hidden",
                      height: "100%",
                      borderRadius: 2,
                      p: { xs: 2.5, md: 3 },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "-38%",
                        zIndex: 0,
                        width: "30%",
                        background: `linear-gradient(90deg, transparent, ${alpha(
                          brand.green,
                          0.16
                        )}, transparent)`,
                        opacity: 0.75,
                        transform: "skewX(-14deg) translateX(0)",
                        animation:
                          "service-scan-line 6.8s ease-in-out infinite",
                        animationDelay: `${index * 1.15}s`,
                        pointerEvents: "none",
                      },
                      "@keyframes service-scan-line": {
                        "0%, 8%": {
                          opacity: 0,
                          transform: "skewX(-14deg) translateX(0)",
                        },
                        "13%": {
                          opacity: 0.75,
                        },
                        "24%": {
                          opacity: 0.75,
                          transform: "skewX(-14deg) translateX(520%)",
                        },
                        "32%, 100%": {
                          opacity: 0,
                          transform: "skewX(-14deg) translateX(520%)",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 18,
                        right: 18,
                        top: 0,
                        height: 2,
                        zIndex: 0,
                        background: `linear-gradient(90deg, transparent, ${alpha(
                          brand.green,
                          0.95
                        )}, transparent)`,
                        opacity: 0,
                        transform: "translateX(-28%)",
                        transition:
                          "opacity 0.22s ease, transform 0.46s ease",
                        pointerEvents: "none",
                      },
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": {
                          ...electricCardHoverSx(brand),
                          transform: "translateY(-3px)",
                          borderColor: alpha(brand.green, 0.72),
                          boxShadow: `0 0 0 1px ${alpha(
                            brand.green,
                            0.26
                          )}, 0 18px 38px ${alpha(brand.green, 0.18)}`,
                        },
                        "&:hover::after": {
                          opacity: 1,
                          transform: "translateX(28%)",
                        },
                        "&:hover .service-card-icon": {
                          bgcolor: alpha(brand.green, 0.14),
                          boxShadow: `0 0 0 1px ${alpha(
                            brand.green,
                            0.35
                          )}, 0 0 24px ${alpha(brand.green, 0.28)}`,
                          transform: "translateY(-2px) scale(1.05)",
                        },
                        "&:hover .service-card-icon::before": {
                          opacity: 1,
                          transform: "scale(1.55)",
                        },
                        "&:hover .service-card-icon::after": {
                          opacity: 1,
                          transform: "scale(1.12) rotate(90deg)",
                        },
                        "&:hover .service-card-icon .MuiSvgIcon-root": {
                          transform: "scale(1.12) rotate(-6deg)",
                          filter: `drop-shadow(0 0 8px ${alpha(
                            brand.green,
                            0.38
                          )})`,
                        },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before": {
                          animation: "none",
                          opacity: 0,
                        },
                      },
                    }}
                  >
                    <Stack spacing={2} sx={{ minWidth: 0, position: "relative", zIndex: 1 }}>
                      <Box
                        className="service-card-icon"
                        sx={{
                          position: "relative",
                          width: 44,
                          height: 44,
                          overflow: "visible",
                          borderRadius: 1.5,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: brand.surfaceSoft,
                          color: brand.greenDark,
                          animation: "service-icon-float 3.4s ease-in-out infinite",
                          boxShadow: `0 0 18px ${alpha(brand.green, 0.08)}`,
                          transition:
                            "background-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 3,
                            borderRadius: "inherit",
                            background: `radial-gradient(circle, ${alpha(
                              brand.green,
                              0.24
                            )}, transparent 64%)`,
                            opacity: 0.72,
                            transform: "scale(1.35)",
                            animation:
                              "service-icon-aura 2.8s ease-in-out infinite",
                            pointerEvents: "none",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: -5,
                            borderRadius: 2,
                            border: `1px solid ${alpha(brand.green, 0.32)}`,
                            borderTopColor: alpha(brand.green, 0.85),
                            opacity: 0.55,
                            transform: "scale(1.04) rotate(0deg)",
                            animation:
                              "service-icon-orbit 3.6s linear infinite",
                            pointerEvents: "none",
                          },
                          "& .service-icon-particles": {
                            position: "absolute",
                            inset: 0,
                            zIndex: 2,
                            pointerEvents: "none",
                          },
                          "& .service-icon-particles span": {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            bgcolor: brand.green,
                            opacity: 0,
                            transform:
                              "translate(-50%, -50%) translate(0, 0) scale(0.7)",
                            boxShadow: `0 0 10px ${alpha(brand.green, 0.5)}`,
                            animation:
                              "service-particle-burst 2.8s ease-out infinite",
                          },
                          "& .service-icon-particles span:nth-of-type(1)": {
                            "--particle-x": "-20px",
                            "--particle-y": "-18px",
                            animationDelay: "0ms",
                          },
                          "& .service-icon-particles span:nth-of-type(2)": {
                            "--particle-x": "22px",
                            "--particle-y": "-14px",
                            animationDelay: "180ms",
                          },
                          "& .service-icon-particles span:nth-of-type(3)": {
                            "--particle-x": "-18px",
                            "--particle-y": "18px",
                            animationDelay: "360ms",
                          },
                          "& .service-icon-particles span:nth-of-type(4)": {
                            "--particle-x": "20px",
                            "--particle-y": "16px",
                            animationDelay: "540ms",
                          },
                          "@keyframes service-particle-burst": {
                            "0%": {
                              opacity: 0,
                              transform:
                                "translate(-50%, -50%) translate(0, 0) scale(0.7)",
                            },
                            "32%": {
                              opacity: 1,
                            },
                            "58%, 100%": {
                              opacity: 0,
                              transform:
                                "translate(-50%, -50%) translate(var(--particle-x), var(--particle-y)) scale(0.15)",
                            },
                          },
                          "@keyframes service-icon-aura": {
                            "0%, 100%": {
                              opacity: 0.48,
                              transform: "scale(1.08)",
                            },
                            "50%": {
                              opacity: 0.82,
                              transform: "scale(1.45)",
                            },
                          },
                          "@keyframes service-icon-orbit": {
                            "0%": {
                              transform: "scale(1.04) rotate(0deg)",
                            },
                            "100%": {
                              transform: "scale(1.04) rotate(360deg)",
                            },
                          },
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
                            position: "relative",
                            zIndex: 1,
                            animation:
                              "service-icon-pulse 2.8s ease-in-out infinite",
                            transition:
                              "transform 0.24s ease, filter 0.24s ease",
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
                            "&::before, &::after": {
                              animation: "none",
                            },
                            "& .service-icon-particles span": {
                              animation: "none",
                            },
                            "& .MuiSvgIcon-root": {
                              animation: "none",
                            },
                          },
                        }}
                      >
                        <Box className="service-icon-particles" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                          <span />
                        </Box>
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
                    className="process-card"
                    spacing={2}
                    sx={{
                      ...electricCardSx(brand),
                      position: "relative",
                      isolation: "isolate",
                      overflow: "hidden",
                      height: "100%",
                      p: { xs: 2.5, md: 2.75 },
                      borderRadius: 2,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        zIndex: -1,
                        background: `radial-gradient(circle at 22% 16%, ${alpha(
                          brand.green,
                          0.18
                        )}, transparent 34%)`,
                        opacity: 0.65,
                        animation: "process-card-aura 3.6s ease-in-out infinite",
                        pointerEvents: "none",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 18,
                        right: 18,
                        top: 0,
                        height: 2,
                        zIndex: 0,
                        background: `linear-gradient(90deg, transparent, ${alpha(
                          brand.green,
                          0.95
                        )}, transparent)`,
                        opacity: 0,
                        transform: "translateX(-30%)",
                        animation: "process-card-scan 3.9s ease-in-out infinite",
                        pointerEvents: "none",
                      },
                      "@keyframes process-card-aura": {
                        "0%, 100%": {
                          opacity: 0.32,
                        },
                        "50%": {
                          opacity: 0.78,
                        },
                      },
                      "@keyframes process-card-scan": {
                        "0%": {
                          opacity: 0,
                          transform: "translateX(-30%)",
                        },
                        "18%": {
                          opacity: 0.9,
                        },
                        "42%": {
                          opacity: 0.9,
                          transform: "translateX(30%)",
                        },
                        "58%, 100%": {
                          opacity: 0,
                          transform: "translateX(30%)",
                        },
                      },
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": {
                          ...electricCardHoverSx(brand),
                          transform: "translateY(-3px)",
                          borderColor: alpha(brand.green, 0.72),
                          boxShadow: `0 0 0 1px ${alpha(
                            brand.green,
                            0.24
                          )}, 0 18px 38px ${alpha(brand.green, 0.16)}`,
                        },
                        "&:hover .process-step-number": {
                          transform: "translateY(-2px) scale(1.08)",
                          boxShadow: `0 0 0 7px ${alpha(
                            brand.green,
                            0.1
                          )}, 0 0 24px ${alpha(brand.green, 0.34)}`,
                        },
                        "&:hover .process-step-number::before": {
                          opacity: 1,
                          transform: "scale(1.7)",
                        },
                        "&:hover .process-step-number::after": {
                          transform: "scale(1.18) rotate(110deg)",
                        },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&::before, &::after": {
                          animation: "none",
                        },
                      },
                    }}
                  >
                    <Typography
                      className="process-step-number"
                      sx={{
                        position: "relative",
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: brand.green,
                        color: brand.onGreen,
                        fontWeight: 800,
                        boxShadow: `0 0 0 5px ${alpha(
                          brand.green,
                          0.07
                        )}, 0 0 18px ${alpha(brand.green, 0.24)}`,
                        animation:
                          "process-number-pulse 2.9s ease-in-out infinite",
                        transition:
                          "transform 0.24s ease, box-shadow 0.24s ease",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 3,
                          borderRadius: "50%",
                          background: `radial-gradient(circle, ${alpha(
                            brand.green,
                            0.26
                          )}, transparent 66%)`,
                          opacity: 0.66,
                          transform: "scale(1.42)",
                          animation:
                            "process-number-aura 2.9s ease-in-out infinite",
                          pointerEvents: "none",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: -5,
                          borderRadius: "50%",
                          border: `1px solid ${alpha(brand.green, 0.35)}`,
                          borderTopColor: alpha(brand.green, 0.95),
                          opacity: 0.62,
                          transform: "scale(1.05) rotate(0deg)",
                          animation:
                            "process-number-orbit 3.4s linear infinite",
                          pointerEvents: "none",
                        },
                        "@keyframes process-number-pulse": {
                          "0%, 100%": {
                            boxShadow: `0 0 0 4px ${alpha(
                              brand.green,
                              0.06
                            )}, 0 0 14px ${alpha(brand.green, 0.2)}`,
                          },
                          "50%": {
                            boxShadow: `0 0 0 8px ${alpha(
                              brand.green,
                              0.1
                            )}, 0 0 26px ${alpha(brand.green, 0.36)}`,
                          },
                        },
                        "@keyframes process-number-aura": {
                          "0%, 100%": {
                            opacity: 0.42,
                            transform: "scale(1.12)",
                          },
                          "50%": {
                            opacity: 0.78,
                            transform: "scale(1.62)",
                          },
                        },
                        "@keyframes process-number-orbit": {
                          "0%": {
                            transform: "scale(1.05) rotate(0deg)",
                          },
                          "100%": {
                            transform: "scale(1.05) rotate(360deg)",
                          },
                        },
                        "@media (prefers-reduced-motion: reduce)": {
                          animation: "none",
                          transition: "none",
                          "&::before, &::after": {
                            animation: "none",
                          },
                        },
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
              title="Trusted across different countries, markets and product stages."
              description="We keep the client section calm and easy to scan, so the brands support the story instead of overwhelming it."
            />

            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                width: "100vw",
                ml: "calc(50% - 50vw)",
                overflow: "hidden",
                py: 1,
                "& .swiper-wrapper": {
                  transitionTimingFunction: "linear",
                  alignItems: "stretch",
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
                {activeClientLogos.map((clientLogo, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "clamp(132px, 12vw, 168px)",
                      padding: "4px 0",
                      boxSizing: "border-box",
                    }}
                  >
                    <LogoTile image={clientLogo} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
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
                        alignItems="flex-start"
                        sx={{ height: "100%" }}
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
                        <Stack
                          spacing={1.5}
                          sx={{
                            flex: 1,
                            minWidth: 0,
                            alignSelf: "stretch",
                            minHeight: { sm: 248 },
                          }}
                        >
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
                          <Box
                            sx={{
                              mt: "auto",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={founder.signature}
                              alt={`${founder.name} signature`}
                              sx={{
                                width: founder.name.includes("Alysson")
                                  ? 154
                                  : 277,
                                maxWidth: "100%",
                                objectFit: "contain",
                                filter: brand.mutedLogoFilter,
                                opacity: 0.75,
                                transform: founder.name.includes("Alysson")
                                  ? "none"
                                  : "translateY(15px)",
                              }}
                            />
                          </Box>
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
          id="contact"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: brand.surface,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="stretch">
              <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
                <Stack spacing={3} sx={{ width: "100%" }}>
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
                      value="+372 3205825"
                      href="https://wa.me/3723205825"
                      external
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
                <Card
                  component="form"
                  elevation={0}
                  onSubmit={handleContactSubmit}
                  sx={{
                    ...electricCardSx(brand, { soft: true }),
                    borderRadius: 2,
                    p: { xs: 2.5, sm: 4, md: 5 },
                    width: "100%",
                    height: { md: "100%" },
                    display: "flex",
                  }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{ flex: 1, alignContent: "stretch" }}
                    >
                      <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Full name"
                        value={contactForm.fullName}
                        onChange={(event) =>
                          setContactForm((current) => ({
                            ...current,
                            fullName: event.target.value,
                          }))
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Email address"
                        type="email"
                        value={contactForm.email}
                        onChange={(event) =>
                          setContactForm((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12 }}
                      sx={{ display: "flex", flexGrow: { md: 1 } }}
                    >
                      <TextField
                        fullWidth
                        required
                        label="Message"
                        multiline
                        rows={5}
                        value={contactForm.message}
                        onChange={(event) =>
                          setContactForm((current) => ({
                            ...current,
                            message: event.target.value,
                          }))
                        }
                        sx={{
                          "& .MuiInputBase-root": {
                            height: { md: "100%" },
                            alignItems: "flex-start",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        fullWidth
                        type="submit"
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
                    <CardMedia
                      component="img"
                      image={selectedFounder.signature}
                      alt={`${selectedFounder.name} signature`}
                      sx={{
                        width: selectedFounder.name.includes("Alysson")
                          ? 154
                          : 277,
                        maxWidth: "100%",
                        objectFit: "contain",
                        filter: brand.mutedLogoFilter,
                        opacity: 0.75,
                        alignSelf: "center",
                        transform: selectedFounder.name.includes("Alysson")
                          ? "none"
                          : "translateY(15px)",
                      }}
                    />
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
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        width: "100%",
        aspectRatio: "1 / 1",
        minHeight: 132,
        maxHeight: 168,
        borderRadius: 2,
        border: `1px solid ${brand.neutralLine}`,
        bgcolor: brand.surface,
        p: 2.25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, filter 0.24s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 10,
          zIndex: -1,
          borderRadius: 2,
          background: `radial-gradient(circle, ${alpha(
            brand.green,
            0.18
          )}, transparent 68%)`,
          opacity: 0,
          transform: "scale(0.82)",
          transition: "opacity 0.24s ease, transform 0.34s ease",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 8,
          zIndex: 0,
          borderRadius: 1.5,
          border: `1px solid ${alpha(brand.green, 0.28)}`,
          opacity: 0,
          transform: "scale(0.94)",
          transition: "opacity 0.24s ease, transform 0.34s ease",
          pointerEvents: "none",
        },
        "@media (hover: hover) and (pointer: fine)": {
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: alpha(brand.green, 0.62),
            boxShadow: `0 0 0 1px ${alpha(
              brand.green,
              0.18
            )}, 0 16px 32px ${alpha(brand.green, 0.14)}`,
            filter: "saturate(1.08)",
          },
          "&:hover::before": {
            opacity: 1,
            transform: "scale(1.2)",
          },
          "&:hover::after": {
            opacity: 1,
            transform: "scale(1)",
          },
          "&:hover .client-logo-img": {
            transform: "scale(1.04)",
            filter: `drop-shadow(0 0 10px ${alpha(brand.green, 0.2)})`,
          },
        },
      }}
    >
      <CardMedia
        className="client-logo-img"
        component="img"
        image={image}
        alt={`Client logo ${index + 1}`}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "78%",
          maxHeight: "62%",
          objectFit: "contain",
          transition: "transform 0.24s ease, filter 0.24s ease",
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
