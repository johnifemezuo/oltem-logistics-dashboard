import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLoginHistoryStore } from "../../../base/hooks/stores/auth/useLoginHistory";

interface LoginHistoryTableRow {
  device: string;
  location: string;
  ipAddress: string;
  date?: string;
}

export function LoginHistoryTableRow({
  device,
  location,
  ipAddress,
  date,
}: LoginHistoryTableRow) {
  const { setOpenLHistory, storeloginHistory } = useLoginHistoryStore();

  const setPreview = () => {
    setOpenLHistory(true);
    storeloginHistory({device, location, ipAddress, date})
  }


  return (
    <>
      <tr
        onClick={setPreview}
        className="bg-white transition cursor-pointer hover:bg-blue-50/30 border-b hover:bg-gray-50"
      >
        <th scope="row" className="pl-0 pr-8 py-4 font-medium text-zinc-600 ">
          {date}
        </th>
        <td className="px-6 py-4 font-medium text-zinc-600">{device}</td>
        <td className="px-6 py-4 font-medium text-zinc-600">{device}</td>
        <td className="px-6 py-4 font-medium text-zinc-600">{location}</td>
        <td className="px-6 py-4 font-medium text-zinc-600">{ipAddress}</td>

        {/* <td className="px-6 py-4 font-medium text-zinc-600">{last_login}</td> */}
        <td className="px-4 py-4 text-xl ">
          <RiArrowRightSLine />
        </td>
      </tr>
    </>
  );
}
