export const UserTableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-white border-y ">
      <tr className="py-5">
        <th scope="col" className="pr-6 pl-12 py-3 font-normal text-zinc-500">
          #
        </th>

        <th scope="col" className="px-6 py-3 font-normal text-zinc-500">
          Customer Name
        </th>
        <th scope="col" className="px-6 py-3 font-normal text-zinc-500">
          Email Address
        </th>
        <th scope="col" className="px-6 py-3 font-normal text-zinc-500">
          Phone Number
        </th>
        <th scope="col" className="px-6 py-3 font-normal text-zinc-500">
          Wallet Balance
        </th>
        <th scope="col" className="px-6 py-3 font-normal text-zinc-500">
          KYC Status
        </th>
        <th scope="col" className="pl-6 pr-12 py-3 font-normal text-zinc-500">
          Last Log In
        </th>
      </tr>
    </thead>
  );
};
