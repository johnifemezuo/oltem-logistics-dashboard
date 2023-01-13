export function TickStyle({ children }: any) {
  return (
    <div
      className="w-[30px] grid place-content-center
    px-5 text-success-color
    absolute right-0 bottom-4 transition duration-300"
    >
      {children}
    </div>
  );
}
