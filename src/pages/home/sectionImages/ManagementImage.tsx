import managementBig from "@/assets/images/sections/management/big.png";
import managementSmall from "@/assets/images/sections/management/small.png";

export default function ManagementImage() {
  return (
    <img
      src={managementSmall}
      srcSet={`
            ${managementBig} 624w,
            ${managementSmall} 335w
            `}
      sizes="(max-width: 640px) calc(100vw - 40px), 100%"
      alt="Dashboard of management services with system controls and analytics"
      className="w-full rounded-[25px]"
      loading="lazy"
    />
  );
}
