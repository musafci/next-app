import React from 'react'

interface PropsData {
	params: {
		id: number,
		photoId: number
	}
}

const PhotosDetails = ({params: {id, photoId}} : PropsData) => {
  return (
    <div>PhotosDetails::  userid: {id} photoId: {photoId}</div>
  )
}

export default PhotosDetails