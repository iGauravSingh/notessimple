import { useDispatch } from "react-redux";
import { addNote } from "../store/noteSlice";
import { AiOutlinePlus } from "react-icons/ai";
import './NoteAdd.css'
import { useState } from "react";

const NoteAdd = () => {
  const dispatch = useDispatch()
  const [text,setText] = useState('')

  const handleChange = (e)=>{
    setText(e.target.value)
  }
  const handleclick =()=>{
    const nwId = Math.floor(Math.random() * 999)
    const newNote = {_id:nwId, text: text, isCompleted: false }
    dispatch(addNote(newNote))
    setText('')
  }

  return (
    <div className="noteAddContainer">
        <input value={text} onChange={handleChange} className="noteAddInput" type="text" />
        <AiOutlinePlus size={40} onClick={handleclick} />
    </div>
  )
}

export default NoteAdd