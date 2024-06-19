import { Alert } from 'flowbite-react'

export default function ErrorAlert({ error }) {
    return (
        error && (
            <Alert color="info">
                <span className="font-medium">Error! </span>
                {error.message}
            </Alert>
        )
    )
}
