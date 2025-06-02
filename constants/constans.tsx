
export type OnboardingSwiperDataType = {
    id: number;
    title: string;
    description: string;
    sortDescrition: string;
    sortDescrition2?: string; 
    image: any;
  };
  
  export type BannerDataTypes = {
    bannerImageUrl: any;
  };
  
 //data identification
  export const onboardingSwiperData: OnboardingSwiperDataType[] = [
    {
      id: 1,
      title: "Start your learning journey with a dose of fun!",
      description: "Our engaging learning videos will spark your curiosity and make learning enjoyable.",
      sortDescrition: "your curiosity & enjoyable.",
      image: require("@/assets/onboarding/intro_1.png"),
    },
    {
      id: 2,
      title: "Discover your passion, elevate your expertise",
      description: "Our comprehensive courses and expert instructors will guide you every step of the way.",
      sortDescrition: "instructors to guide every step.",
      image: require("@/assets/onboarding/intro_2.png"),
    },
    
     {
      id: 3,
      title: "Achieve success through interactive learning",
      description: "Your learning path leads to achievement.",
      sortDescrition: "Complete your courses and celebrate your progress.",
      image: require("@/assets/onboarding/intro_3.png"),
    },

  ];
  
  export const bannerData: BannerDataTypes[] = [
    {
      bannerImageUrl: require("../assets/banner/1.jpg"),
    },
    {
      bannerImageUrl: require("../assets/banner/2.webp"),
    },
    {
      bannerImageUrl: require("../assets/banner/3.webp"),
    },
    {
      bannerImageUrl: require("../assets/banner/4.webp"),
    },
  ];
  