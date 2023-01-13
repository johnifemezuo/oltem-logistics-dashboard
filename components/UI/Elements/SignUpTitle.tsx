export function SignUpTitle({
  title,
  desc,
  email,
}: {
  title: string;
  desc: string;
  email?: string | null;
}) {
  return (
    <div className="leading-9 mb-8">
      <h1 className="text-2xl mb-2 md:text-3xl font-semibold text-slate-700 ">
        {title}
      </h1>
      <p className="text-zinc-500 leading-7">
        {desc}
        <b className="font-medium text-primary-color">{email}</b>
      </p>
    </div>
  );
}
