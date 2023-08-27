import { Card } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
type content = {
  content: Record<string, string | number>;
  setId: React.Dispatch<React.SetStateAction<string | number>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setViewModel: React.Dispatch<React.SetStateAction<boolean>>;
};
const InventoryCard = ({
  content,
  setId,
  setEdit,
  setDelete,
  setViewModel,
}: content) => {
  return (
    <Card
      className="shadow-sm"
      title={
        <div className="flex items-center justify-between w-full">
          <span>{content.Id}</span>
          <div className="flex justify-end gap-[0.5rem]">
            <BiEdit
              onClick={() => {
                setId(content._id);
                setEdit(true);
              }}
              className="cursor-pointer text-[#1677ff] text-[1rem]"
            />
            <AiFillDelete
              onClick={() => {
                setId(content._id);
                setDelete(true);
              }}
              className="text-[#c23535] cursor-pointer text-[1rem]"
            />
          </div>
        </div>
      }
    >
      <p>Machine Type: {content.type}</p>
      <span className="flex items-center gap-[0.2rem]">
        model:{" "}
        <p
          onClick={() => {
            setId(content._id);
            setViewModel(true);
          }}
          className="text-[#1677ff] cursor-pointer"
        >
          {content.model}
        </p>
      </span>
      <p>Manufatured date: {content.date}</p>
    </Card>
  );
};

export default InventoryCard;
