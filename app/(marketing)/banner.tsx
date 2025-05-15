"use client";

import { Dispatch, SetStateAction } from "react";

type BannerProps = {
  hide: boolean;
  setHide: Dispatch<SetStateAction<boolean>>;
};

const Banner = ({}: BannerProps) => {
  // Banner desativado — não renderiza nada
  return null;
};

export default Banner;
