import "./styles.css";
import Heading from "./Heading";
import Section from "./Section";

export default function App() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>sub-Heading</Heading>
          <Heading>sub-Heading</Heading>
          <Heading>sub-Heading</Heading>
          <Section level={4}>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
