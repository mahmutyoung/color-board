const Square = ({
  clickHandler,
  onClickHandler,
  doubleClickHandler,
  color,
}) => {
  return (
    <button
      className='square'
      style={{ backgroundColor: color }}
      onMouseLeave={clickHandler}
      onClick={onClickHandler}
      onDoubleClick={doubleClickHandler}
    />
  );
};
export default Square;
