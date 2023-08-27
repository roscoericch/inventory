import { Modal, Input, Select, Button } from "antd";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { updateModel } from "../store/inventorySlice";
import { ModalProps } from "./types";
const AddModel = ({ open, setOpen }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { machineTypes, models } = useAppSelector(
    (state) => state.inventorySlice
  );
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = () => {
    if (model && description && type) {
      dispatch(
        updateModel({
          type,
          data: { fact: description, value: model, label: model },
        })
      );
      setOpen(false);
    }
  };

  return (
    <Modal
      closable
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title="Add a model to an existing Machine Type"
    >
      <form className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="type" className="">
            Model Name
          </label>
          <Input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            id="type"
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="description" className="">
            Properties Description
          </label>
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="weight" className="">
            Machine Type
          </label>
          <Select
            onSelect={(e) => {
              setType(e);
            }}
            options={machineTypes}
            id="weight"
          />
        </div>
        <Button onClick={handleSubmit}>create</Button>
      </form>
    </Modal>
  );
};

export default AddModel;
