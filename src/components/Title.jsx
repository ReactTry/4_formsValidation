import React, { useEffect, useState } from "react";

const Title = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Mounting");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Unmount");
    };
  }, []);

  return <div>Rendering</div>;
};

export default Title;
