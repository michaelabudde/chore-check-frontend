import { useEffect } from "react";
export default function useEsc(handleCloseModal) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleCloseModal]);
}
