"use client"

interface Props {
    error: Error,
    reset: () => void,
}

const ErrorPage = ({error, reset}: Props) => {
    console.log('Error::', error)
  return (
    <div>
        <p>An unexpected error occure!</p>
        <button className="btn" onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default ErrorPage