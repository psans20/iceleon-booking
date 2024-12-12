"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }
  }, [loaded]);

  return (
    <div className="">
      <Loader display={!loaded} />
      <div className={`text-black w-full ${loaded ? '' : 'hidden'}`}>
     <Navbar/>
       <Product/>
      </div>
    </div>
  );
}
