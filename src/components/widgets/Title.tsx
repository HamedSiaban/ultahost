export default function Title({
  boldText,
  normalText,
}: {
  boldText: string;
  normalText: string;
}) {
  return (
    <h1 className="3xl:text-center text-[26px] leading-[1.26] font-medium text-neutral-800 sm:text-[48px] sm:font-bold">
      <b>{boldText}</b> {normalText}
    </h1>
  );
}
