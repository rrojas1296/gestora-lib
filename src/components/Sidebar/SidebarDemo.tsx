import { useState } from "react";
import Button from "../Button/Button";
import Sidebar from "../ui/sidebar";

const SidebarDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="filled" onClick={() => setOpen((prev) => !prev)}>
        Open Sidebar
      </Button>
      <Sidebar open={open} position="bottom" setOpen={setOpen}>
        Sidebar Content
      </Sidebar>
    </div>
  );
};

export default SidebarDemo;
