import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

type TProps = {
  children: React.ReactNode;
  wrapperId: string;
};

const Portal = ({ children, wrapperId = "portal" }: TProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      const wrapperElement = document.createElement("div");
      
      wrapperElement.setAttribute("id", wrapperId);
      document.body.appendChild(wrapperElement);

      element = wrapperElement;
    }
    setWrapperElement(element);
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
