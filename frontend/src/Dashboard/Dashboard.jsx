import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { loadAllData } from '../utils/api'
import Spinner from '../utils/Spinner'
//import Modal from './Modal/Modal'
import AdminProgressCharts from './AdminProgressCharts/AdminProgressCharts'
import AdminEmployeesTable from './AdminEmployeesTable/AdminEmployeesTable'
import UserRecordsTable from './UserRecordsTable/UserRecordsTable'
import UserProgressCharts from './UserProgressCharts/UserProgressCharts'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import SummaryBar from './SummaryBar/SummaryBar'
import { LoadDataContext, EntryContext } from '../utils/contexts'

export default function AdminHome() {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    /*const [isModalOpen, setIsModalOpen] = useState({
        state: false,
        option: 'activity',
        employeeFromEdit: {},
        entryFromEdit: {},
    })*/
    const [averages, setAverages] = useState({
        sleep_duration_average: 0,
        daily_steps_average: 0,
        stress_level_average: 0,
        heart_rate_average: 0,
        bmi_category_average: 'N/A',
        loaded: false,
    })
    const [companyAverages, setCompanyAverages] = useState({
        sleep_duration_total: 0,
        quality_of_sleep_average: 0,
    })
    const [view, setView] = useState('user')
    const [employees, setEmployees] = useState(null)
    const [entries, setEntries] = useState(null)
    const [goals, setGoals] = useState(null)

    /* Fetches user from the API along with that user's entries, goals which are only accessible if admin, 
     lastMonthAverages for that user, and company-wide lastMonthAverages for admin purposes (if user is an admin) */
    const loadData = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const data = await loadAllData(userId, abortController.signal)

            setUser(data.user)
            setEntries(data.entries)
            setGoals(data.goals)
            setAverages({
                ...data.averages,
                loaded: true,
            })
            setCompanyAverages(data.companyAverages)
            setEmployees(data.employees)
        } catch (error) {
            if (
                error.message ===
                    "Forbidden: You do not have access to this user's data" ||
                error.message === 'No auth token'
            ) {
                navigate('/login', {
                    state: { message: 'You must be logged in' },
                })
            }
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [userId, navigate])

    useEffect(() => {
        loadData()
    }, [loadData])

    const openModal = (option, employee = null, label = null, goals = null, entry = null) => {
        // don't do shit
    }

    const renderContent = () => {
        if (!user) {
            return (
                <div className="py-20">
                    <Spinner />
                </div>
            )
        }

        return (
            <>
                <section className="bg-slate-100 py-5 ">
                    <SummaryBar user={user} averages={averages} goals={goals} view={view}/>
                    {view === 'admin' ? (
                        <AdminProgressCharts
                            openModal={openModal}
                            companyAverages={companyAverages}
                            goals={goals}
                        />
                    ) : (
                        <UserProgressCharts averages={averages} goals={goals}/>
                    )}
                    <div className="flex flex-col md:flex-row  w-full mx-auto mt-5 max-w-5xl min-h-[50vh] md:max-h-[75vh] rounded-lg shadow-md overflow-hidden ">
                        <LoadDataContext.Provider value={loadData}>
                            <DashboardSidebar
                                openModal={openModal}
                                userIsAdmin={user.admin}
                                view={view}
                                setView={setView}
                            />
                        </LoadDataContext.Provider>
                        {view === 'admin' ? (
                            <AdminEmployeesTable
                                openModal={openModal}
                                employees={employees}
                            />
                        ) : (
                            <LoadDataContext.Provider value={{ loadData, userId}}>
                                <EntryContext.Provider value={{ entries, setEntries }}>
                                    <UserRecordsTable/>
                                </EntryContext.Provider>
                            </LoadDataContext.Provider>
                        )}
                    </div>
                </section>
                {/*isModalOpen.state && (
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        isModalOpen={isModalOpen}
                        loadData={loadData}
                        userId={userId}
                        setEmployees={setEmployees}
                    />
                )*/}
            </>
        )
    }

    return renderContent()
}
