export const buttonData = ({
  handlePrevious,
  handleEdit,
  handleDelete,
  handleNext,
}) => [
  {
    label: "Back",
    onClick: (i, j) => handlePrevious(i, j),
    disabled: (i) => i === 0,
  },
  {
    label: "Edit",
    onClick: (i, j) => handleEdit(i, j),
    disabled: () => false,
  },
  {
    label: "Del",
    onClick: (i, j) => handleDelete(i, j),
    disabled: () => false,
  },
  {
    label: "Next",
    onClick: (i, j) => handleNext(i, j),
    disabled: (i, cardData) => i === cardData.length - 1,
  },
];
