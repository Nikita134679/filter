import React from "react";
import { ToolbarProps } from "../types";

const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === selected ? "active" : ""}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
