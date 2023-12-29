import { useCallback, useEffect, useState } from "react";
import {
  BookOpen,
  CheckCircle,
  DownloadSimple,
  Football,
  GithubLogo,
  LinkedinLogo,
  MusicNote,
  Note,
  Student,
  Suitcase,
} from "phosphor-react";

import Picture from "../../assets/picture.png";
import CV from "../../assets/Currículo em Inglês.pdf";

import * as Styled from "./styles";
import useFetch from "../../hooks/useFetch";

interface IResponse {
  avatar_url: string;
  location: string;
  bio: string;
  public_repos: string;
}

type IDirection = "left" | "right";
type ISelect = "portfolio" | "skills";

export default function Home() {
  const { data, loading } = useFetch<IResponse>(
    "https://api.github.com/users/RuanDevJs"
  );

  const [direction, setDirection] = useState<IDirection>("right");
  const [activeSelect, setActiveSelect] = useState<ISelect>("skills");

  const handleToggleSelect = useCallback((direction: IDirection) => {
    if (direction === "right") {
      setDirection("right");
      setActiveSelect("skills");
    } else {
      setDirection("left");
      setActiveSelect("portfolio");
    }
  }, []);

  useEffect(() => {
    if (!loading && data !== null) {
      const responseFormatted: IResponse = {
        avatar_url: data.avatar_url,
        bio: data.bio,
        location: data.location,
        public_repos: data.public_repos,
      };

      const dataToJson = JSON.stringify(responseFormatted);
      window.localStorage.setItem("@ruan-vitor:portfolio", dataToJson);
    }
  }, [loading, data]);

  return (
    <Styled.Container>
      <Styled.Picture>
        <img src={Picture} alt="Picture Profile" draggable="false" />
      </Styled.Picture>

      <Styled.Heading>
        <h1>Ruan Vitor</h1>
        <p>Front End Developer</p>

        {loading ? (
          <div className="loading">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        ) : (
          <div className="heading-links">
            <a href="https://github.com/RuanDevJs">
              <GithubLogo size={32} weight="fill" />
            </a>
            <a href="https://dev.to/ruanvitor">
              <Note size={32} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
              <LinkedinLogo size={32} weight="fill" />
            </a>
          </div>
        )}
      </Styled.Heading>

      <Styled.Bio>
        <div className="info-heading">
          <div className="info">
            <h2>2</h2>
            <p>Years of Work</p>
          </div>
          <div className="info">
            <h2>+{data?.public_repos}</h2>
            <p>Completed Projects</p>
          </div>
          <div className="info">
            <h2>Location</h2>
            <p>{data?.location}</p>
          </div>
        </div>
        <a href={CV} download>
          <span>Download CV</span>
          <DownloadSimple size={24} />
        </a>
      </Styled.Bio>

      <Styled.SelectForm>
        <div className="select-heading">
          <span onClick={() => handleToggleSelect("left")}>About Me</span>
          <span onClick={() => handleToggleSelect("right")}>Skills</span>
          <Styled.Active animateDirection={direction} />
        </div>

        <Styled.Portfolio
          data-animation="up"
          data-active={activeSelect === "portfolio"}
        >
          <Styled.AboutMe className="portfolio-wrap">
            <h2>About Me</h2>
            <p>
              Currently, I am actively seeking new job opportunities and
              challenges, always ready to learn new technologies, tools, and
              gain fresh experiences as a developer.
            </p>
          </Styled.AboutMe>
          <Styled.Education className="portfolio-wrap">
            <h2>Education</h2>
            <Styled.ExperienceList>
              <li>
                <div className="experience-heading">
                  <Student color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>COTEMIG Integrated Technical Course</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">
                          High School and Technical Course
                        </p>
                      </li>
                      <li>
                        <p className="time-worked">Jan 2020 - Dec 2021</p>
                      </li>
                      <li>
                        <p className="time-worked">
                          Belo Horizonte, Minas Gerais, Brasil (Remote)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </Styled.ExperienceList>
          </Styled.Education>
          <Styled.Experience className="portfolio-wrap">
            <h2>Experience</h2>
            <Styled.ExperienceList>
              <li>
                <div className="experience-heading">
                  <Suitcase color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>Speed IO</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">Front-end Development</p>
                      </li>
                      <li>
                        <p className="time-worked">Jan 2022 - Aug 2023</p>
                      </li>
                      <li>
                        <p className="time-worked">
                          São Paulo, São Paulo, Brasil (Remote)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="experience-heading">
                  <Suitcase color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>Verticis Webstudio</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">Software Development Intern</p>
                      </li>
                      <li>
                        <p className="time-worked">Jun 2021 - Dec 2021</p>
                      </li>
                      <li>
                        <p className="time-worked">
                          Belo Horizonte, Minas Gerais, Brasil
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </Styled.ExperienceList>
          </Styled.Experience>
          <Styled.Others className="portfolio-wrap">
            <h2>Others</h2>
            <Styled.ExperienceList>
              <li>
                <div className="experience-heading">
                  <MusicNote color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>Music Student</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">
                          Electric Guitar, Acoustic Guitar and Singing
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="experience-heading">
                  <Football color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>Sports</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">
                          Calisthenics, Bodybuilding and Running
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="experience-heading">
                  <BookOpen color="#32a6fa" size={32} />
                  <div className="experience-info">
                    <h2>Books</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="job-title">
                          The Hobbit, Neuromancer, Spider Man and Batman Comix
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </Styled.ExperienceList>
          </Styled.Others>
        </Styled.Portfolio>

        <Styled.Skills
          data-animation="down"
          data-active={activeSelect === "skills"}
        >
          <div className="stack front-end">
            <h2 className="skill-title">Front End</h2>
            <ul>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>HTML</h2>
                  <p>Advanced</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>CSS</h2>
                  <p>Advanced</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>JavaScript</h2>
                  <p>Advanced</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>React</h2>
                  <p>Advanced</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>Next.js</h2>
                  <p>intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>Cypress</h2>
                  <p>intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>Vue.js</h2>
                  <p>beginner</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>React Native</h2>
                  <p>Advanced</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="stack back-end">
            <h2 className="skill-title">Back End</h2>
            <ul>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>Node.js</h2>
                  <p>Intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>PHP</h2>
                  <p>Intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>Ruby on Rails</h2>
                  <p>Beginner</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>TypeScript</h2>
                  <p>Intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>MySQL</h2>
                  <p>Intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>PostgreSQL</h2>
                  <p>Intermediate</p>
                </div>
              </li>
              <li>
                <div className="skill-icon">
                  <CheckCircle color="#32a6fa" size={24} />
                </div>
                <div className="skill">
                  <h2>MongoDB</h2>
                  <p>Intermediate</p>
                </div>
              </li>
            </ul>
          </div>
        </Styled.Skills>
      </Styled.SelectForm>
    </Styled.Container>
  );
}
