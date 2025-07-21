import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import alyssonSignature from "./assets/alyssu-signature.png";
import alyssonPhoto from "./assets/alyssu.jpeg";
import maxwellPhoto from "./assets/max_photo_01.jpeg";
import maxwellSignature from "./assets/signature.png";
import logo from "./assets/svgs/DoneThink.svg";
import video from "./assets/videos/233043.mp4";
import Wave from "./components/Wave";
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
import Logo from "./components/Logo";
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const half = Math.ceil(logos.length / 2);
  const firstHalf = logos.slice(0, half);
  const secondHalf = logos.slice(half);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
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
          height: 80,
          zIndex: 1300,
          background: isScrolled
            ? "linear-gradient(to bottom, #ffffff 90%, transparent)"
            : "transparent",
          transition: "background 0.6s ease-in-out",
        }}
      >
        <Box
          sx={{ maxWidth: 1280, mx: "auto", width: "100%" }}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Stack
            sx={{ width: 200, ml: 2, mt: 2, cursor: "pointer" }}
            onClick={handleLogoClick}
          >
            <CardMedia component="img" image={logo} />
          </Stack>
          <Stack direction="row" spacing={5} alignItems="center" mr={2}>
            {sections.map((section) => (
              <Typography
                key={section.id}
                sx={{
                  cursor: "pointer",
                  color: "#000",
                  borderBottom:
                    activeSection === section.id
                      ? "2px solid #33fca7"
                      : "2px solid transparent",
                  pb: 0.5,
                  transition: "border-color 0.3s",
                }}
                onClick={() => handleScrollTo(section.id)}
              >
                {section.label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </AppBar>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 80,
              left: 0,
              right: 0,
              height: "calc(100vh - 80px)",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1200,
            }}
          >
            <Logo />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="home"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Box
              id="home"
              sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ maxWidth: 1280, mx: "auto", px: 5 }}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  size={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "200%",
                      objectFit: "contain",
                    }}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </Grid>

                <Grid
                  size={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    sx={{
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
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100vw",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <Wave />
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "300px",
                background: `linear-gradient(
            to bottom,
            #33fca7 0%,
            #5efcb7 25%,
            #9efcd4 50%,
            #ccfce9 75%,
            #ffffff 100%
          )`,
              }}
            />

            <Box
              id="about"
              sx={{
                height: "100vh",
                width: "100%",
                mt: 5,
                pt: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: 4,
                }}
              >
                <Typography variant="h3">About us</Typography>

                <Stack
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={15}
                  gap={4}
                >
                  <Stack
                    flex={1}
                    height={600}
                    borderRadius={2}
                    border="2px solid #9efcd4"
                    sx={{
                      backgroundColor: "#9efcd4",
                      overflow: "visible",
                      position: "relative",
                      px: 2,
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={maxwellPhoto}
                      alt="Maxwell Siqueira"
                      sx={{
                        height: 160,
                        width: 160,
                        borderRadius: "50%",
                        position: "absolute",
                        top: -80,
                        left: 32,
                        zIndex: 10,
                        border: "2px solid #fff",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    />

                    <CardMedia
                      component="img"
                      image={maxwellSignature}
                      alt="Maxwell Siqueira"
                      sx={{
                        height: 80,
                        width: 300,
                        position: "absolute",
                        bottom: 90,
                        left: 150,
                        zIndex: 10,
                      }}
                    />

                    <Typography textAlign="center" mt={13}>
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

                    <Typography
                      fontWeight={600}
                      fontSize={18}
                      alignSelf="center"
                      mt={15}
                      color="#000"
                    >
                      Maxwell Siqueira
                    </Typography>
                    <Typography fontSize={14} alignSelf="center" color="#000">
                      Co-funder
                    </Typography>
                  </Stack>

                  <Stack
                    flex={1}
                    height={600}
                    borderRadius={2}
                    border="2px solid #9efcd4"
                    sx={{
                      backgroundColor: "#9efcd4",
                      overflow: "visible",
                      position: "relative",
                      px: 2,
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={alyssonPhoto}
                      alt="Alysson Sene"
                      sx={{
                        height: 160,
                        width: 160,
                        borderRadius: "50%",
                        position: "absolute",
                        top: -80,
                        left: 32,
                        zIndex: 10,
                        border: "2px solid #fff",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    />

                    <CardMedia
                      component="img"
                      image={alyssonSignature}
                      alt="Alysson Sene"
                      sx={{
                        width: 200,
                        position: "absolute",
                        bottom: 65,
                        left: 210,
                        zIndex: 10,
                      }}
                    />

                    <Typography textAlign="center" mt={13}>
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

                    <Typography
                      fontWeight={600}
                      fontSize={18}
                      alignSelf="center"
                      mt={24}
                      color="#000"
                    >
                      Alysson Sene
                    </Typography>
                    <Typography fontSize={14} alignSelf="center" color="#000">
                      Co-funder
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>

            <Box
              id="services"
              sx={{
                width: "100%",
                mt: 5,
                pt: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: 4,
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
                <Box sx={{ width: "100vw", overflow: "hidden", lineHeight: 0 }}>
                  <WaveAboutBot />
                </Box>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 10,
                    mx: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #078c66, #33fca7)",
                  }}
                >
                  <Stack maxWidth={1280}>
                    <Typography
                      fontWeight={600}
                      fontSize={26}
                      textAlign="center"
                      letterSpacing={1.5}
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

                <Box sx={{ width: "100vw", overflow: "hidden", lineHeight: 0 }}>
                  <WaveAboutTop />
                </Box>
              </Box>
            </Box>

            <Box
              id="clients"
              sx={{
                width: "100%",
                mt: 5,
                pt: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: 4,
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
                <Box sx={{ width: "100vw", overflow: "hidden", lineHeight: 0 }}>
                  <WaveClientsBot />
                </Box>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 10,
                    mx: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #33fca7, #078c66)",
                  }}
                >
                  <Box sx={{ maxWidth: 1280, mx: "auto", px: 4 }}>
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={16}
                      slidesPerView={5}
                      loop
                      speed={2000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                    >
                      {firstHalf.map((logo, index) => (
                        <SwiperSlide key={index}>
                          <Card
                            sx={{
                              height: 150,
                              width: 150,
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
                      spaceBetween={16}
                      slidesPerView={5}
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
                        <SwiperSlide key={index}>
                          <Card
                            sx={{
                              height: 150,
                              width: 150,
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

                <Box sx={{ width: "100vw", overflow: "hidden", lineHeight: 0 }}>
                  <WaveClientsTop />
                </Box>
              </Box>
            </Box>

            <Box
              id="contact"
              sx={{
                height: "100vh",
                width: "100%",
                mt: 5,
                pt: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1280,
                  mx: "auto",
                  px: 4,
                }}
              >
                <Typography variant="h3">Contact us</Typography>

                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={15}
                  gap={4}
                  height={700}
                  width="100%"
                  borderRadius={4}
                  sx={{
                    backgroundColor: "#33fca7",
                    position: "relative",
                  }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                    height={700}
                    width="100%"
                    borderRadius={4}
                    sx={{
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: 25,
                      left: 25,
                      px: 4,
                      py: 6,
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
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
              <Footer />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default App;
