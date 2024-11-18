import React, { useEffect, useState } from "react";
import CandlestickChart from "react-candlestick-chart";
import { 
  FaPen, FaArrowsAlt, FaRuler, FaTextHeight, FaPaintBrush, FaSmile, 
  FaPencilAlt, FaSearch, FaLock, FaMagnet, FaEye, FaTrash 
} from "react-icons/fa"; // Import required icons
import data from "./data";

const CandlestickGraph: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  const [adjustedWidth, setAdjustedWidth] = useState(width);

  useEffect(() => {
    const chartElement = document.getElementById("chart1");
    if (chartElement) {
      chartElement.style.backgroundColor = "white";

      // Adjust the width dynamically
      const newWidth = width * 0.8; // Reduce the width to 80% of the given width
      setAdjustedWidth(newWidth);
    }
  }, [width]);

  // Action handlers for the toolbar
  const handleDrawLine = () => {
    console.log("Draw line selected");
    // Implement line drawing functionality
  };

  const handleZoom = () => {
    console.log("Zoom selected");
    // Implement zoom functionality
  };

  const handleAddText = () => {
    console.log("Add text selected");
    // Implement adding text
  };

  const handleHighlight = () => {
    console.log("Highlight selected");
    // Implement highlight functionality
  };

  const handleAddSmile = () => {
    console.log("Add smile emoji selected");
    // Implement adding emoji
  };

  const handlePencilTool = () => {
    console.log("Pencil tool selected");
    // Implement pencil tool
  };

  const handleSearch = () => {
    console.log("Search selected");
    // Implement search functionality
  };

  const handleLock = () => {
    console.log("Lock/unlock selected");
    // Implement lock/unlock functionality
  };

  const handleMagnet = () => {
    console.log("Magnet mode selected");
    // Implement magnet mode
  };

  const handleToggleVisibility = () => {
    console.log("Toggle visibility selected");
    // Implement toggle visibility
  };

  const handleDelete = () => {
    console.log("Delete selected");
    // Implement delete functionality
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {/* Sidebar with icons */}
      <div
        style={{
          width: "60px",
          background: "#f9f9f9",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          borderRight: "1px solid #ddd",
          alignItems: "center",
          height:"625px",
          justifyContent:"space-between"
        }}
      >
        <FaPen size={20} onClick={handleDrawLine} style={iconStyle} title="Draw Line" />
        <FaArrowsAlt size={20} onClick={handleZoom} style={iconStyle} title="Zoom" />
        <FaRuler size={20} onClick={handleAddText} style={iconStyle} title="Add Text" />
        <FaTextHeight size={20} onClick={handleAddText} style={iconStyle} title="Text Height" />
        <FaPaintBrush size={20} onClick={handleHighlight} style={iconStyle} title="Highlight" />
        <FaSmile size={20} onClick={handleAddSmile} style={iconStyle} title="Add Emoji" />
        <FaPencilAlt size={20} onClick={handlePencilTool} style={iconStyle} title="Pencil Tool" />
        <FaSearch size={20} onClick={handleSearch} style={iconStyle} title="Search" />
        <FaLock size={20} onClick={handleLock} style={iconStyle} title="Lock/Unlock" />
        <FaMagnet size={20} onClick={handleMagnet} style={iconStyle} title="Magnet Mode" />
        <FaEye size={20} onClick={handleToggleVisibility} style={iconStyle} title="Toggle Visibility" />
        <FaTrash size={20} onClick={handleDelete} style={iconStyle} title="Delete" />
      </div>

      {/* Chart */}
      <div style={{ flex: 1, padding: "10px" }}>
        <CandlestickChart
          data={data}
          id={"chart1"}
          width={adjustedWidth}
          height={height}
          decimal={5}
          scrollZoom={{
            enable: true,
            max: 100,
          }}
          rangeSelector={{
            enable: true,
            height: 150,
            initialRange: { type: "month", value: 12 },
          }}
          responsiveBreakPoint={500}
        />
      </div>
    </div>
  );
};

// Style for icons
const iconStyle: React.CSSProperties = {
  cursor: "pointer",
  color: "#333",
  transition: "color 0.2s",
};


export default CandlestickGraph;
