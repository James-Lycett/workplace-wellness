import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeesListNew from './EmployeesListNew'
import { Progress, Sidebar, Table, Checkbox } from 'flowbite-react'
import RadialBar from './RadialBar'
import {
    HiBan,
    HiChartPie,
    HiLightningBolt,
    HiLogout,
    HiOutlinePlus,
    HiOutlineIdentification,
    HiTable,
    HiUserGroup,
    HiDocumentReport,
} from 'react-icons/hi'
import {
    readUserById,
    readAveragesById,
    readCompanyMetrics,
} from '../utils/api'
import Spinner from '../utils/Spinner'
import ActivityLogForm from '../UserActivityLog/ActivityLogForm'
import ActivityLogModal from './ActivityLogModal'

export default function AdminHome() {
    const { userId } = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility
    const [user, setUser] = useState(null)
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

    // Placeholder admin goals data:
    const goals = {
        // sleepHoursThisMonth: 1545, now getting this straight from the db, see "companyMetrics"
        sleepHoursGoal: 1200,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
        sleepQualityGoal: 8,
    }

    // Fetches user from the API along with lastMonthAverages for that user and company-wide lastMonthAverages for admin purposes
    const loadData = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const readUserResponse = await readUserById(
                userId,
                abortController.signal
            )
            const readAveragesResponse = await readAveragesById(
                userId,
                abortController.signal
            )
            setAverages(readAveragesResponse)
            setUser(readUserResponse)
            if (readUserResponse.admin) {
                const readCompanyMetricsResponse = await readCompanyMetrics(
                    abortController.signal
                )
                setCompanyMetrics(readCompanyMetricsResponse)
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

    function calculateSleepHoursProgress() {
        const progressValue =
            (companyMetrics.sleep_duration_total / goals.sleepHoursGoal) * 100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)

        return Math.floor(boundedProgressValue) // Return the progress value
    }

    function calculateSleepQualityProgress() {
        const progressValue =
            (companyMetrics.quality_of_sleep_average / goals.sleepQualityGoal) *
            100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)
        return Math.floor(boundedProgressValue)
    }

    function renderConditionsMet() {
        // I left out companyMetrics since that's conditionally fetched in loadData()
        if (user && averages.sleep_duration_average) {
            return true
        } else {
            return false
        }
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    if (renderConditionsMet()) {
        return (
            <>
                <section className="bg-slate-100 py-5">
                    <div className="flex flex-col justify-center bg-white w-full max-w-5xl mx-auto rounded-md shadow-md">
                        <h2 className="text-v2-drkblue font-semibold self-center mt-5">
                            Department Goals
                        </h2>
                        <Progress
                            progress={70}
                            color="blue"
                            progressLabelPosition="inside"
                            className="mt-10 mb-5 max-w-4xl mx-auto"
                            size="xl"
                            labelProgress
                        />
                    </div>
                    <div className="flex flex-row justify-between my-5 mx-auto max-w-5xl font-light">
                        <div className="flex flex-col justify-center bg-white me-5 rounded-lg shadow-md">
                            <RadialBar
                                series={[calculateSleepHoursProgress()]}
                                labels={['Sleep Hours']}
                                colors={['#7AEB7F']}
                            />
                        </div>
                        <div className="flex flex-col justify-center bg-white mx-10 rounded-lg shadow-md">
                            <RadialBar
                                series={[calculateSleepQualityProgress()]}
                                labels={['Sleep Quality']}
                                colors={['#EB897A']}
                            />
                        </div>
                        <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md">
                            <RadialBar
                                series={[45]}
                                labels={['Tasks Completed']}
                                colors={['#E8EA8B']}
                            />
                        </div>
                    </div>
                    <div className=" flex flex-row w-full mx-auto mt-5 max-w-5xl max-h-[50vh] rounded-lg shadow-md overflow-hidden ">
                        <div>
                            <Sidebar aria-label="Default sidebar example">
                                <Sidebar.Logo
                                    href="#"
                                    img="/circle.png"
                                    imgAlt="Workplace Wellness logo"
                                >
                                    Workplace Wellness
                                </Sidebar.Logo>
                                <Sidebar.Items className="flex flex-col justify-between h-[43vh]">
                                    <div>
                                        <Sidebar.ItemGroup className="">
                                            <Sidebar.Item
                                                href="#"
                                                icon={HiOutlineIdentification}
                                            >
                                                Profile
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="#"
                                                icon={HiTable}
                                            >
                                                My Logs
                                            </Sidebar.Item>
                                            <Sidebar.Collapse
                                                icon={HiUserGroup}
                                                label="Users"
                                            >
                                                <Sidebar.Item
                                                    href="#"
                                                    icon={HiChartPie}
                                                >
                                                    Statistics
                                                </Sidebar.Item>
                                                <Sidebar.Item
                                                    href="#"
                                                    icon={HiLightningBolt}
                                                >
                                                    Goals
                                                </Sidebar.Item>
                                                <Sidebar.Item
                                                    href="#"
                                                    icon={HiBan}
                                                >
                                                    Inactive
                                                </Sidebar.Item>
                                            </Sidebar.Collapse>
                                        </Sidebar.ItemGroup>
                                    </div>
                                    <div>
                                        <Sidebar.ItemGroup>
                                            <Sidebar.Item
                                                href="#"
                                                onClick={openModal}
                                                icon={HiDocumentReport}
                                            >
                                                LOG NEW ACTIVITY
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="#"
                                                icon={HiOutlinePlus}
                                            >
                                                Add A New Employee
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="#"
                                                icon={HiLogout}
                                            >
                                                Sign Out
                                            </Sidebar.Item>
                                        </Sidebar.ItemGroup>
                                    </div>
                                </Sidebar.Items>
                            </Sidebar>
                        </div>
                        <div className="overflow-auto">
                            <Table hoverable>
                                <Table.Head className="sticky top-0 bg-white z-10">
                                    <Table.HeadCell>
                                        <Checkbox />
                                    </Table.HeadCell>
                                    <Table.HeadCell>User</Table.HeadCell>
                                    <Table.HeadCell>Age</Table.HeadCell>
                                    <Table.HeadCell>
                                        Stress Level
                                    </Table.HeadCell>
                                    <Table.HeadCell>Sleep Hours</Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">X</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <EmployeesListNew />
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </section>
                {isModalOpen && <ActivityLogModal setIsModalOpen={setIsModalOpen}/>}
            </>
        )
    } else {
        return <Spinner />
    }
}