import { create } from "zustand";

export const useControlModal = create((set) => ({
  // state

  modalVisible: false,
  selectedItem: {},
  typeModal: "",

  // function control state

  setModalVisible: (value) => set({ modalVisible: value }),
  setSelectedItem: (value) => set({ selectedItem: value }),
  setTypeModal: (type) => set({ typeModal : type}),
}));
