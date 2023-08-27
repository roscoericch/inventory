import { Modal, Input, Button, message } from "antd";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateMachineTypes } from "../store/inventorySlice";
import { useState } from "react";
import { ModalProps } from "./types";
const AddMachineType = ({ open, setOpen }: ModalProps) => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const { machineTypes } = useAppSelector((state) => state.inventorySlice);
  const handleSubmit = () => {
    if (
      !machineTypes.some((e: Record<string, string>) => e.label === title) &&
      title
    ) {
      dispatch(updateMachineTypes({ label: title, value: title }));
      setOpen(false);
      setTitle("");
    } else {
      message.error("Invalid Input");
    }
  };
  return (
    <Modal
      closable
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title="Add a machine type"
    >
      <form className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="type" className="">
            Title
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="type"
          />
        </div>
        <Button onClick={handleSubmit}>Create</Button>
      </form>
    </Modal>
  );
};

export default AddMachineType;
