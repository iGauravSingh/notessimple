import { useSelector } from 'react-redux'
import NoteAdd from './NoteAdd'
import NoteItem from './NoteItem'
import './Notes.css'




const Notes = () => {

  const noteData = useSelector((state)=> {
    return state.notes
  })
  
  return (
    <div className='mainNoteContainer'>
        <NoteAdd />
        <div className='noteBox'>
                  {noteData.map((item)=> <NoteItem key={item._id} id={item._id} text={item.text} isCompleted={item.isCompleted} />)}
        </div>

    </div>
  )
}

export default Notes