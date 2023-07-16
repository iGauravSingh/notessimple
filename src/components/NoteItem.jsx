import { useDispatch } from "react-redux";
import { deleteNote } from "../store/noteSlice";
import { MdDeleteForever } from "react-icons/md";
import './NoteItem.css'


const NoteItem = ({ id,text,isCompleted }) => {

  const dispatch = useDispatch()

  const handleDelete = (id)=> {
    dispatch(deleteNote(id))
  }



  return (
    <div className="noteItemContainer">
        <input color="green" className="noteItemInput" type='checkbox' />
        {text}
        <MdDeleteForever onClick={()=>handleDelete(id)} color="red" size={40} />
    </div>
  )
}

export default NoteItem