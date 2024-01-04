import { Student } from "phosphor-react";
import * as Styled from "./styles";

interface IDataInfo {
  description: string;
  time: string;
  locale: string;
}

interface IData {
  title: string;
  info: IDataInfo[];
}

interface Props {
  data: IData[];
}

export default function Job({ data }: Props) {
  return (
    <Styled.ExperienceList>
      {data.map(({ title, info }) => {
        return (
          <li>
            <div className="experience-heading">
              <div>
                <Student color="#32a6fa" size={32} />
              </div>
              {info.map((data) => {
                return (
                  <div className="experience-info">
                    <h2>{title}</h2>
                    <ul className="experience-info-list">
                      <li>
                        <p className="info-list-description">
                          {data.description}
                        </p>
                      </li>
                      <li>
                        <p className="info-list-time">{data.time}</p>
                      </li>
                      <li>
                        <p className="info-list-city">{data.locale}</p>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </li>
        );
      })}
    </Styled.ExperienceList>
  );
}
