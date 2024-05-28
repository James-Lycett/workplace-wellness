import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeesList from './EmployeesList'
import EmployeesListNew from './EmployeesListNew'
import mood from './mood_img.png'
import DropDownMenuButton from '../utils/DropDownMenuButton'
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
import { readUserById, readAveragesById, readAllAverages } from '../utils/api'


export default function AdminHome() {
    const { userId } = useParams()
    // Placeholder admin goals data:
    const goals = {
        sleepHoursThisMonth: 1545,
        sleepHoursGoal: 2800,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
    }
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: 'Home',
            route: '/',
        },
        {
            option: 'Profile',
            route: `/user/${userId}/home`,
        },
        {
            option: 'Contact',
            route: '/bp/about',
        },
        {
            option: 'Terms',
            route: '/bp/terms',
        },
        {
            option: 'About',
            route: '/bp/privacy',
        },
    ]
    // Calculate percent progress towards a goal
    //const sleepHoursProgress = (goals.sleepHoursThisMonth / goals.sleepHoursGoal) * 100
    //const tasksProgress = (goals.tasksMet / goals.tasksGoal) * 100
    // if we ever get around to making a backend route for this


    const [user, setUser] = useState(null)
    const [averages, setAverages] = useState({
        sleep_duration_average: 0,
        daily_steps_average: 0,
        stress_level_average: 0,
        heart_rate_average: 0,
        bmi_category_average: "N/A"
    })
    const [companyAverages, setCompanyAverages] = useState({
        sleep_duration_average: 0,
        quality_of_sleep_average: 0,
    })

    // Fetches user from the API along with lastMonthAverages for that user and company-wide lastMonthAverages for admin purposes
    const loadUser = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const readUserResponse = await readUserById(userId, abortController.signal)
            const readAveragesResponse = await readAveragesById(userId, abortController.signal)
            setAverages(readAveragesResponse)
            setUser(readUserResponse)
            if (readUserResponse.admin) {
                const readCompanyAveragesResponse = await readAllAverages(abortController.signal)
                setCompanyAverages(readCompanyAveragesResponse)
                console.log(`companyAverages: ${JSON.stringify(companyAverages, null, 4)}`)
            }
            
            console.log(`
            user: ${JSON.stringify(user, null, 4)},
            averages: ${JSON.stringify(averages, null, 4)},
            `)
            
        } catch (error) {
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [userId])

    useEffect(() => {
        loadUser()
    }, [loadUser, userId])

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
                            series={[70]}
                            labels={['Sleep Hours']}
                            colors={['#7AEB7F']}
                        />
                    </div>
                    <div className="flex flex-col justify-center bg-white mx-10 rounded-lg shadow-md">
                        <RadialBar
                            series={[30]}
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
                                        <Sidebar.Item href="#" icon={HiTable}>
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
                                            <Sidebar.Item href="#" icon={HiBan}>
                                                Inactive
                                            </Sidebar.Item>
                                        </Sidebar.Collapse>
                                    </Sidebar.ItemGroup>
                                </div>
                                <div>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiDocumentReport}
                                        >
                                            SEE REPORT
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiOutlinePlus}
                                        >
                                            Add A New Employee
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#" icon={HiLogout}>
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
                                <Table.HeadCell>Stress Level</Table.HeadCell>
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
        </>
    )
}

/*
<select name="admin-options" id="admin-options">
                    <option value="">Menu</option>
                    <option value="profile">Profile</option>
                    <option value="report_history">Report History</option>
                    <option value="employees_list">Full List of Employees</option>
                    <option value="settings">Settings</option>
                    <option value="help_desk">IT Help Desk</option>
                </select>
*/
