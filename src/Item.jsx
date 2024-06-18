import DeleteIcon from "@mui/icons-material/Delete";

function Item({handleDelete,data}) {
  return (
    <>
      <div className="expense">
        <p>{data.name}</p>
        <div className="rate">
          <p>{data.cost}</p>
          <DeleteIcon onClick={(e)=>{handleDelete(e,id)}} style={{cursor:"pointer"}}/>
        </div>
      </div>
    </>
  );
}

export default Item;
