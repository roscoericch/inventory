import SortIcon from "./assets/SortIcon";
import { Select, Button } from "antd";
import { useAppSelector } from "./store/hooks";
import InventoryCard from "./components/Card";
import AddInventory from "./components/AddInventory";
import EditInventory from "./components/EditInventory";
import DeleteModal from "./components/DeleteModal";
import AddModel from "./components/AddModel";
import { useEffect, useState } from "react";
import AddMachineType from "./components/AddMachineType";
import ViewModel from "./components/ViewModel";

function App() {
  const { machineTypes, inventories } = useAppSelector(
    (state) => state.inventorySlice
  );
  const [inventory, setInventory] = useState(inventories);
  useEffect(() => {
    setInventory(inventories);
  }, [inventories]);
  const onFilter = (e: string) => {
    setInventory(() => {
      return inventories.filter((i: Record<string, string>) => i.type === e);
    });
  };
  const [openInventory, setOpenInventory] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const [deleteInventory, setDeleteInventory] = useState(false);
  const [openMachineType, setOpenMachineType] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [viewModel, setViewModel] = useState(false);
  const [id, setId] = useState<string | number>("");
  return (
    <>
      <div className="mx-auto">
        <nav className="flex items-center justify-between w-[98%] mx-auto border-b border-[rgba(5, 5, 5, 0.06)] p-[1rem]">
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-stretch gap-[0.2rem] items-center">
            <Button
              onClick={() => setOpenMachineType(true)}
              style={{ backgroundColor: "#1677ff" }}
              type="primary"
            >
              Add Machine
            </Button>
            <Button
              onClick={() => setOpenModel(true)}
              style={{ backgroundColor: "#1677ff" }}
              type="primary"
            >
              Add Model
            </Button>
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-stretch items-center gap-[1rem]">
            <div className="flex items-center gap-[0.5rem]">
              <div className="flex items-center gap-[0.1rem] w-full">
                <p className="text-[#7C8493] text-[16px] font-[400]">
                  Sort by:
                </p>
                <Select
                  onSelect={onFilter}
                  options={machineTypes}
                  defaultValue={"All Machines"}
                />
              </div>
              <SortIcon />
            </div>
            <Button
              onClick={() => setOpenInventory(true)}
              style={{ backgroundColor: "#1677ff" }}
              type="primary"
            >
              Add Inventory
            </Button>
          </div>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[1rem] w-[98%] mx-auto justify-between gap-[0.5rem]">
          {inventory.map((e: Record<string, string>, i: number) => (
            <InventoryCard
              setId={setId}
              setEdit={setEditInventory}
              setDelete={setDeleteInventory}
              setViewModel={setViewModel}
              content={{ ...e, _id: i }}
              key={i}
            />
          ))}
        </div>
      </div>
      <AddInventory open={openInventory} setOpen={setOpenInventory} />
      <EditInventory open={editInventory} setOpen={setEditInventory} id={id} />
      <DeleteModal
        open={deleteInventory}
        setOpen={setDeleteInventory}
        id={id}
      />
      <AddMachineType open={openMachineType} setOpen={setOpenMachineType} />
      <AddModel open={openModel} setOpen={setOpenModel} />
      <ViewModel open={viewModel} setOpen={setViewModel} id={id} />
    </>
  );
}

export default App;
