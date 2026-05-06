import ResponsiveImage from "@/components/widgets/ResponsiveImage";
import aiBig from "@/assets/images/sections/ai/big.png";
import aiSmall from "@/assets/images/sections/ai/small.png";

export default function AIImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <ResponsiveImage largeSrc={aiBig} smallSrc={aiSmall} />
    </div>
  );
}
