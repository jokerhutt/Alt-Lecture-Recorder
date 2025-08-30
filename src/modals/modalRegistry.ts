import NiceModal from "@ebay/nice-modal-react";
import EditDrawer from "../components/overlays/NavigationDrawer";

export function openEditDrawer(title: string) {
  void NiceModal.show("edit-drawer", { title });
}

export function registerModals() {
  NiceModal.register("edit-drawer", EditDrawer);
}
