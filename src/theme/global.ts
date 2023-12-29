import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, ul, li, span, img, a {
    display: block;
    max-width: 100%;
  }

  a, ul, li {
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #1f1f1f;
  }
`;
