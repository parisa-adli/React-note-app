import ToastMessage from "./toastMessage";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const complatedNotes = notes.filter((n) => n.complated).length;
  const unComplatedNotes = allNotes - complatedNotes;

  if (!allNotes)
    return (
      <ToastMessage>
        <span>
          <span>❕</span> No notes has been already added.
        </span>
      </ToastMessage>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Complated <span>{complatedNotes}</span>
      </li>
      <li>
        Open <span>{unComplatedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
