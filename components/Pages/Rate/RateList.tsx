import React from 'react'
interface IRateList {
    name: string;
    time: string;
    date: string;
    amount: string | number
}
export function RateList({name, time, date, amount}: IRateList) {
  return (
    <>
      <div className="flex--items justify-between px-4 py-4">
        <div>
          <h3 className="text-lg font-semibold text-primary-color">{name}</h3>
          <div className="text-zinc-500 mt-1 text-xs flex--items space-x-3">
            <span>{time}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
            <span>{date}</span>
          </div>
        </div>

        <div>
          <h1 className="text-primary-color font-medium text-xl">{amount}</h1>
        </div>
      </div>
    </>
  );
}
