import styled, { keyframes } from "styled-components";

const Dots = keyframes`
  from {
    transform: translateY(0);
    opacity: 0.72;

    background-color: #261F2A;
  }

  to {
    transform: translateY(30px);
    opacity: 1;

    background-color: #6c757d;
  }
`;

const GoToLeft = keyframes`
   from {
    transform: translateX(150px);
  }

  to {
    transform: translateX(-210px);
  }
`;

const GoToRight = keyframes`
  from {
    transform: translateX(-150px);
  }

  to {
    transform: translateX(212px);
  }
`;

const GoToCenter = keyframes`
  from {
    transform: translateY(-120px);
  }

  to {
    transform: translate3d(-5px, 0px, 0px);
  }
`;

const AnimateFromDown = keyframes`
  from {
    transform: translate3d(0, 100px, 0);
  }

  to {
    transform: translate3d(0, 0px, 0);
  }
`;

const AnimateFromUp = keyframes`
  from {
    transform: translate3d(150px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
`;

export const Container = styled.main`
  padding: 1rem 2rem;
  display: flex;

  flex-direction: column;
  justify-content: center;

  align-items: center;
  text-align: center;

  .loading {
    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;

    margin: 1.175rem 0;
  }

  .loading > .dot {
    display: block;
    width: 15px;

    height: 15px;
    background-color: #6c757d;

    border-radius: 4px 4px 18px 18px;
    animation: ${Dots} 0.75s infinite alternate;
  }

  .dot:nth-child(1) {
    animation-delay: 0.1s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  .dot:nth-child(4) {
    animation-delay: 0.4s;
  }
`;

export const Picture = styled.div`
  margin-bottom: 1rem;
  img {
    width: 220px;
    height: 220px;

    object-fit: cover;
    border-radius: 50%;

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Heading = styled.div`
  /* margin-left: 1rem; */
  text-align: center;

  h1 {
    font-size: 1.5rem; // 22px
    font-weight: 500;
    line-height: 1.5rem;
  }

  p {
    font-size: 0.875rem; // 14px
    font-weight: 400;
    line-height: 1.5rem;

    color: #6c757d;
  }

  .heading-links {
    display: flex;
    justify-content: space-between;

    align-items: center;
    margin-top: 12px;

    cursor: pointer;

    a {
      color: #1f1f1f;
      transition: 0.2s ease-in-out;
    }

    a:hover {
      color: #fcae1e;
    }
  }
`;

export const Bio = styled.div`
  width: 460px;

  margin-top: 1rem;
  /* margin-left: 50px; */

  .info-heading {
    display: flex;
    justify-content: space-between;

    align-items: center;
    gap: 2rem;
  }

  .info > h2 {
    font-weight: 600;
    font-size: 1rem; //16px
    color: #1f1f1f;
  }

  .info > p {
    font-weight: 400;
    font-size: 0.875rem; // 14px

    color: #6c757d;
  }

  a {
    width: 100%;

    margin: 1rem 0;
    height: 50px;

    border: 0;

    background-color: #32a6fa;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 600;

    color: #f2f2f2;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: relative;
      top: -2px;
      right: -8px;
    }

    transition: 0.22s ease-in-out;

    &:hover {
      filter: brightness(1.12);
    }
  }
`;

export const SelectForm = styled.div`
  width: 620px;
  overflow: hidden;

  margin-top: 1rem;
  /* margin-left: 50px; */

  [data-active="false"] {
    display: none;
    opacity: 0;
  }

  [data-active="true"] {
    opacity: 1;
  }

  [data-animation="down"] {
    animation: ${AnimateFromDown} 0.32s forwards;
  }

  [data-animation="up"] {
    animation: ${AnimateFromUp} 0.32s forwards;
  }

  [data-animation="top"] {
    animation: ${AnimateFromUp} 0.32s forwards;
  }
