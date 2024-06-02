import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    readUserById,
    readAveragesById,
    readCompanyMetrics,
    listUsers,
} from '../utils/api'
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
        option: "activity"
    })
    const [averages, setAverages] = useState({
        sleep_duration_average: 0,
        daily_steps_average: 0,
        stress_level_average: 0,
        heart_rate_average: 0,
        bmi_category_average: 'N/A',
    })
    const [companyMetrics, setCompanyMetrics] = useState({
        sleep_duration_total: 0,
        quality_of_sleep_average: 0,
    })
    const [view, setView] = useState('user')
    const [employees, setEmployees] = useState(null)

    // Fetches user from the API along with lastMonthAverages for that user and company-wide lastMonthAverages for admin purposes
    const loadData = useCallback(async () => {
        const abortController = new AbortController()

        try {
            // Reads user designated by url param
            const readUserResponse = await readUserById(
                userId,
                abortController.signal
            )
            setUser(readUserResponse)

            // Reads that user's lastMonthAverages from his/her entries
            const readAveragesResponse = await readAveragesById(
                userId,
                abortController.signal
            )
            setAverages(readAveragesResponse)

            if (readUserResponse.admin) {
                // Reads all user's lastMonthAverages and totals
                const readCompanyMetricsResponse = await readCompanyMetrics(
                    abortController.signal
                )
                setCompanyMetrics(readCompanyMetricsResponse)

                // Lists all users for use in AdminEmployeesTable
                const listUsersResponse = await listUsers(
                    abortController.signal
                )
                setEmployees(listUsersResponse)
            }

        } catch (error) {
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [userId])

    useEffect(() => {
        loadData()
    }, [loadData, userId])

    function renderConditionsMet() {
        if (user && averages.sleep_duration_average) {
            return true
        } else {
            return false
        }
    }

    const openModal = (option) => {
        setIsModalOpen({
            state: true,
            option: option
        })
    }


    const renderContent = () => {
        if (!renderConditionsMet()) {
            return (
                <div className="py-20">
                    <Spinner />
                </div>
            )
        }
    
        return (
            <>
                <section className="bg-slate-100 py-5">
                    {view === 'admin' ? (
                        <AdminProgressCharts companyMetrics={companyMetrics} />
                    ) : (
                        <UserProgressCharts averages={averages} />
                    )
                    }
                    <div className="flex flex-row w-full mx-auto mt-5 max-w-5xl max-h-[80vh] rounded-lg shadow-md overflow-hidden ">
                        <DashboardSidebar
                            openModal={openModal}
                            userIsAdmin={user.admin}
                            view={view}
                            setView={setView}
                        />
                        {view === 'admin' ? (
                            <AdminEmployeesTable employees={employees} setEmployees={setEmployees} />
                        ) : (
                            <UserRecordsTable userId={userId} />
                        )}
                    </div>
                </section>
                {isModalOpen.state && (
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        option={isModalOpen.option}
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
