import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Drawer } from "../Modal/Drawer";
import { MainNavigation } from "../Nav/MainNavigation";
import { HeroIcon } from "../commons/HeroIcon";

export default NiceModal.create(() => {
  const modal = useModal();
  const close = () => {
    modal.hide();
    modal.remove();
  };

  return (
    <Drawer open={modal.visible} onClose={close}>
      <div className="flex flex-col h-full border-r p-4 border-r-black">
        <div className="w-full justify-end flex items-center">
          <div onClick={close}>
            <HeroIcon iconName="XMarkIcon" className="h-8 w-8" />
          </div>
        </div>
        <MainNavigation />
      </div>
    </Drawer>
  );
});
