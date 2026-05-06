import AIImage from "@/pages/home/sectionImages/AIImage";
import ManagementImage from "@/pages/home/sectionImages/ManagementImage";
import PerformanceImage from "@/pages/home/sectionImages/PerformanceImage";
import SupportImage from "@/pages/home/sectionImages/SupportImage";
import Section from "@/components/widgets/Section";
import { sections, SectionType } from "@/constants/sectionsContent";

const imageComponentMap = {
  performance: PerformanceImage,
  ai: AIImage,
  management: ManagementImage,
  support: SupportImage,
} as const;

export default function HomePage() {
  return sections.map((section: SectionType) => {
    const ImageComponent = imageComponentMap[section.imageComponentId];
    return (
      <Section
        key={section.id}
        {...section}
        image={<ImageComponent />}
      />
    );
  });
}
