import Image from "next/image";

const Balance = () => {
  return (
    <div className="h-24 w-full rounded-xl mb-4 bg-[#ec775f]  flex items-center justify-center p-4">
      <div className="flex justify-between w-full">
        <div>
          <h3 className="text-[#f8e9dd]">My balance</h3>
          <p className="text-xl  font-[700] text-[#f8e9dd]">$921.48</p>
        </div>
        <Image src="logo.svg" width={60} height={45} alt="logo" />
      </div>
    </div>
  );
};

export default Balance;
