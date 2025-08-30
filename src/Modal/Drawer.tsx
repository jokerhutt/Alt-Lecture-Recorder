import { ModalBase } from "./ModalBase";

export function Drawer({
  open,
  onClose,
  children,
  side = "left",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <ModalBase open={open} onClose={onClose}>
      <div
        className={`pointer-events-auto absolute top-0 h-full w-[360px] max-w-[90vw] bg-white shadow-xl
                    transition-transform duration-200 ease-out
                    ${side === "left" ? "left-0" : "right-0"}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </ModalBase>
  );
}
