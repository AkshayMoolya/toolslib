"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  routeType: string;
}

const Searchbar = () => {
  const [value, setValue] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value) {
        router.push(`/?q=` + value);
      } else {
        router.push(`/`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder="Search"
      className="w-full"
    />
  );
};

export default Searchbar;
