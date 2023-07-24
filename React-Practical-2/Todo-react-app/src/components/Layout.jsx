import React from "react";
import { memo } from "react";

function Layout({ children }) {
  console.log(typeof children);
  console.log(children);
  return <div className='todo-app-container'>{children}</div>;
}

export default memo(Layout);
