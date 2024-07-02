import styled from "styled-components";

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

  .info-list-description {
    font-weight: 500;
    font-size: 1.2rem;
    color: #111;
  }

  .info-list-time,
  .info-list-city {
    font-weight: 400;
    font-size: 1rem;
    color: #6c757d;
  }

  .info-list-skills {
    /* display: flex;
    align-items: center; */
  }

  .info-list-skills ul li {
    margin: 8px 0 0 12px;
  }

  .info-list-skills ul li span {
    list-style: circle !important;
    display: inline;
  }

  #span-skills {
    font-weight: 600;
    color: #32a6fa !important;
  }

  .info-list-skills ul li h4 {
    font-weight: 600;
    font-size: 1rem;
    color: #111;
  }

  .info-list-skills > ul li span {
    font-weight: 400;
    font-size: 14px;
    color: rgb(108, 117, 125);

    line-height: 1.5rem;
    margin-left: 5px;
  }

  .info-list-skills span {
    font-weight: 500;
    font-size: 1rem;
    color: #111;
  }

  .info-list-details {
    font-weight: 400;
    font-size: 0.875rem;

    line-height: 1.5rem;
    color: #6c757d;

    margin-top: 8px;
  }
`;
