import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-around m-auto w-2/3 text-center rounded-md bg-slate-400">
      <h1 className='text-4xl '>Task Tracker</h1>
      <Button />
    </div>
  );
};

export default Header;
