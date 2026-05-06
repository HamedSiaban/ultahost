import { LightningSvg } from "@/assets/svgComps/LightningSvg";
import { Badge } from "../ui/badge";

export default function TitleBadge({ label }: { label: string }) {
  return (
    <Badge>
      <LightningSvg />
      <span>
        <strong>{label}</strong>
      </span>
    </Badge>
  );
}
