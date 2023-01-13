interface IUserPixandName {
  img: string;
  initials: string;
  name: string;
}

function UserPixandName({ img, initials, name }: IUserPixandName) {
  return (
    <div className="">
      <div className="flex--items space-x-6">
        <div className="grid relative group place-content-center w-16 h-16 rounded-full bg-app-bg border-4">
          <div>
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={img} className="w-full  rounded-full h-full" alt="user img" />
            ) : (
              <span className="text-3xl text-zinc-600 font-semibold">{initials}</span>
            )}
          </div>

          {/* <span
            onClick={() => setOpenImg(true)}
            className="bg-app-bg rounded-full hover:bg-zinc-200 transition cursor-pointer p-2 hover border absolute right-0 bottom-0"
          >
            {" "}
            <FaCameraRetro className="text-lg text-primary-color text-center flex place-content-center" />{" "}
          </span> */}
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-xl text-primaryText-color">{name}</h4>
          <div className="flex--items space-x-2">
            <p className="text-sm text-zinc-500">Online </p>
            <span className="rounded-full flex w-2 h-2 bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPixandName;
