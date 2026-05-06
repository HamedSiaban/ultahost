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
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-8",
        orderMap[flexOrder],
        "3xl:border 3xl:items-center 3xl:border-[#00000029] 3xl:rounded-4xl 3xl:p-2 3xl:pt-6 3xl:opacity-50 hover:3xl:opacity-100 hover:3xl:shadow-[0px_0px_40px_rgba(0,0,0,0.04)]",
        colStartMap[gridColumnNumber],
        rowStartMap[gridRowNumber],
      )}
    >
      <div className="3xl:items-center 3xl:px-10 flex flex-col items-start gap-4 sm:gap-5">
        <TitleBadge label={badgeLabel} />
        <Title boldText={boldTitle} normalText={normalTitle} />
        <SubTitle text={subTitle} />
      </div>
      <div className="3xl:h-160 h-100 w-full rounded-[25px] bg-red-500 object-contain">
        imagse
      </div>
    </section>
  );
}
