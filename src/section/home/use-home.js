import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHomePage() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [cardData, setCardData] = useState([
    { id: 1, card: [] },
    { id: 2, card: [] },
    { id: 3, card: [] },
    { id: 4, card: [] },
  ]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputVal) {
      const tempArray = [...cardData];
      if (editIndex !== null) {
        tempArray[editIndex.i].card[editIndex.j].text = inputVal;
        setEditIndex(null);
      } else {
        tempArray[0].card.push({
          id: tempArray[0].card.length + 1,
          text: inputVal,
        });
      }
      setCardData(tempArray);
      setInputVal("");
    }
  };

  const handleNext = (i, j) => {
    if (i < cardData?.length - 1) {
      const tempArray = [...cardData];
      const sliceObj = tempArray[i]?.card[j];
      tempArray[i]?.card?.splice(j, 1);
      tempArray[i + 1].card?.push(sliceObj);
      setCardData(tempArray);
    }
  };

  const handlePrevious = (i, j) => {
    if (i > 0 && j < cardData[i]?.card?.length) {
      const tempArray = [...cardData];
      const sliceObj = tempArray[i]?.card[j];
      tempArray[i].card?.splice(j, 1);
      tempArray[i - 1]?.card?.push(sliceObj);
      setCardData(tempArray);
    }
  };

  const handleEdit = (i, j) => {
    setEditIndex({ i, j });
    setInputVal(cardData[i]?.card[j]?.text);
  };

  const handleDelete = (i, j) => {
    const tempArray = [...cardData];
    tempArray[i]?.card?.splice(j, 1);
    setCardData(tempArray);
    setInputVal("");
    setEditIndex(null);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };
  return {
    navigate,
    inputVal,
    setInputVal,
    editIndex,
    setEditIndex,
    cardData,
    handleChange,
    handleAdd,
    handleNext,
    handlePrevious,
    handleEdit,
    handleDelete,
    handleLogout,
  };
}
