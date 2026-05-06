import ResponsiveImage from "@/components/widgets/ResponsiveImage";
import performanceBig from "@/assets/images/sections/performance/big.png";
import performanceSmall from "@/assets/images/sections/performance/small.png";

export default function PerformanceImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <ResponsiveImage
        largeSrc={performanceBig}
        smallSrc={performanceSmall}
      />
    </div>
  );
}
