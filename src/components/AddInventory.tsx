import { Modal, Input, Select, DatePicker, Button, message } from "antd";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { ModalProps } from "./types";
import { updateInventory } from "../store/inventorySlice";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const AddInventory = ({ open, setOpen }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { machineTypes, models, inventories } = useAppSelector(
    (state) => state.inventorySlice
  );
  const [Id, setId] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = () => {
    if (Id && date && type && model) {
      dispatch(updateInventory({ Id, date, type, model }));
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
            onSelect={(e) => setModel(e)}
            id="model"
            options={models[type]}
          />
        </div>
        <Button onClick={handleSubmit}>create</Button>
      </form>
    </Modal>
  );
};

export default AddInventory;
