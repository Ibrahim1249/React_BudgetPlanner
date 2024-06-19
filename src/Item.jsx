import DeleteIcon from "@mui/icons-material/Delete";

function Item({handleDelete,data}) {
  return (
    <>
      <div className="expense">
        <p>{data.name}</p>
        <div className="rate">
          <p>Rs : {data.cost}</p>
          <DeleteIcon onClick={(e)=>{handleDelete(e,data.id)}} style={{cursor:"pointer"}}/>
        </div>
      </div>
    </>
  );
}

export default Item;
