"use client";

import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const flexDirection = useBreakpointValue<"row" | "column">({
    base: "column",
    lg: "row",
  });
  const heroBoxWidth = useBreakpointValue({ base: "100%", lg: "30%" });
  const imageBoxWidth = useBreakpointValue({ base: "100%", lg: "69%" });

  const imageSrc = useBreakpointValue({
    base: "/images/contents/main_3_m.png", // 모바일용 이미지
    md: "/images/contents/main_3.png", // 데스크톱용 이미지
  });

  const heroImageSrc = useBreakpointValue({
    base: "/images/contents/msec01_sld_img02m.png", // 모바일용 이미지
    md: "/images/contents/msec01_sld_img02.png", // 데스크톱용 이미지
  });

  return (
    <>
      <Global
        styles={{
          "@keyframes slideUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(50px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
          ".slide-content": {
            opacity: 1,
            transform: "translateY(0)",
          },
          ".slide-content.active": {
            animation: "slideUp 0.8s ease-out forwards",
          },
        }}
      />
      <Box className="msec01" mb={{ base: "25px", md: "45px" }}>
        <Box w={"100%"} maxW={"1600px"} mx="auto" my={0}>
          <Flex
            className="msec01-box"
            gap={5}
            direction={flexDirection}
            justifyContent="space-between"
          >
            <Box
              w={imageBoxWidth}
              position="relative"
              overflow="hidden"
              className="swiper-container"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.activeIndex);

                  // 모든 슬라이드 컨텐츠에서 active 클래스 제거
                  const allContents =
                    document.querySelectorAll(".slide-content");
                  allContents.forEach((content) => {
                    content.classList.remove("active");
                  });

                  // 현재 활성화된 슬라이드의 컨텐츠에 active 클래스 추가
                  setTimeout(() => {
                    const activeContents = document.querySelectorAll(
                      `.swiper-slide-active .slide-content`
                    );
                    activeContents.forEach((content) => {
                      content.classList.add("active");
                    });
                  }, 50);
                }}
              >
                <SwiperSlide>
                  <Box
                    w="100%"
                    position="relative"
                    display="block"
                    h={{ base: "400px", md: "auto" }}
                    borderRadius={{ base: "15px", md: "0" }}
                    mt={{ base: "10px" }}
                    overflow="hidden"
                  >
                    <AspectRatio ratio={1088 / 620} w="100%" h="100%">
                      <Image
                        src={heroImageSrc}
                        alt="새로운 여정의 시작"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </AspectRatio>
                    <Box
                      className={`slide-content ${
                        activeSlide === 0 ? "active" : ""
                      }`}
                      position="absolute"
                      bottom="0"
                      left="0"
                      zIndex="2"
                    >
                      <Box bg="transparent" pt={6} pr={6} pb={6} pl={0}>
                        <Text
                          fontSize={{ base: "14px", md: "20px", lg: "28px" }}
                          fontWeight="semibold"
                          color="#1F2732"
                          display={{ base: "none", md: "block" }}
                        >
                          도심 속 합리적인 컨벤션 & 스테이
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
            <Box
              backgroundColor="#2E3192"
              borderRadius="20px"
              w={heroBoxWidth}
              overflow="hidden"
            >
              <Box>
                <Link href="https://hub.hotelstory.com/aG90ZWxzdG9yeQ/rooms?v_Use=MTAwMTg5MA">
                  <Image
                    src={imageSrc}
                    alt="호텔 실시간 예약"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    cursor="pointer"
                    margin="auto"
                  />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
