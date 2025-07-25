import { Box, Heading } from "@chakra-ui/react";
import { HeroSection } from "./component/HeroSection";
import { ApplySection } from "./component/ApplySection";
import { NoticeSection } from "./component/NoticeSection";
import { MarqueeSection } from "./component/MarqueeSection";
import { EstimateSection } from "./component/EstimateSection";

const MainSection = () => {
  return (
    <Box
      as="main"
      id="mainContent"
      pt={100}
      fontFamily="'Paperlogy', sans-serif"
      lineHeight="1"
      maxW={{ base: "90%", "2xl": "1600px" }}
      mx="auto"
    >
      <Heading
        as="h3"
        mb={{ base: 5, md: 6, lg: 7 }}
        fontSize={{ base: "24px", md: "32px", lg: "40px" }}
        fontWeight="bold"
        color={"#444445"}
        lineHeight={"1"}
        fontFamily="'Paperlogy', sans-serif"
        w={"100%"}
        maxW={"1600px"}
        mx="auto"
        my={0}
      >
        광안리 · 해운대 · 센텀시티를 잇는 이상적인 허브
      </Heading>
      <HeroSection />
      <MarqueeSection />
      <NoticeSection />
      <ApplySection />
      {/* <EstimateSection /> */}
    </Box>
  );
};

export default MainSection;
