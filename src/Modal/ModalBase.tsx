import { createPortal } from "react-dom";

type ModalBaseProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  blur?: boolean;
};

export function ModalBase({ open, onClose, children, blur = true }: ModalBaseProps) {
  if (!open) return null;

  return createPortal(
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/40 ${blur ? "backdrop-blur-sm" : ""}`}
        onMouseDown={onClose}
      />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {children}
      </div>
    </div>,
    document.body
  );
}