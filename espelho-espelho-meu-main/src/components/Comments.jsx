import { useState } from 'react'
import './Comments.css'

function Comments({ comments = [] }) {
  const [commentList, setCommentList] = useState(comments)
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!text.trim()) {
      return
    }

    const newComment = {
      id: Date.now(),
      user: 'bookbyme',
      text: text.trim()
    }

    setCommentList([...commentList, newComment])
    setText('')
  }

  return (
    <div className="comments">
      <div className="comments__list">
        {commentList.map((comment) => (
          <p key={comment.id}>
            <strong>{comment.user}</strong> {comment.text}
          </p>
        ))}
      </div>

      <form className="comments__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <button type="submit">
          Publicar
        </button>
      </form>
    </div>
  )
}

export default Comments