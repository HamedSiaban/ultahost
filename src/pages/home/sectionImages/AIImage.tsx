import aiBig from "@/assets/images/sections/ai/big.png";
import aiSmall from "@/assets/images/sections/ai/small.png";

export default function AIImage() {
  return (
    <img
      src={aiSmall}
      srcSet={`
            ${aiBig} 624w,
            ${aiSmall} 335w
            `}
      sizes="(max-width: 640px) calc(100vw - 40px), 100%"
      alt="AI panel with interface for entering prompts and commands"
      className="w-full rounded-[25px]"
      loading="lazy"
    />
  );
}
