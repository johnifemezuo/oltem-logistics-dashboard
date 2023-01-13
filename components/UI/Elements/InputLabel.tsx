export function InputLabel({ label }: any) {
  return (
    <label
      className="after:content-['*'] 
    after:ml-0.5 
    after:text-primary-color 
    text-zinc-500 text-sm group"
    >
      {label}
    </label>
  );
}


