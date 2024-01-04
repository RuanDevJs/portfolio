import { useCallback, useEffect, useState } from "react";
import {
  BookOpen,
  CheckCircle,
  DownloadSimple,
  Envelope,
  Football,
  GithubLogo,
  LinkedinLogo,
  MusicNote,
  Note,
  Phone,
} from "phosphor-react";

import Picture from "../../assets/picture.png";
import CV from "../../assets/Currículo em Inglês.pdf";

import {
  CERTIFICATE,
  EDUCATION,
  EXPERIENCE,
  Languages,
} from "../../services/AboutMe";

import JobList from "../../components/ExperienceList/Job";
import EducationList from "../../components/ExperienceList/Education";
import Certificates from "../../components/ExperienceList/Certificates";

import useFetch from "../../hooks/useFetch";
import * as Styled from "./styles";

interface IResponse {
  avatar_url: string;
  location: string;
  bio: string;
  public_repos: string;
}

type IDirection = "left" | "right" | "center";
type ISelect = "portfolio" | "skills" | "contact";

export default function Home() {
  const { data, loading } = useFetch<IResponse>(
    "https://api.github.com/users/RuanDevJs"
  );

  const [direction, setDirection] = useState<IDirection>("center");
  const [activeSelect, setActiveSelect] = useState<ISelect>("contact");

  const handleToggleSelect = useCallback((direction: IDirection) => {
    if (direction === "right") {
      setDirection("right");
      setActiveSelect("skills");
    } else if (direction === "center") {
      setDirection("center");
      setActiveSelect("contact");
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
        <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
          <img src={Picture} alt="Picture Profile" draggable="false" />
        </a>
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
        <Styled.SelectHeading>
          <span onClick={() => handleToggleSelect("left")}>About Me</span>
          <span onClick={() => handleToggleSelect("center")}>Contact</span>
          <span onClick={() => handleToggleSelect("right")}>Skills</span>
          <Styled.Active animateDirection={direction} />
        </Styled.SelectHeading>

        <Styled.Portfolio
          data-animation="up"
          data-active={activeSelect === "portfolio"}
        >
          {/* About Me */}
          <Styled.AboutMe className="portfolio-wrap">
            <h2>About Me</h2>
            <p>
              My name is Ruan Vitor Elpidio, and I am a 19-year-old Front-End
              Developer. In 2021, I successfully completed my high school
              education at COTEMIG Integrated Technical Course, where I gained
              expertise in web development, including JavaScript, PHP and MySQL
              concepts. In my last job as a Front End Developer (remote), I was
              in charge of creating features, fixing old codes, making E2E and
              simulating the customer experience on websites using Vue.js,
              TypeScript and Cypress. Besides that, I gained a pretty good
              experience at communication, listening, responsibility and
              understanding due my contact on the after sales team, where I had
              to help them, participate and guide 1:1 customers meetings (to
              resolve their problem, give them deadlines for a solution, take
              them easy).
            </p>
          </Styled.AboutMe>
          {/* Education */}
          <Styled.Education className="portfolio-wrap">
            <h2>Education</h2>
            <EducationList data={EDUCATION} />
          </Styled.Education>
          {/* Stacks Certificates */}
          <Styled.Certificate className="portfolio-wrap">
            <h2>Stacks Certificates</h2>
            <Certificates data={CERTIFICATE} />
          </Styled.Certificate>
          {/* Work Experience */}
          <Styled.Experience className="portfolio-wrap">
            <h2>Experience</h2>
            <JobList data={EXPERIENCE} />
          </Styled.Experience>
          {/* Languages */}
          <Styled.Languages className="portfolio-wrap">
            <h2>Languages</h2>
            <EducationList data={Languages} />
          </Styled.Languages>
          {/* Others */}
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

        <Styled.Contact
          data-animation="down"
          data-active={activeSelect === "contact"}
        >
          <div className="contact-heading">
            <div>
              <Phone size={25} color="#32a6fa" weight="light" />
              <h2>Contact Me</h2>
            </div>
            <p>
              {" "}
              I have a nice experience working from home. My last job was
              totally remote. Every start of the week my team had a meeting in
              the morning to create a report of what tasks each one will work on
              during the week. After we had meetings in the afternoons to
              describe the progress of each task that was in report from each
              one.{" "}
            </p>
          </div>
          <div className="contact-list-container">
            <ul className="contact-list">
              <li>
                <div className="icon">
                  <Envelope size={32} color="#32a6fa" weight="light" />
                </div>
                <div>
                  <h3>E-mail </h3>
                  <p>ruanvelpidio@hotmail.com</p>
                </div>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
                  <LinkedinLogo size={32} color="#32a6fa" weight="light" />
                </a>
                <a href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/">
                  <h3>Linkedin </h3>
                  <a
                    className="link-border"
                    href="https://www.linkedin.com/in/ruan-vitor-elp%C3%ADdio-61232b1b7/"
                  >
                    Ruan Vitor
                  </a>
                </a>
              </li>
              <li>
                <a href="https://github.com/RuanDevJs">
                  <GithubLogo size={32} color="#32a6fa" weight="light" />
                </a>
                <a href="https://github.com/RuanDevJs">
                  <h3>Github </h3>
                  <a
                    className="link-border"
                    href="https://github.com/RuanDevJs"
                  >
                    Ruan DevJs
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </Styled.Contact>
      </Styled.SelectForm>
    </Styled.Container>
  );
}
