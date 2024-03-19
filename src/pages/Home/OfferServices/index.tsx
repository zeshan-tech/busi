import Card from "./Card";
import { Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function OfferServices() {
  return (
    <Container>
      <Typography variant='h4' mt={8} mb={4} textAlign={"center"}>
        Services we offer
      </Typography>
      <Stack component={Swiper} slidesPerView={3} spaceBetween={100} loop>
        {cards.map((card) => (
          <SwiperSlide>
            <Card avatarSrc={card.avatarSrc} title={card.title} description={card.description} />
          </SwiperSlide>
        ))}
      </Stack>
    </Container>
  );
}

const cards = [
  {
    title: "Website Development",
    avatarSrc: "https://www.svgrepo.com/show/4087/web-development.svg",
  },
  {
    title: "Mobile app Development",
    avatarSrc: "https://logowik.com/content/uploads/images/android-icon9502.logowik.com.webp",
  },
  {
    title: "Software Development",
    avatarSrc: "https://pic.onlinewebfonts.com/thumbnails/icons_229177.svg",
  },
  {
    title: "Website Development",
    avatarSrc: "https://www.svgrepo.com/show/4087/web-development.svg",
  },
];