`;

export const SelectHeading = styled.div`
  width: 100%;
  background-color: #f2f2f2;

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;

  height: 50px;
  border-radius: 4px;

  position: relative;
  cursor: pointer;

  span {
    position: relative;
    z-index: 100;

    font-size: 1rem;
    font-weight: 400;

    width: 100%;
    padding: 4px 8px;
  }

  span:nth-child(2) {
    right: 10px;
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  .stack {
    margin-top: 2rem;
  }

  .skill-title {
    font-weight: 600;
    font-size: 1.5rem;
    color: #111;

    transition: 0.3s ease-in-out;
  }

  .skill-title:hover {
    opacity: 0.72;
  }

  .stack > ul {
    margin-top: 1rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stack > ul li {
    display: flex;
    align-items: flex-start;
    gap: 4px;
  }

  .skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .skill h2 {
    font-size: 1rem;
    font-weight: 700;
    color: #1f1f1f;

    line-height: 1.5rem;
    transition: 0.3s ease-in-out;
  }

  .skill h2:hover {
    opacity: 0.72;
  }

  .skill p {
    font-size: 13px;
    font-weight: 500;
    color: #6c757d;
    text-transform: capitalize;

    transition: 0.3s ease-in-out;
  }

  .skill p:hover {
    filter: brightness(0.12);
  }
`;

export const Portfolio = styled.div`
  margin-top: 2rem;
  display: grid;

  grid-template-areas:
    "about about"
    "education education"
    "certificate certificate"
    "experience experience"
    "languages languages"
    "others others";
  gap: 1rem;

  .portfolio-wrap > h2 {
    font-size: 1.5rem;
    font-weight: 600;

    line-height: 1.5rem;
    color: #111;

    margin-bottom: 1.2rem;
  }

  .portfolio-wrap > p {
    font-size: 0.875rem;
    font-weight: 400;

    line-height: 1.5rem;
    color: #6c757d;

    margin-bottom: 8px;
  }
`;

export const Contact = styled.div`
  text-align: left;
  margin-top: 2rem;

  .contact-heading > div {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 1rem;
  }

  .contact-heading > div > h2 {
    font-size: 1.5rem;
    font-weight: 600;

    line-height: 1.5rem;
    color: #1f1f1f;
  }

  .contact-heading > p {
    font-size: 1rem;
    font-weight: 400;

    line-height: 1.5rem;
    color: #6c757d;
  }

  .contact-list-container {
    margin-top: 1rem;
  }

  .contact-list > li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 1rem;
  }

  .contact-list li > a {
    margin: 0;
    transition: ease-in-out 0.2s;
  }

  .contact-list li > a:hover {
    filter: brightness(1.5);
  }

  .contact-list li h3 {
    font-weight: 600;
    font-size: 1.3rem;

    color: #1f1f1f;
  }

  .contact-list p,
  a {
    font-size: 1rem;
    font-weight: 400;

    line-height: 1.5rem;
    color: #6c757d;

    margin-top: 8px;
  }

  .link-border {
    text-decoration: underline 1px solid #c2c2c2;
    text-underline-offset: 4px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
`;

export const Experience = styled.div`
  text-align: left;
  width: 100%;

  grid-area: experience;
`;

export const Certificate = styled.div`
  text-align: left;
  width: 100%;

  grid-area: certificate;
`;

export const Languages = styled.div`
  text-align: left;
  width: 100%;

  grid-area: languages;
`;

export const Education = styled.div`
  text-align: left;
  width: 100%;

  grid-area: education;
`;

export const AboutMe = styled.div`
  text-align: left;
  width: 100%;

  grid-area: about;
`;

export const Others = styled.div`
  text-align: left;
  width: 100%;

  grid-area: others;
`;

export const ExperienceList = styled.ul`
  width: 100%;
  margin-top: 1rem;

  & > li {
    margin-bottom: 12px;
  }

  .experience-heading {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .experience-info > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;

    color: #32a6fa;
    transition: ease-in-out 0.32s;
  }

  .experience-info > h2:hover {
    opacity: 0.82;
  }

  .experience-info-list li {
    margin-bottom: 8px;
  }

  .time-worked {
    font-weight: 400;
    font-size: 1rem;
    color: #6c757d;
  }
`;

interface IActive {
  animateDirection: "left" | "right" | "center";
}

function handleDirection(animateDirection: string) {
  if (animateDirection === "left") {
    return GoToLeft;
  } else if (animateDirection === "right") {
    return GoToRight;
  }

  return GoToCenter;
}

export const Active = styled.div<IActive>`
  width: 30%;
  height: 80%;

  display: block;

  position: absolute;
  background-color: white;
  border-radius: 4px;

  animation: ${({ animateDirection }) => handleDirection(animateDirection)}
    forwards 0.3s;
  overflow: hidden;
`;
