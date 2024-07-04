import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

const Alert = ({ children, show, onClose }: Props) => {
  return (
    <div
      className={
        "alert alert-primary alert-dismissible fade " + (show && "show")
      }
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dimiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
