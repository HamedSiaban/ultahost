import aiBig from "@/assets/images/sections/ai/big.png";
import aiSmall from "@/assets/images/sections/ai/small.png";

export default function AIImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <img
        src={aiSmall}
        srcSet={`
            ${aiBig} 624w,
            ${aiSmall} 335w
            `}
        sizes="(max-width: 640px) calc(100vw - 40px), 100%"
        alt="AI panel ready to get propts"
        className=""
        loading="lazy"
      />
    </div>
  );
}
