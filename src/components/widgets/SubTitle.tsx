export default function SubTitle({ text }: { text: string }) {
  return (
    <p className="3xl:text-center text-sm leading-[1.75] font-normal text-neutral-600 sm:text-base">
      {text}
    </p>
  );
}
