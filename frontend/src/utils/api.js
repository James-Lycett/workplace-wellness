const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001"

// Some placeholder data to play around with until we get the backend connected

const headers = new Headers()
headers.append("Content-Type", "application/json")

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options)

        if (response.status === 204) {
            return null
        }

        const payload = await response.json()

        if (payload.error) {
            return Promise.reject({ message: payload.error })
        }

        return payload.data
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack)
            throw error
        }

        return Promise.resolve(onCancel)
    }
}

// Returns an array of all users
export async function listUsers(signal) {
    const url = `${API_BASE_URL}/data`

    return await fetchJson(url, { headers, signal })
}

// Returns a single user with the matching userId
export async function readUserById(userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Returns a single user with the matching username
export async function readUserByUsername(username, signal) {
    const url = `${API_BASE_URL}/data/user/${username}`

    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Creates a new user
export async function createUser(user, signal) {
    const url = `${API_BASE_URL}/data`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: user }),
        signal,
    }

    return await fetchJson(url, options)
}

// Updates an existing user
export async function updateUser(userId, updatedUser, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify({ data: updatedUser }),
        signal,
    }

    return await fetchJson(url, options)
}

// Deletes a user (if the user exists, obviously)
export async function deleteUser(userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: "DELETE",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Returns an array of all entries for all users
export async function listEntries(signal) {
    const url = `${API_BASE_URL}/entries`

    return await fetchJson(url, { headers, signal })
}

// Creates a new entry
export async function createEntry(entry, signal) {
    const url = `${API_BASE_URL}/entries`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: entry }),
        signal,
    }

    return await fetchJson(url, options)
}

// Returns a single entry with the matching entryId
export async function readEntryById(entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

export async function readEntriesByPerson(userId, signal) {
    const url = `${API_BASE_URL}/entries/user/${userId}`
    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Deletes an entry (if the entry exists, obviously)
export async function deleteEntry(entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: "DELETE",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}
