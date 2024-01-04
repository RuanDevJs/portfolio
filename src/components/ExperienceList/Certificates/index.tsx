import { Desktop } from "phosphor-react";
import * as Styled from "./styles";

interface IDataInfo {
  title: string;
  date: string;
  file: string;
}

interface Props {
  data: IDataInfo[];
}

export default function Certificates({ data }: Props) {
  return (
    <Styled.ExperienceList>
      {data.map(({ title, date, file }) => {
        return (
          <li>
            <div className="experience-heading">
              <div>
                <Desktop color="#32a6fa" size={32} />
              </div>
              <div className="experience-info">
                <h2>{title}</h2>
                <ul className="experience-info-list">
                  <li>
                    <p className="info-list-time">{date}</p>
                  </li>
                  <li>
                    <a className="info-list-download" href={file}>
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </Styled.ExperienceList>
  );
}
