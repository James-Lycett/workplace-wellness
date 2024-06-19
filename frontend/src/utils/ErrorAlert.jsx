import { Alert } from 'flowbite-react'

export default function ErrorAlert({ error }) {
    return (
        error && (
            <Alert color="info" onDismiss={() => alert('Alert dismissed!')}>
                <span className="font-medium">Error! </span>
                {error.message}
            </Alert>
        )
    )
}
