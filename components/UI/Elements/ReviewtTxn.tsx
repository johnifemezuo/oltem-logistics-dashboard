type IReview = {
  customStyle?: string;
  label: string;
  detail: string | undefined;
  date?: string;
  time?: string;
};

export default function ReviewTxn({
  customStyle,
  label,
  detail,
  date,
  time,
}: IReview) {
  return (
    <div className={`grid gap-2 ${customStyle}`}>
      <p className="text-zinc-500 text-sm">{label}</p>
      <h2 className="font-medium text-primary-color text-base">{detail}</h2>
      <h2 className="font-sm text-sm text-gray-600 text-base">{date}</h2>
      <h2 className="font-sm text-sm text-gray-600 text-base">{time}</h2>
    </div>
  );
}
