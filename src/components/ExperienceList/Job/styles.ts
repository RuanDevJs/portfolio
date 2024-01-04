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
    display: flex;
    align-items: center;
  }

  .info-list-skills p {
    font-weight: 400;
    font-size: 1rem;
    color: #111;

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
  }
`;
