const ButtonGroup = () => {
  return (
    <div className="mt-1 d-flex">
      <button className="btn  grp-button "> + </button>
      <button disabled className="btn  grp-button bg-dark border-0">
        1
      </button>
      <button className="btn  grp-button"> - </button>
    </div>
  );
};

export default ButtonGroup;
