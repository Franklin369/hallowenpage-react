import styled from "styled-components";
import { Categorias } from "./Categorias";
import { About } from "./About";
import { Productos } from "./Productos";
import { Party } from "./Party";
import img1 from "../assets/img/pngwing.com (50).png";
import img2 from "../assets/img/pngwing.com (62).png";
import img3 from "../assets/img/pngwing.com (53).png";
import ScrollReveal from "scrollreveal";
export function Main() {
  return (
    <Container>
      <main class="main">
        <section class="home section" id="home">
          <div class="shape__small"></div>
          <div class="shape__big"></div>

          <div class="home__container container grid">
            <div class="home__data">
              <h1 class="home__title">
                <span>Halloween</span> Truco o Transferencia!!!
                <img src={img1} alt="home image" class="home__title-img-1" />
                <img src={img1} alt="home image" class="home__title-img-2" />
              </h1>

              <p class="home__description">La calle esta dura</p>

              <a href="#" class="button">
                Visitar!!!
              </a>
            </div>

            <img src={img2} alt="home image" class="home__img" />

            <img src={img1} alt="home image" class="home__tree-1" />
            <img src={img3} alt="home image" class="home__tree-2" />
          </div>
        </section>

        <Categorias />

        <About />

        <Productos />

        <Party />
      </main>
    </Container>
  );
}
const Container = styled.div`
  .home {
    position: relative;

    &__container {
      padding-top: 3.5rem;
    }
    &__data {
      text-align: center;
    }
    &__title {
      position: relative;
      font-size: var(--biggest-font-size);
      line-height: 140%;
      width: max-content;
      margin: 0 auto 0.5rem;

      & span {
        display: block;
        font-family: var(--second-font);
        font-weight: initial;
        color: var(--first-color);
      }
      &-img-1,
      &-img-2 {
        width: 40px;
        position: absolute;
      }
      &-img-1 {
        top: -1rem;
        left: -1.5rem;
        transform: rotate(-15deg);
        animation: animate-star-1 5s infinite ease-in-out;
      }
      &-img-2 {
        bottom: 2.75rem;
        right: -1.5rem;
        transform: rotate(15deg);
        animation: animate-star-2 5s infinite ease-in-out;
      }
    }
    &__description {
      margin-bottom: 2.5rem;
    }
    &__img {
      width: 300px;
      justify-self: center;
      margin-top: 1.5rem;
      animation:flotar 1.9s ease-in-out infinite alternate;
    }
   
    &__tree-1,
    &__tree-2 {
      width: 120px;
      position: absolute;
      top: 18rem;
    }
    &__tree-1 {
      left: -2rem;
    }
    &__tree-2 {
      right: -2rem;
    }
    & .shape__small {
      top: -3rem;
      left: -3rem;
    }
    & .shape__big {
      bottom: 5rem;
      right: -10rem;
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
    @keyframes animate-star-1 {
      0% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
      50% {
        transform: scale(1) rotate(-15deg);
        opacity: 1;
      }
      100% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
    }
    @keyframes animate-star-2 {
      0% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
      50% {
        transform: scale(0.7) rotate(15deg);
        opacity: 0.2;
      }
      100% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
    }
  }
`;
