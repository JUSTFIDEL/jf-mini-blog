import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('justfidel')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		const blog = { title, body, author }
		setIsLoading(true)

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('new blog added')
			setIsLoading(false)
			// navigate(-1)
			// navigate(+1)
			navigate('/')
		})
	}

	return (
		<div className='create'>
			<h2>Create a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title</label>
				<input
					type='text'
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label>Blog Body</label>
				<textarea
					required
					value={body}
					onChange={e => setBody(e.target.value)}
				></textarea>

				<select
					value={author}
					onChange={e => setAuthor(e.target.value)}
				>
					<option value='justfidel'>justfidel</option>
					<option value='talitha'>talitha</option>
					<option value='fidel'>fidel</option>
				</select>

				{!isLoading ? (
					<button>Add Blog</button>
				) : (
					<button>Adding Blog...</button>
				)}
				<p>{title}</p>
				<p>{body}</p>
				<span>{author}</span>
			</form>
		</div>
	)
}

export default Create
