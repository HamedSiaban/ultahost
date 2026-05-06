import ResponsiveImage from "@/components/widgets/ResponsiveImage";
import performanceBig from "@/assets/images/sections/performance/big.png";
import performanceSmall from "@/assets/images/sections/performance/small.png";
import amd from "@/assets/images/sections/performance/amd.png";
import greenBow from "@/assets/images/sections/performance/green-bow.svg";
import greenBowGlow from "@/assets/images/sections/performance/green-bow-glow.svg";
import { LightningSvg } from "@/assets/svgComps/LightningSvg";

export default function PerformanceImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <div className="3xl:w-26 3xl:h-18 3xl:top-10 3xl:right-60 absolute top-4 right-4 flex h-12 w-18 items-center justify-center rounded-2xl border border-transparent bg-white bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.56)_100%)] shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)] backdrop-blur-2xl [border-image:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.02)_100%)_1]">
        <img src={amd} alt="amd" />
      </div>
      <ResponsiveImage largeSrc={performanceBig} smallSrc={performanceSmall} />
      <div className="3xl:w-40 3xl:h-32 3xl:left-auto 3xl:right-8 3xl:bottom-40 bg-neutral-25 3xl:py-4 absolute bottom-5 left-5 flex h-25.25 w-32 flex-col items-center justify-between rounded-2xl border border-transparent py-3 shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)] backdrop-blur-2xl [border-image:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.02)_100%)_1]">
        <div className="3xl:gap-2 flex flex-row items-center justify-center gap-1">
          <div className="3xl:size-5 flex size-4 items-center justify-center rounded-md border border-[#20202014]">
            <LightningSvg fillColor="transparent" strokeColor="black" />
          </div>
          <p className="3xl:text-xs text-[10px] leading-[1.7] font-medium text-neutral-800">
            Site Speed
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="3xl:text-lg text-secondary-900 translate-y-2 text-base leading-[1.75] font-bold">
            <b>99.84</b>
          </span>
          <p className="3xl:text-[10px] text-[8px] leading-[1.65] text-neutral-800">
            <span className="font-normal">Loads in</span>
            <span className="font-medium"> 1.27s</span>
          </p>
        </div>
        <img
          src={greenBowGlow}
          alt="speedometer"
          className="3xl:hidden absolute bottom-0 block"
        />
        <img
          src={greenBow}
          alt="speedometer"
          className="3xl:block absolute bottom-2.5 hidden"
        />
      </div>
    </div>
  );
}
