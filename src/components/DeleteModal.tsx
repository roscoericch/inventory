import { Modal } from "antd";
import { ActionModalProps } from "./types";
import { useAppDispatch } from "../store/hooks";
import { deleteInventory } from "../store/inventorySlice";
const DeleteModal = ({ open, setOpen, id }: ActionModalProps) => {
  const dispatch = useAppDispatch();
  const handleOk = () => {
    dispatch(deleteInventory(id));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Confirm Action"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      okButtonProps={{ style: { backgroundColor: "#191c32" } }}
    >
      <p>delete Inventory input</p>
    </Modal>
  );
};

export default DeleteModal;
