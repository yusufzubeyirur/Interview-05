import React, { useState } from "react";
import "./styles.css";

function App() {
  const [textList, setTextList] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim().length > 0) {
      setTextList([...textList, e.target.value]);
      e.target.value = ""; // Input alanını temizler
    }
  };

  const handleTextClick = (text) => {
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderTextList = () => {
    return textList.map((text, index) => (
      <li key={index} onClick={() => handleTextClick(text)}>
        {text.length >= 6 ? text.slice(0, 5) + "..." : text}
      </li>
    ));
  };

  const renderModal = () => {
    return (
      <div className="modal" onClick={handleCloseModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>{selectedText}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <input type="text" onKeyDown={handleKeyDown} placeholder="Metin girin" />
      <ul>{renderTextList()}</ul>
      {isModalOpen && renderModal()}
    </div>
  );
}

export default App;
