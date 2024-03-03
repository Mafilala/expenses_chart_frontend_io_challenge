import Chart from "./chart";
import { data } from "../lib/data";
const Summary = () => {
  return (
    <div className="border bg-[#fffaf5] w-fit pt-6 pb-6 pl-4 pr-4 rounded-xl">
      <h2 className="mb-[50px] font-[700] text-[20px] tracking">
        Spending - Last 7 days
      </h2>
      <Chart data={data} />
      <div class="h-1 border-[#f8e9dd] mt-6 border-b-2 mb-6"></div>
      <h3 className="text-sm text-[#93867b]">Total this month</h3>
      <div className="flex justify-between">
        <h3 className="self-center font-[700] text-2xl">$478.33</h3>
        <div className="flex flex-col justify-between items-end">
          <h4 className="font-[700] text-sm">+2.4%</h4>
          <p className="text-sm text-[#93867b]">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
