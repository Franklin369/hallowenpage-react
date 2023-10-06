import styled from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import img1 from "../assets/img/shape-bg.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { ScrollToTop } from "../components/ScrollToTop";
export function Home() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  useEffect(() => {
    sr.reveal(
      `.home__data, .footer__content, .footer__logo, .footer__description`
    );
    sr.reveal(`.home__tree-1`, { origin: "left", delay: 800 });
    sr.reveal(`.home__tree-2`, { origin: "right", delay: 800 });
    sr.reveal(`.home__img`, { delay: 800 });
    sr.reveal(`.category__card, .items__card`, { interval: 100 });
    sr.reveal(`.about__img, .about__data, .footer__tree-2`, { origin: "left" });
    sr.reveal(`.party__images, .party__data, .footer__tree-1`, {
      origin: "right",
    });
  }, []);

  return (
    <Container>
      <img src={img1} alt="" class="shape__bg" />
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />{" "}
    </Container>
  );
}
const Container = styled.div`
  .container {
    max-width: 1024px;
    margin-inline: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .section {
    padding-block: 5rem 1.5rem;

    &__title {
      font-size: var(--h1-font-size);
      font-family: var(--second-font);
      font-weight: initial;
      line-height: 130%;
      color: var(--first-color);
      text-align: center;
      margin-bottom: 2.5rem;
    }
  }

  .main {
    overflow: hidden;
  }

  .shape {
    &__bg {
      position: fixed;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      mix-blend-mode: soft-light;
      opacity: 0.5;
      z-index: -1;
    }
    &__small,
    &__big {
      position: absolute;
      background-color: var(--first-color);
      border-radius: 50%;
      filter: blur(96px);
      z-index: -2;
    }
    &__small {
      width: 150px;
      height: 150px;
    }
    &__big {
      width: 250px;
      height: 250px;
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 340px) {
    .container {
      margin-inline: 1rem;
    }

    .home {
      &__title {
        font-size: 1.5rem;
      }
      &__tree-1 {
        left: -4rem;
      }
      &__tree-2 {
        right: -4rem;
      }
    }

    .items__container {
      grid-template-columns: 180px;
    }

    .party__img {
      width: 200px;
    }

    .footer__content {
      gap: 2.5rem;
    }
  }

  @media screen and (min-width: 576px) {
    .home__container,
    .about__container,
    .party__container {
      grid-template-columns: 0.6fr;
      justify-content: center;
    }

    .home__tree-1,
    .home__tree-2 {
      width: 200px;
    }

    .items__container {
      grid-template-columns: repeat(2, 200px);
    }

    .footer__content {
      grid-template-columns: repeat(3, max-content);
    }
  }

  @media screen and (min-width: 767px) {
    .section {
      padding-block: 7rem 1.5rem;

      &__title {
        margin-bottom: 4rem;
      }
    }

    .nav {
      height: calc(var(--header-height) + 1.5rem);

      &__toggle,
      &__close,
      &__img {
        display: none;
      }
      &__list {
        flex-direction: row;
        column-gap: 4rem;
      }
    }

    .category__container {
      grid-template-columns: repeat(2, 228px);
      column-gap: 4rem;
    }

    .footer__content {
      grid-template-columns: repeat(4, max-content);
    }
  }

  @media screen and (min-width: 1024px) {
    .shape__small,
    .shape__big {
      filter: blur(132px);
      opacity: 0.5;
    }
    .shape__small {
      width: 350px;
      height: 350px;
    }
    .shape__big {
      width: 450px;
      height: 450px;
    }

    .home {
      &__title-img-1,
      &__title-img-2 {
        width: 60px;
      }
      &__title-img-2 {
        bottom: 5.75rem;
      }
      &__description {
        padding: 0 7.5rem;
      }
      &__tree-1,
      &__tree-2 {
        width: 300px;
        top: 14rem;
      }
      &__img {
        width: 500px;
      }
    }

    .category {
      &__container {
        grid-template-columns: repeat(3, 254px);
      }
      &__card {
        padding: 6rem 2.5rem 2rem;
      }
      &__img {
        width: 150px;
      }
      &__star {
        right: 1rem;
      }
      & .shape__small {
        top: 10rem;
        left: -12rem;
      }
    }

    .about {
      &__img {
        order: -1;
        width: 500px;
      }
      &__container {
        padding-top: 2rem;
        grid-template-columns: max-content 0.9fr;
        column-gap: 7rem;
        align-items: center;
      }
      & .shape__big {
        bottom: -12rem;
      }
    }

    .about__data,
    .party__data {
      text-align: initial;
    }

    .about__container .section__title,
    .party__container .section__title {
      text-align: initial;
      margin-bottom: 1.5rem;
    }

    .about__description,
    .party__description {
      margin-bottom: 2.5rem;
    }

    .items {
      &__container {
        grid-template-columns: repeat(3, 200px);
        gap: 6rem 3.5rem;
      }
      &__card {
        padding: 6rem 1rem 1.5rem;
      }
      &__img {
        width: 130px;
      }
      &__name {
        font-size: var(--h3-font-size);
      }
      &__button i {
        font-size: 1.5rem;
      }
      & .shape__big {
        bottom: -12rem;
      }
    }

    .party {
      &__container {
        padding-top: 5rem;
        grid-template-columns: 0.7fr max-content;
        column-gap: 8rem;
        align-items: center;
      }
      &__img {
        width: 400px;
      }
      &__star-1,
      &__star-2 {
        width: 100px;
      }
      &__star-1 {
        top: -5rem;
        left: -5rem;
      }
      &__star-2 {
        right: -3rem;
        bottom: 3rem;
      }
    }

    .footer {
      &__container {
        grid-template-columns: repeat(2, max-content);
        justify-content: space-between;
      }
      &__logo {
        font-size: var(--h3-font-size);
        margin-bottom: 1.5rem;
      }
      &__content {
        column-gap: 5rem;
      }
      &__link {
        font-size: var(--normal-font-size);
      }
      &__social {
        column-gap: 1.5rem;

        &-link {
          font-size: 1.5rem;
        }
      }
      &__copy {
        margin: 10rem 0 4rem;
      }
      &__tree-1,
      &__tree-2 {
        width: 250px;
      }
      &__tree-1 {
        top: initial;
        bottom: 1.5rem;
        right: -2rem;
      }
      &__tree-2 {
        bottom: -1.5rem;
      }
      & .shape__big {
        bottom: -16rem;
      }
    }

    .scrollup {
      right: 3rem;
    }
  }

  @media screen and (min-width: 1072px) {
    .container {
      margin-inline: auto;
    }
  }

  @media screen and (min-width: 1248px) {
    .home {
      &__tree-1,
      &__tree-2 {
        width: 450px;
      }
      &__img {
        width: 600px;
        margin-top: 3rem;
      }
    }

    .footer__tree-2 {
      left: 10%;
    }
  }

  @media screen and (min-width: 2048px) {
    .home {
      &__container {
        position: relative;
        max-width: 1400px;
        overflow: hidden;
      }
      &__tree-1,
      &__tree-2 {
        top: 5rem;
      }
    }

    .footer__tree-1,
    .footer__tree-2 {
      width: 300px;
    }
  }
`;
