import React, { useRef, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const slides = [
  {
    id: 1,
    subtitle: "Hành trình làm mẹ thật đẹp",
    title: "Mỗi khoảnh khắc bên con là một điều kỳ diệu",
    image: "https://giadinh.mediacdn.vn/296230595582509056/2022/1/14/5-1642153981688643915614.jpg",
  },
  {
    id: 2,
    subtitle: "Dinh dưỡng & Yêu thương",
    title: "Sức khỏe của mẹ là hạnh phúc của con",
    image: "https://cdn.arttimes.vn/upload/1-2024/images/2024-01-22/3-cau-noi-cua-me-truyen-dong-luc-de-con-biet-yeu-thuong-ban-than-song-hanh-phuc-baner-1705893593-62-width680height360.jpg",
  },
  {
    id: 3,
    subtitle: "Khoảnh khắc đầu tiên",
    title: "Cảm giác tuyệt vời khi lần đầu ôm con vào lòng",
    image: "https://giadinh.mediacdn.vn/296230595582509056/2022/1/14/4-1642153981660385841581.png",
  },
  {
    id: 4,
    subtitle: "Nuôi dưỡng hạnh phúc",
    title: "Chế độ ăn uống khoa học giúp mẹ và bé luôn khỏe mạnh",
    image: "https://cdn.tgdd.vn/Files/2024/01/11/1559359/thuc-hu-viec-khong-nen-an-do-thua-cua-ba-bau-do-xui-xeo-202401111108389909.jpg",
  },
  {
    id: 5,
    subtitle: "Từng bước trưởng thành",
    title: "Những khoảnh khắc đầu đời quý giá của con yêu",
    image: "https://vn1.vdrive.vn/alohamedia.vn/2024/06/Untitled3.jpg",
  },
  {
    id: 6,
    subtitle: "Cùng con khám phá thế giới",
    title: "Mỗi ngày là một cuộc phiêu lưu mới đầy thú vị",
    image: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cung_con_choi_de_kham_pha_the_gioi_1_30ae2a8ecd.png",
  },
];



const HeroBanner = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: titleRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0.5 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: imageRef.current, start: "top 60%" } }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 0.08, duration: 2, ease: "power2.out", scrollTrigger: { trigger: textRef.current, start: "top 80%" } }
    );
  }, []);

  const petals = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    left: Math.random() * 150,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 3,
    rotation: Math.random() * 360,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#fdeef4",
        color: "#333",
        position: "relative",
        padding: "80px 20px",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <Typography
        ref={textRef}
        variant="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "60px", md: "150px" },
          fontWeight: 900,
          letterSpacing: "15px",
          color: "#e91e63",
          opacity: 0.05,
          zIndex: 0,
        }}
      >
        MOMUNI
      </Typography>

      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: "-10vh", opacity: 1, rotate: petal.rotation }}
          animate={{ y: "100vh", opacity: 0, rotate: petal.rotation + 180 }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${petal.left}%`,
            fontSize: "24px",
          }}
        >
          🌸
        </motion.div>
      ))}

      <Swiper spaceBetween={20} slidesPerView={1} loop>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Container>
              <Box
                ref={titleRef}
                sx={{
                  maxWidth: "800px",
                  margin: "auto",
                  py: 5,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#e91e63", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold", fontSize: "18px" }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "28px", md: "48px" },
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {slide.title}
                </Typography>
              </Box>

              <motion.div
                ref={imageRef}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: 20 }}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    borderRadius: "20px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e91e63",
              color: "#fff",
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              fontSize: "16px",
              "&:hover": { backgroundColor: "#d81b60" },
            }}
          >
            Khám phá ngay
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroBanner;
