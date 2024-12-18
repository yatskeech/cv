import { IoIosMail, IoMdPin } from "react-icons/io";

function Info() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 flex justify-center items-center bg-gray-darker rounded-full">
          <IoIosMail className="text-xl" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-light leading-none">Email</span>
          <a
            href="mailto:dima.ja06@gmail.com"
            className="text-gray-lighter leading-none"
          >
            dima.ja06@gmail.com
          </a>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 flex justify-center items-center bg-gray-darker rounded-full">
          <IoMdPin className="text-xl" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-light leading-none">Address</span>
          <span className="text-gray-lighter leading-none">Minsk, Belarus</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
