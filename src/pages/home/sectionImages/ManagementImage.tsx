import managementBig from "@/assets/images/sections/management/big.png";
import managementSmall from "@/assets/images/sections/management/small.png";

export default function ManagementImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <img
        src={managementSmall}
        srcSet={`
            ${managementBig} 624w,
            ${managementSmall} 335w
            `}
        sizes="(max-width: 640px) calc(100vw - 40px), 624px"
        alt="Dashboard of management services"
        className=""
        loading="lazy"
      />
    </div>
  );
}
