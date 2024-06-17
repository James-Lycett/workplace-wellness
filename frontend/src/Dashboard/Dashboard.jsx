import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadAllData } from '../utils/api'
import Spinner from '../utils/Spinner'
import Modal from './Modal/Modal'
import AdminProgressCharts from './AdminProgressCharts/AdminProgressCharts'
import AdminEmployeesTable from './AdminEmployeesTable/AdminEmployeesTable'
import UserRecordsTable from './UserRecordsTable/UserRecordsTable'
import UserProgressCharts from './UserProgressCharts/UserProgressCharts'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'

export default function AdminHome() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState({
        state: false,
        option: 'activity',
        employeeFromEdit: {},
    })
    const [averages, setAverages] = useState({
        sleep_duration_average: 0,
        daily_steps_average: 0,
        stress_level_average: 0,
        heart_rate_average: 0,
        bmi_category_average: 'N/A',
        loaded: false,
    })
    const [companyMetrics, setCompanyMetrics] = useState({
        sleep_duration_total: 0,
        quality_of_sleep_average: 0,
    })
    const [view, setView] = useState('user')
    const [employees, setEmployees] = useState(null)
    const [entries, setEntries] = useState(null)

    // Fetches user from the API along with that user's entries, lastMonthAverages for that user, and company-wide lastMonthAverages for admin purposes (if user is an admin)
    const loadData = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const data = await loadAllData(userId, abortController.signal)

            setUser(data.user)
            setEntries(data.entries)
            setAverages({
                ...data.averages,
                loaded: true,
            })
            setCompanyMetrics(data.companyMetrics)
            setEmployees(data.employees)
        } catch (error) {
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [userId])

    useEffect(() => {
        loadData()
    }, [loadData])

    const openModal = (option, employee) => {
        setIsModalOpen({
            state: true,
            option: option,
            employeeFromEdit: employee,
        })
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
                    {view === 'admin' ? (
                        <AdminProgressCharts companyMetrics={companyMetrics} />
                    ) : (
                        <UserProgressCharts averages={averages} />
                    )}
                    <div className="flex flex-col md:flex-row  w-full mx-auto mt-5 max-w-5xl md:max-h-[56vh] rounded-lg shadow-md overflow-hidden ">
                        <DashboardSidebar
                            openModal={openModal}
                            userIsAdmin={user.admin}
                            view={view}
                            setView={setView}
                        />
                        {view === 'admin' ? (
                            <AdminEmployeesTable
                                openModal={openModal}
                                employees={employees}
                            />
                        ) : (
                            <UserRecordsTable
                                userId={userId}
                                entries={entries}
                                setEntries={setEntries}
                            />
                        )}
                    </div>
                </section>
                {isModalOpen.state && (
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        isModalOpen={isModalOpen}
                        loadData={loadData}
                        userId={userId}
                        setEmployees={setEmployees}
                    />
                )}
            </>
        )
    }

    return renderContent()
}
