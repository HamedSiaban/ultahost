import performanceBig from "@/assets/images/sections/performance/big.png";
import performanceSmall from "@/assets/images/sections/performance/small.png";
import amd from "@/assets/images/sections/performance/amd.png";
import greenBow from "@/assets/images/sections/performance/green-bow.svg";
import greenBowGlow from "@/assets/images/sections/performance/green-bow-glow.svg";
import { LightningSvg } from "@/assets/svgComps/LightningSvg";

export default function PerformanceImage() {
  return (
    <div className="relative w-full">
      <div className="absolute top-4 right-4 flex h-12 w-18 items-center justify-center rounded-2xl border border-transparent bg-white bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.56)_100%)] shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)] backdrop-blur-2xl [border-image:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.02)_100%)_1] sm:top-10 sm:right-60 sm:h-18 sm:w-26">
        <img src={amd} alt="AMD EPYC processor logo" />
      </div>
      <img
        src={performanceSmall}
        srcSet={`
            ${performanceBig} 624w,
            ${performanceSmall} 335w
            `}
        sizes="(max-width: 640px) calc(100vw - 40px), 100%"
        alt="Programming code editor with speedometer showing high site speed performance"
        className="w-full rounded-[25px]"
        loading="lazy"
      />
      <div className="bg-neutral-25 absolute bottom-5 left-5 flex h-25.25 w-32 flex-col items-center justify-between rounded-2xl border border-transparent py-3 shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)] backdrop-blur-2xl [border-image:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.02)_100%)_1] sm:right-8 sm:bottom-40 sm:left-auto sm:h-32 sm:w-40 sm:py-4">
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
          <div className="flex size-4 items-center justify-center rounded-md border border-[#20202014] sm:size-5">
            <LightningSvg fillColor="transparent" strokeColor="black" />
          </div>
          <p className="text-[10px] leading-[1.7] font-medium text-neutral-800 sm:text-xs">
            Site Speed
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-secondary-900 translate-y-2 text-base leading-[1.75] font-bold sm:text-lg">
            <strong>99.84</strong>
          </span>
          <p className="text-[8px] leading-[1.65] text-neutral-800 sm:text-[10px]">
            <span className="font-normal">Loads in</span>
            <span className="font-medium"> 1.27s</span>
          </p>
        </div>
        <img
          src={greenBowGlow}
          alt="Speedometer gauge visualization for mobile display"
          className="absolute bottom-0 block sm:hidden"
        />
        <img
          src={greenBow}
          alt="Speedometer gauge visualization for desktop display"
          className="absolute bottom-2.5 hidden sm:block"
        />
      </div>
    </div>
  );
}
