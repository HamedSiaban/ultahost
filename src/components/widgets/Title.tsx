export default function Title({
  boldText,
  normalText,
}: {
  boldText: string;
  normalText: string;
}) {
  return (
    <h1 className="3xl:text-center 3xl:text-[48px] text-[26px] leading-[1.26] font-medium text-neutral-800 2xl:text-[32px] 2xl:font-bold">
      <b>{boldText}</b> {normalText}
    </h1>
  );
}
