import { Modal } from "antd";
import { useAppSelector } from "../store/hooks";
import { ActionModalProps } from "./types";
const ViewModel = ({ open, setOpen, id }: ActionModalProps) => {
  const { models, inventories } = useAppSelector(
    (state) => state.inventorySlice
  );
  const model = inventories[id]?.model;
  const type = inventories[id]?.type;
  const content = models[type]?.filter(
    (e: Record<string, string>) => e.label === model
  )[0];
  return (
    <Modal
      closable
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title={type}
    >
      <p>{model}</p>
      <div>{content?.fact}</div>
    </Modal>
  );
};
export default ViewModel;
