import styled from "styled-components";

export const ExperienceList = styled.ul`
  width: 100%;
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-content: space-between;

  gap: 1rem;

  & > li {
    width: 100%;
    margin-bottom: 12px;
  }

  .experience-heading {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .experience-info > h2 {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;

    color: #32a6fa;
    transition: ease-in-out 0.32s;
  }

  .experience-info > h2:hover {
    opacity: 0.82;
  }

  .experience-info-list li {
    margin-bottom: 8px;
  }

  .info-list-time {
    font-weight: 500;
    font-size: 1rem;
    color: #111;
  }

  .info-list-download {
    font-weight: 500;
    font-size: 14px;
    color: #6c757d;

    transition: 0.3s ease-in-out;
  }

  .info-list-download:hover {
    color: #32a6fa;
  }

  .info-list-skills {
    display: flex;
    align-items: center;
  }
`;
