import AIImage from "@/pages/home/sectionImages/AIImage";
import ManagementImage from "@/pages/home/sectionImages/ManagementImage";
import PerformanceImage from "@/pages/home/sectionImages/PerformanceImage";
import SupportImage from "@/pages/home/sectionImages/SupportImage";
import { SectionProps } from "@/types/section.types";

export const sections: SectionProps[] = [
  {
    id: 1,
    badgeLabel: "PERFORMANCE",
    boldTitle: "Raw Power",
    normalTitle: "for Your Windows Workloads",
    subTitle:
      "Don't let legacy hardware bottle-neck your applications. We pair the latest AMD EPYC™ processors with enterprise-grade NVMe storage to deliver sub-second response times for even the most complex MSSQL queries and .NET processes.",
    flexOrder: 1,
    gridColumnNumber: 1,
    gridRowNumber: 1,
    image: <PerformanceImage />,
  },
  {
    id: 2,
    badgeLabel: "AI ASSISTANT",
    boldTitle: "Effortless Windows",
    normalTitle: "Management with AI Support",
    subTitle:
      "Managing your Windows server has never been this intuitive. Our AI-driven assistant helps you monitor system resources, execute rapid speed tests, and deploy essential applications like WordPress with simple commands. ",
    flexOrder: 2,
    gridColumnNumber: 1,
    gridRowNumber: 2,
    image: <AIImage />,
  },
  {
    id: 3,
    badgeLabel: "MANAGEMENT",
    boldTitle: "Security That Predicts.",
    normalTitle: "Defense That Evolves.",
    subTitle:
      "Managing your Windows server has never been this intuitive. Our AI-driven assistant helps you monitor system resources, execute rapid speed tests, and deploy essential applications like WordPress with simple commands.",
    flexOrder: 3,
    gridColumnNumber: 2,
    gridRowNumber: 1,
    image: <ManagementImage />,
  },
  {
    id: 4,
    badgeLabel: "SUPPORT",
    boldTitle: "Expert Assistance When",
    normalTitle: "Every Second Counts",
    subTitle:
      "Focus on your business while our senior engineers handle the technical heavy lifting. From white-glove migrations to 24/7 proactive monitoring, we provide everything.",
    flexOrder: 4,
    gridColumnNumber: 2,
    gridRowNumber: 2,
    image: <SupportImage />,
  },
];
