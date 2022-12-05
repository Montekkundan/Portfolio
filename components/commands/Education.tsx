import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is what i've learned until now!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Advanced Certification in Data Science and AI",
    desc: "Aug 2022 - Present · 5 months · Intellipaat · Online",
  },
  {
    title: "Diginique TechLabs · Internship",
    desc: "Jul 2022 - Aug 2022 · 2 months · Online",
  },
  {
    title: "Yadavindra Public School · High School ",
    desc: "April 2018 - Jul 2022",
  },
  {
    title: "IELTS 7.5",
    desc: "2021",
  },
];

export default Education;
