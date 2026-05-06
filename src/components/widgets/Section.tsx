import { SectionProps } from "@/types/section.types";
import { cn } from "@/lib/utils.helper";
import SubTitle from "./SubTitle";
import Title from "./Title";
import TitleBadge from "./TitleBadge";
import { colStartMap, orderMap, rowStartMap } from "@/lib/sectionOrders.helper";

export default function Section({
  badgeLabel,
  boldTitle,
  normalTitle,
  subTitle,
  flexOrder,
  gridColumnNumber,
  gridRowNumber,
  image,
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-8",
        orderMap[flexOrder],
        "2xl:items-center 2xl:rounded-4xl 2xl:border 2xl:border-[#00000029] 2xl:p-2 2xl:pt-6 2xl:opacity-50 hover:2xl:opacity-100 hover:2xl:shadow-[0px_0px_40px_rgba(0,0,0,0.04)]",
        colStartMap[gridColumnNumber],
        rowStartMap[gridRowNumber],
      )}
    >
      <div className="3xl:px-10 flex flex-col items-start gap-4 sm:gap-5 2xl:items-center 2xl:px-20">
        <TitleBadge label={badgeLabel} />
        <Title boldText={boldTitle} normalText={normalTitle} />
        <SubTitle text={subTitle} />
      </div>
      <div className="relative h-auto w-full rounded-[25px]">{image}</div>
    </section>
  );
}
