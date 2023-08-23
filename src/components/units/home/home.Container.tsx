import HomePresenter from "./home.Presenter";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
export default function HomeContainer() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <HomePresenter />
    </>
  );
}
