import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

interface IUserTableRow {
  customer_name: string;
  email_address: string;
  phone_number: string;
  wallet_balance: string;
  kyc_status: string;
  last_login: string;
  num?: number;
  userId: string;
}

export function UserTableRow({
  customer_name,
  email_address,
  phone_number,
  wallet_balance,
  kyc_status,
  last_login,
  num,
  userId,
}: IUserTableRow) {
  const { push } = useRouter();

  return (
    <tr
      onClick={() => push(`/dashboard/users/${userId}`)}
      className="bg-white transition cursor-pointer hover:bg-blue-50/30 border-b hover:bg-gray-50"
    > 
      <th scope="row" className="pl-12 pr-8 py-4 font-medium text-zinc-600 ">
        {num}
      </th>
      <td className="px-6 py-4 font-medium text-zinc-600">{customer_name}</td>
      <td className="px-6 py-4 font-medium text-zinc-600">{email_address}</td>
      <td className="px-6 py-4 font-medium text-zinc-600">{phone_number}</td>
      <td className="px-6 py-4 font-medium text-zinc-600">
        <span
          className={`px-4 rounded-md py-1.5 text-sm grid text-center  text-zinc-600 ${
            kyc_status === "pending"
              ? "text-primary-color bg-[#F3F5FE]"
              : kyc_status === "completed"
              ? "text-green-600 bg-[#E2FFE7]"
              : "text-red-400 bg-[#FFDBDB]"
          } `}
        >
          {kyc_status}
        </span>
      </td>
      {/* <td className="px-6 py-4 font-medium text-zinc-600">{last_login}</td> */}
      <td className="px-8 py-4 text-xl ">
        <RiArrowRightSLine />
      </td>
    </tr>
  );
}
