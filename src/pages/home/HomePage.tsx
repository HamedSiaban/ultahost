import Section from "@/components/widgets/Section";
import { sections } from "@/constants/SectionsContent";

export default function HomePage() {
  return sections.map((section) => (
    <Section
      key={section.id}
      id={section.id}
      badgeLabel={section.badgeLabel}
      boldTitle={section.boldTitle}
      normalTitle={section.normalTitle}
      subTitle={section.subTitle}
      flexOrder={section.flexOrder}
      gridColumnNumber={section.gridColumnNumber}
      gridRowNumber={section.gridRowNumber}
      image={section.image}
    />
  ));
}
