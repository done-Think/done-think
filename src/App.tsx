import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import alyssonSignature from "./assets/alyssu-signature.png";
import alyssonPhoto from "./assets/alyssu.jpeg";
import maxwellPhoto from "./assets/max_photo_01.jpeg";
import maxwellSignature from "./assets/signature.png";
import logo from "./assets/svgs/DoneThink.svg";
import video from "./assets/videos/233043.mp4";
import WaveAboutBot from "./components/WaveAboutBot";
import WaveAboutTop from "./components/WaveAboutTop";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/autoplay";

import amold from "./assets/amold.png";
import bblend from "./assets/bblend.png";
import dottas from "./assets/dottas.png";
import goAhead from "./assets/go-ahead.png";
import idea from "./assets/idea.png";
import ivy from "./assets/ivy.png";
import lanlink from "./assets/lanlink.png";
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
import whirlpool from "./assets/whirlpool.png";
import yep from "./assets/yep.jpg";
import yogha from "./assets/yogha.png";
import Footer from "./components/Footer";
import WaveClientsBot from "./components/WaveClientsBot";
import WaveClientsTop from "./components/WaveClientsTop";

const logos = [
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
  { label: "About Us", id: "about" },
  { label: "What We Do", id: "services" },
  { label: "Clients", id: "clients" },
  { label: "Contact Us", id: "contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const half = Math.ceil(logos.length / 2);
  const firstHalf = logos.slice(0, half);
  const secondHalf = logos.slice(half);

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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ width: "100%", overflowX: "hidden" }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          minHeight: { xs: 72, md: 90 },
          zIndex: 1300,
          background: isScrolled || isMobileMenuOpen
            ? "linear-gradient(to bottom, #ffffff 90%, transparent)"
            : "transparent",
          transition: "background 0.6s ease-in-out",
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            mx: "auto",
            width: "100%",
            px: { xs: 2, md: 0 },
            position: "relative",
          }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ButtonBase
            onClick={handleLogoClick}
            sx={{
              width: { xs: 150, sm: 180, md: 200 },
              ml: { md: 2 },
              mt: { xs: 1.5, md: 2 },
              display: "flex",
            }}
          >
            <CardMedia component="img" image={logo} alt="doneThink" />
          </ButtonBase>
          <Stack
            direction="row"
            spacing={{ md: 3, lg: 5 }}
            alignItems="center"
            mr={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                sx={{
                  color: "#000",
                  minWidth: "auto",
                  px: 0,
                  py: 0.5,
                  borderBottom:
                    activeSection === section.id
                      ? "2px solid #33fca7"
                      : "2px solid transparent",
                  transition: "border-color 0.3s",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                onClick={() => handleScrollTo(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </Stack>
          <IconButton
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#000",
              mt: { xs: 0 },
              width: 32,
              height: 32,
              p: 0,
            }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {isMobileMenuOpen ? (
            <Stack
              spacing={2}
              sx={{
                display: { xs: "flex", md: "none" },
                position: "absolute",
                top: 72,
                left: 0,
                right: 0,
                mx: 2,
                p: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
              }}
            >
              {sections.map((section) => (
                <Button
                  key={section.id}
                  sx={{
                    backgroundColor:
                      activeSection === section.id ? "#33fca7" : "transparent",
                    borderRadius: 1,
                    justifyContent: "flex-start",
                    color: "#000",
                    px: 1.5,
                    py: 1,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor:
                        activeSection === section.id ? "#33fca7" : "#eafff6",
                    },
                  }}
                  onClick={() => handleScrollTo(section.id)}
                >
                  {section.label}
                </Button>
              ))}
            </Stack>
          ) : null}
        </Box>
      </AppBar>

      <Box sx={{ width: "100%" }}>
            <Box
              id="home"
              sx={{
                minHeight: { xs: "100svh", md: "100vh" },
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                pt: { xs: 8, md: 0 },
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  maxWidth: 1280,
                  mx: "auto",
                  px: { xs: 2, sm: 4, md: 5 },
                  transform: {
                    xs: "translateY(-6vh)",
                    sm: "translateY(-4vh)",
                    md: "none",
                  },
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  size={{ xs: 12, md: 6 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "min(120vw, 760px)",
                      maxWidth: "100%",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 3,
                        backgroundColor: "#fff",
                        pointerEvents: "none",
                        zIndex: 2,
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: 2,
                        backgroundColor: "#fff",
                        pointerEvents: "none",
                        zIndex: 2,
                      },
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        objectFit: "contain",
                        backgroundColor: "#fff",
                        display: "block",
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </Box>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 6 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: "1.75rem", sm: "2.125rem" },
                      textShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    You didn't even think – we've already got the solution.
                  </Typography>
                </Grid>
              </Grid>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  right: 0,
                  height: { xs: 86, sm: 120, md: 150 },
                  width: "100%",
                  background: `linear-gradient(
                    to bottom,
                    #33fca7 0%,
                    #5efcb7 55%,
                    #9efcd4 100%
                  )`,
                  clipPath:
                    "polygon(0 18%, 8% 20%, 18% 16%, 30% 12%, 43% 14%, 56% 19%, 70% 18%, 84% 14%, 100% 8%, 100% 100%, 0 100%)",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                mt: "-2px",
                height: { xs: 120, sm: 200, md: 300 },
                background: `linear-gradient(
            to bottom,
            #9efcd4 0%,
            #9efcd4 25%,
            #9efcd4 50%,
            #ccfce9 75%,
            #ffffff 100%
          )`,
              }}
            />

            <Box
              id="about"
              sx={{
                minHeight: "100vh",
                width: "100%",
                mt: { xs: 2, md: 5 },
                pt: { xs: 10, md: 15 },
                pb: { xs: 8, md: 0 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: { xs: 2, sm: 4 },
                }}
              >
                <Typography variant="h3">About us</Typography>

                <Stack
                  flexDirection={{ xs: "column", md: "row" }}
                  justifyContent="center"
                  alignItems="center"
                  mt={{ xs: 10, md: 15 }}
                  gap={{ xs: 10, md: 4 }}
                >
                  <Stack
                    flex={1}
                    minHeight={{ xs: "auto", md: 600 }}
                    width="100%"
                    borderRadius={2}
                    border="2px solid #9efcd4"
                    sx={{
                      backgroundColor: "#9efcd4",
                      overflow: "visible",
                      position: "relative",
                      px: { xs: 2, sm: 3 },
                      pt: { xs: 13, sm: 14 },
                      pb: 4,
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={maxwellPhoto}
                      alt="Maxwell Siqueira"
                      sx={{
                        height: { xs: 128, sm: 160 },
                        width: { xs: 128, sm: 160 },
                        borderRadius: "50%",
                        position: "absolute",
                        top: { xs: -64, sm: -80 },
                        left: { xs: "50%", md: 32 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 10,
                        border: "2px solid #fff",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    />

                    <Typography textAlign="center">
                      A 34-year-old technology enthusiast and seasoned software
                      developer with over 14 years of experience in building
                      digital solutions across a wide range of platforms.
                      Founder of Monkeys Tecnologia in Brazil and currently
                      leading doneThink, a forward-thinking tech company based
                      in Estonia. With deep expertise in full-stack development
                      and product design, the CEO has also served as a tech lead
                      and engineering manager, successfully guiding
                      cross-functional teams through complex challenges. His
                      background includes hands-on work with embedded systems,
                      mobile applications, and web platforms, always combining
                      technical excellence with a product-oriented mindset.
                      Driven by innovation and simplicity, he is committed to
                      transforming complex problems into elegant, scalable, and
                      impactful solutions.
                    </Typography>

                    <Stack alignItems="center" mt="auto" pt={3}>
                      <CardMedia
                        component="img"
                        image={maxwellSignature}
                        alt="Maxwell Siqueira signature"
                        sx={{
                          width: { xs: 220, sm: 300 },
                          maxWidth: "100%",
                          mb: 1.5,
                        }}
                      />
                      <Typography fontWeight={600} fontSize={18} color="#000">
                        Maxwell Siqueira
                      </Typography>
                      <Typography fontSize={14} color="#000">
                        Co-funder
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    flex={1}
                    minHeight={{ xs: "auto", md: 600 }}
                    width="100%"
                    borderRadius={2}
                    border="2px solid #9efcd4"
                    sx={{
                      backgroundColor: "#9efcd4",
                      overflow: "visible",
                      position: "relative",
                      px: { xs: 2, sm: 3 },
                      pt: { xs: 13, sm: 14 },
                      pb: 4,
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={alyssonPhoto}
                      alt="Alysson Sene"
                      sx={{
                        height: { xs: 128, sm: 160 },
                        width: { xs: 128, sm: 160 },
                        borderRadius: "50%",
                        position: "absolute",
                        top: { xs: -64, sm: -80 },
                        left: { xs: "50%", md: 32 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 10,
                        border: "2px solid #fff",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    />

                    <Typography textAlign="center">
                      Co-founder of doneThink and software developer with solid
                      experience in creating digital solutions focused on
                      enhancing people's experience. Since 2018, he has worked
                      in the technology field, with a strong presence in agile,
                      dynamic, and collaborative environments. At 30 years old,
                      he combines attention to detail, aesthetic sense, and
                      strategic vision with best development practices to
                      deliver functional, scalable, and well-designed products.
                      He is ambitious to grow toward technical leadership
                      positions, contributing to the development of new talents
                      and helping build scalable, elegant, and purposeful
                      solutions.
                    </Typography>

                    <Stack alignItems="center" mt="auto" pt={3}>
                      <CardMedia
                        component="img"
                        image={alyssonSignature}
                        alt="Alysson Sene signature"
                        sx={{
                          width: { xs: 160, sm: 200 },
                          maxWidth: "100%",
                          mb: 1.5,
                          transform: {
                            xs: "translateY(16px)",
                            md: "translateY(28px)",
                          },
                        }}
                      />
                      <Typography fontWeight={600} fontSize={18} color="#000">
                        Alysson Sene
                      </Typography>
                      <Typography fontSize={14} color="#000">
                        Co-funder
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>

            <Box
              id="services"
              sx={{
                width: "100%",
                mt: 5,
                pt: { xs: 10, md: 15 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: { xs: 2, sm: 4 },
                  mb: 5,
                }}
              >
                <Typography variant="h3">What we do</Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minHeight: "100vh",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100vw",
                    overflow: "hidden",
                    lineHeight: 0,
                    mb: "-1px",
                  }}
                >
                  <WaveAboutBot />
                </Box>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    px: { xs: 2, sm: 4 },
                    py: { xs: 6, md: 10 },
                    mx: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #078c66, #33fca7)",
                  }}
                >
                  <Stack maxWidth={1280}>
                    <Typography
                      fontWeight={600}
                      fontSize={{ xs: 18, sm: 22, md: 26 }}
                      textAlign="center"
                      color="#fff"
                      sx={{
                        textShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      We are a software development company dedicated to
                      simplifying the lifecycle of web, mobile, and API-based
                      applications. Our expert team includes front-end and
                      back-end developers, mobile engineers, product managers,
                      product designers, UI/UX specialists, scrum masters,
                      devops engineers, data analysts, and tech leads — all
                      working together to deliver tailored digital solutions. We
                      take the time to truly understand our clients challenges,
                      transforming them into practical, fast, and effective
                      results. With a flexible and collaborative approach,
                      clients can actively shape the development focus each week
                      — whether allocating 100% of the team to design one week,
                      then shifting to 70% backend and 30% frontend the next.
                      This dynamic model ensures transparency, adaptability, and
                      full alignment with each client’s evolving priorities.
                    </Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    width: "100vw",
                    overflow: "hidden",
                    lineHeight: 0,
                    mt: "-1px",
                  }}
                >
                  <WaveAboutTop />
                </Box>
              </Box>
            </Box>

            <Box
              id="clients"
              sx={{
                width: "100%",
                mt: 5,
                pt: { xs: 10, md: 15 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: { xs: 2, sm: 4 },
                  mb: 5,
                }}
              >
                <Typography variant="h3">Clients</Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minHeight: "100vh",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100vw",
                    overflow: "hidden",
                    lineHeight: 0,
                    mb: "-1px",
                  }}
                >
                  <WaveClientsBot />
                </Box>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    px: { xs: 0, sm: 2 },
                    py: { xs: 6, md: 10 },
                    mx: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #33fca7, #078c66)",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: 1280,
                      mx: "auto",
                      px: { xs: 1, sm: 3, md: 4 },
                      width: "100%",
                    }}
                  >
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={4}
                      slidesPerView={3}
                      breakpoints={{
                        0: { slidesPerView: 3, spaceBetween: 4 },
                        480: { slidesPerView: 3, spaceBetween: 6 },
                        768: { slidesPerView: 4, spaceBetween: 12 },
                        1024: { slidesPerView: 5, spaceBetween: 16 },
                      }}
                      loop
                      speed={2000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                    >
                      {firstHalf.map((logo, index) => (
                        <SwiperSlide
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Card
                            sx={{
                              aspectRatio: "1 / 1",
                              height: "auto",
                              width: "100%",
                              maxWidth: { xs: 96, sm: 112, md: 150 },
                              p: { xs: 1.25, sm: 1.75, md: 3 },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 8,
                              backgroundColor: "#fff",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={logo}
                              alt={`logo-${index}`}
                              sx={{
                                maxHeight: 100,
                                maxWidth: "100%",
                                objectFit: "contain",
                                backgroundColor: "#fff",
                              }}
                            />
                          </Card>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={4}
                      slidesPerView={3}
                      breakpoints={{
                        0: { slidesPerView: 3, spaceBetween: 4 },
                        480: { slidesPerView: 3, spaceBetween: 6 },
                        768: { slidesPerView: 4, spaceBetween: 12 },
                        1024: { slidesPerView: 5, spaceBetween: 16 },
                      }}
                      loop
                      speed={2000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      style={{ marginTop: 16 }}
                    >
                      {secondHalf.map((logo, index) => (
                        <SwiperSlide
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Card
                            sx={{
                              aspectRatio: "1 / 1",
                              height: "auto",
                              width: "100%",
                              maxWidth: { xs: 96, sm: 112, md: 150 },
                              p: { xs: 1.25, sm: 1.75, md: 3 },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 8,
                              backgroundColor: "#fff",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={logo}
                              alt={`logo-${index}`}
                              sx={{
                                maxHeight: 100,
                                maxWidth: "100%",
                                objectFit: "contain",
                                backgroundColor: "#fff",
                              }}
                            />
                          </Card>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    width: "100vw",
                    overflow: "hidden",
                    lineHeight: 0,
                    mt: "-1px",
                  }}
                >
                  <WaveClientsTop />
                </Box>
              </Box>
            </Box>

            <Box
              id="contact"
              sx={{
                minHeight: "100vh",
                width: "100%",
                mt: 5,
                pt: { xs: 10, md: 15 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: { xs: 2, sm: 4 },
                }}
              >
                <Typography variant="h3">Contact us</Typography>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={{ xs: 6, md: 15 }}
                  gap={4}
                  minHeight={{ xs: "auto", md: 700 }}
                  width="100%"
                  borderRadius={2}
                  sx={{
                    backgroundColor: "#33fca7",
                    position: "relative",
                    p: { xs: 1, sm: 2, md: 0 },
                  }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    gap={{ xs: 2.5, md: 4 }}
                    minHeight={{ xs: "auto", md: 700 }}
                    width="100%"
                    borderRadius={2}
                    sx={{
                      backgroundColor: "#fff",
                      position: { xs: "relative", md: "absolute" },
                      top: { md: 25 },
                      left: { md: 25 },
                      px: { xs: 2, sm: 4 },
                      py: { xs: 4, md: 6 },
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Typography variant="h5" fontWeight={600} color="#000">
                      Contact Us
                    </Typography>

                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#1fb98a",
                          },
                        },
                        "& label.Mui-focused": {
                          color: "#1fb98a",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#1fb98a",
                          },
                        },
                        "& label.Mui-focused": {
                          color: "#1fb98a",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#1fb98a",
                          },
                        },
                        "& label.Mui-focused": {
                          color: "#1fb98a",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#1fb98a",
                          },
                        },
                        "& label.Mui-focused": {
                          color: "#1fb98a",
                        },
                      }}
                    />

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1fb98a",
                        borderColor: "#1fb98a",
                        color: "#fff",
                        fontWeight: 600,
                        px: 4,
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#056f52",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
