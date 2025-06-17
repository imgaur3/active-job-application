/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Props = {
  className?: any;
  src: any;
  onClick?: () => void;
};

const ImageIcon = ({ src, onClick, className }: Props) => {
  return <img src={src} alt={src} className={className} onClick={onClick} />;
};

export default ImageIcon;
