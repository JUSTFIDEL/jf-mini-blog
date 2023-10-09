import React from 'react'
import { Link } from 'react-router-dom'
import { MdDangerous } from 'react-icons/md'

const NotFound = () => {
	return (
		<div className='center'>
			<h2>
				<MdDangerous /> Sorry!
			</h2>
			<p>The requested page could not be found</p>
			<Link>Go back to homepage</Link>
		</div>
	)
}

export default NotFound
