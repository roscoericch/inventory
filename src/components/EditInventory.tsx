import { Modal, Input, Select, DatePicker, Button, message } from "antd";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { ActionModalProps } from "./types";
import { editInventory } from "../store/inventorySlice";
import { useState, useEffect } from "react";
const EditInventory = ({ open, setOpen, id }: ActionModalProps) => {
  const dispatch = useAppDispatch();
  const { machineTypes, models, inventories } = useAppSelector(
    (state) => state.inventorySlice
  );
  const index = Number(id);
  const [inventory, setInventory] = useState(inventories);
  useEffect(() => {
    setInventory(inventories);
  }, [inventories]);
  const [Id, setId] = useState(inventory[index]?.Id);
  const [date, setDate] = useState(inventory[index]?.date);
  const [type, setType] = useState(inventory[index]?.type);
  const [model, setModel] = useState(inventory[index]?.model);
  const handleSubmit = () => {
    if (Id && date && type && model) {
      dispatch(editInventory({ content: { Id, date, type, model }, _id: id }));
      setOpen(false);
    } else {
      message.error("input all required fields");
    }
  };
  return (
    <Modal
      closable
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title="create an inventory"
    >
      <form className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="ID" className="">
            Machine Id
          </label>
          <Input
            required
            value={Id}
            onChange={(e) => setId(e.target.value)}
            id="ID"
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="date" className="">
            Manufacturing date
          </label>
          <DatePicker onChange={(_, e) => setDate(e)} id="date" />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="type" className="">
            Machine Type
          </label>
          <Select
            value={type}
            onSelect={(e) => {
              setType(e);
            }}
            options={machineTypes}
            id="type"
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="model" className="">
            Model
          </label>
          <Select
            value={model}
            onSelect={(e) => setModel(e)}
            id="model"
            options={models[type]}
          />
        </div>
        <Button onClick={handleSubmit}>edit</Button>
      </form>
    </Modal>
  );
};

export default EditInventory;
