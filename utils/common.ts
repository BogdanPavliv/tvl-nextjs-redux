import { Settings as SlickSettings } from 'react-slick';

interface ResponsiveSettings {
  breakpoint: number;
  settings: SlickSettings;
}

interface SliderChooseSettings extends SlickSettings {
  responsive?: ResponsiveSettings[];
}

export const sliderChooseSettings: SliderChooseSettings = {
  dots: false,
  arrows: false,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};


