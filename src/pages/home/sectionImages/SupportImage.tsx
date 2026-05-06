import supportBig from "@/assets/images/sections/support/big.png";
import supportSmall from "@/assets/images/sections/support/small.png";
import greenAvatarBig from "@/assets/images/sections/support/avatar-green-big.png";
import greenAvatarSmall from "@/assets/images/sections/support/avatar-green-small.png";
import blueAvatarBig from "@/assets/images/sections/support/avatar-blue-big.png";
import blueAvatarSmall from "@/assets/images/sections/support/avatar-blue-small.png";

export default function SupportImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <div className="3xl:h-26 3xl:w-84 3xl:bottom-3 3xl:right-10 3xl:gap-3 backdrop-blur-2xl] absolute right-3 bottom-3 flex h-23 w-68 flex-row items-center justify-center gap-2 rounded-3xl border border-transparent bg-[linear-gradient(180deg,rgba(32,32,32,0.92)_0%,rgba(32,32,32,0.56)_100%)] shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)]">
        <p className="text-neutral-25 3xl:text-base max-w-47 text-sm leading-[1.75] font-normal">
          Sure thing Alex, let’s start the migration process.
        </p>
        <img
          src={greenAvatarBig}
          srcSet={`
        ${greenAvatarBig} 72w,
        ${greenAvatarSmall} 60w
      `}
          sizes="(max-width: 640px) 60px, 72px"
          alt="avatar-1"
          className=""
          loading="lazy"
        />
      </div>
      <div className="3xl:w-84 3xl:h-26 3xl:bottom-33 3xl:left-10 3xl:gap-3 bg-neutral-25 absolute bottom-29 left-3 flex h-21 w-69.5 flex-row items-center justify-center gap-2 rounded-3xl border border-transparent p-4 shadow-[0px_0px_80px_0px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
        <img
          src={blueAvatarBig}
          srcSet={`
            ${blueAvatarBig} 72w,
            ${blueAvatarSmall} 60w
            `}
          sizes="(max-width: 640px) 60px, 72px"
          alt="avatar-2"
          className=""
          loading="lazy"
        />
        <p className="3xl:text-base max-w-47 text-sm leading-[1.75] font-normal text-neutral-800">
          Hello, would you please help me migrate to HostOnce?
        </p>
      </div>
      <img
        src={supportSmall}
        srcSet={`
            ${supportBig} 624w,
            ${supportSmall} 335w
            `}
        sizes="(max-width: 640px) calc(100vw - 40px), 624px"
        alt="Man holding laptop with overlay of support replying to customer chat"
        className=""
        loading="lazy"
      />
    </div>
  );
}
