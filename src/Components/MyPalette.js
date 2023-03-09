import ColorSquare from "./ColorSquare";

const MyPalette = ({ myColors, handleDoubleClick }) => {
  let myPalette;
  if (myColors !== undefined) {
    myPalette = myColors.map((myColor) => (
      <ColorSquare
        key={myColor.id}
        color={myColor.color}
        doubleClickHandler={() => handleDoubleClick(myColor)} />
    ));
  }
  return <>{myPalette}</>;
};
export default MyPalette;