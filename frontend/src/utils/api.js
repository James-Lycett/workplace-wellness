const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001'

// Some placeholder data to play around with until we get the backend connected

const headers = new Headers()
headers.append('Content-Type', 'application/json')

async function fetchJson (url, options, onCancel) {
    const token = localStorage.getItem('token')

    if (!options.headers) {
        options.headers = new Headers()
    }

    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`)
    }

    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include',
        })

        if (response.status === 204) {
            return null
        }

        const payload = await response.json()

        if (payload.error) {
            return Promise.reject({ message: payload.error })
        }

        return payload.data
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error(error.stack)
            throw error
        }

        return Promise.resolve(onCancel)
    }
}

/*
    How to call userLogin function:
    const responseFromAPI = await userLogin(username, password, signal)
    Where username and password are strings and signal is an abortController.signal

    ...or nothing if the credentials are wrong

    A token will be sent back in the response body, stored here in localStorage, and automatically sent with subsequent requests.
    Make sure you're logged in to the user that you're requesting!
*/
export async function userLogin (username, password, signal) {
    const url = `${API_BASE_URL}/login`
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            data: { username: username, password: password },
        }),
        signal,
    }

    const { token, user } = await fetchJson(url, options)

    localStorage.setItem('token', token)

    return user
}

export function userLogout (signal) {
    localStorage.removeItem('token')
}

// Returns an array of all users
export async function listUsers (signal) {
    const url = `${API_BASE_URL}/data`

    return await fetchJson(url, { headers, signal })
}

// Returns a single user with the matching userId
export async function readUserById (userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Returns a single user with the matching username
export async function readUserByUsername (username, signal) {
    const url = `${API_BASE_URL}/data/user/${username}`

    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Creates a new user
export async function createUser (user, signal) {
    const url = `${API_BASE_URL}/data`
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({ data: user }),
        signal,
    }

    return await fetchJson(url, options)
}

// Updates an existing user
export async function updateUser (userId, updatedUser, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify({ data: updatedUser }),
        signal,
    }

    return await fetchJson(url, options)
}

// Deletes a user (if the user exists, obviously)
export async function deleteUser (userId, signal) {
    const url = `${API_BASE_URL}/data/${userId}`
    const options = {
        method: 'DELETE',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Returns an array of all entries for all users
export async function listEntries (signal) {
    const url = `${API_BASE_URL}/entries`

    return await fetchJson(url, { headers, signal })
}

// Creates a new entry
export async function createEntry (entry, signal) {
    const url = `${API_BASE_URL}/entries`
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({ data: entry }),
        signal,
    }

    return await fetchJson(url, options)
}

// Returns a single entry with the matching entryId
export async function readEntryById (entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Returns a single entry with the matching entryId
export async function updateEntry (entryId, entry, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: 'PUT',
        body: JSON.stringify({ data: entry }),
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

export async function readEntriesByPerson (userId, signal) {
    const url = `${API_BASE_URL}/entries/user/${userId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Deletes an entry (if the entry exists, obviously)
export async function deleteEntry (entryId, signal) {
    const url = `${API_BASE_URL}/entries/${entryId}`
    const options = {
        method: 'DELETE',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

/* Returns a single user's 'Last Month's Metrics' from the matching userId
    returns:
    {
        data: 
            sleep_duration_average: 6.931034482758621,
            daily_steps_average: 5286.275862068966,
            stress_level_average: 4.206896551724138,
            heart_rate_average: 97.06896551724138,
            bmi_category_average: "Overweight"
        }
    }

*/
export async function readAveragesById (userId, signal) {
    const url = `${API_BASE_URL}/entries/averages/${userId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

/* GETs all users' sleep total and average quality of sleep, for use in adminHome progress chart things
    returns:
    {
        data: {
            sleep_duration_total: n,
            quality_of_sleep_average: n
        }
    }
*/
export async function readCompanyMetrics (signal) {
    const url = `${API_BASE_URL}/entries/all/metrics`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

export async function loadAllData (userId, signal) {
    const url = `${API_BASE_URL}/load/${userId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

export async function readGoalsByPerson (personId, signal) {
    const url = `${API_BASE_URL}/goals/${personId}`
    const options = {
        method: 'GET',
        headers,
        signal,
    }

    return await fetchJson(url, options)
}
export async function updateGoals (personId, updatedGoals, signal) {
    const url = `${API_BASE_URL}/goals/${personId}`
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify({ data: updatedGoals }),
        signal,
    }

    return await fetchJson(url, options)
}
