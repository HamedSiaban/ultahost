import ResponsiveImage from "@/components/widgets/ResponsiveImage";
import managementBig from "@/assets/images/sections/management/big.png";
import managementSmall from "@/assets/images/sections/management/small.png";

export default function ManagementImage() {
  return (
    <div className="relative h-auto w-full rounded-[25px]">
      <ResponsiveImage largeSrc={managementBig} smallSrc={managementSmall} />
    </div>
  );
}
