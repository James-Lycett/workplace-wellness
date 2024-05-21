import React from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeesList from './EmployeesList'
import mood from './mood_img.png'
import DropDownMenuButton from '../utils/DropDownMenuButton'
import { Progress, Sidebar, Table } from 'flowbite-react'
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
} from 'react-icons/hi'

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
                <div className=" flex flex-row justify-center w-full max-w-5xl">
                    <div>
                        <Sidebar aria-label="Default sidebar example">
                            <Sidebar.Logo
                                href="#"
                                img="/circle.png"
                                imgAlt="Workplace Wellness logo"
                            >
                                Workplace Wellness
                            </Sidebar.Logo>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
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
                                        <Sidebar.Item href="#" icon={HiBan}>
                                            Inactive
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiLightningBolt}
                                        >
                                            Goals
                                        </Sidebar.Item>
                                    </Sidebar.Collapse>
                                </Sidebar.ItemGroup>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="#" icon={HiOutlinePlus}>
                                        Register A New Employee
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiLogout}>
                                        Sign Out
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    <input type="checkbox"></input>
                                </Table.HeadCell>
                                <Table.HeadCell>User</Table.HeadCell>
                                <Table.HeadCell>Age</Table.HeadCell>
                                <Table.HeadCell>Stress Level</Table.HeadCell>
                                <Table.HeadCell>Sleep Hours</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        <input type="checkbox"></input>
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {'Blanfer0'}
                                    </Table.Cell>
                                    <Table.Cell>Sliver</Table.Cell>
                                    <Table.Cell>Laptop</Table.Cell>
                                    <Table.Cell>$2999</Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href="#"
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            Edit
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        <input type="checkbox"></input>
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        Microsoft Surface Pro
                                    </Table.Cell>
                                    <Table.Cell>White</Table.Cell>
                                    <Table.Cell>Laptop PC</Table.Cell>
                                    <Table.Cell>$1999</Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href="#"
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            Edit
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        <input type="checkbox"></input>
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        Magic Mouse 2
                                    </Table.Cell>
                                    <Table.Cell>Black</Table.Cell>
                                    <Table.Cell>Accessories</Table.Cell>
                                    <Table.Cell>$99</Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href="#"
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            Edit
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>

                <div className="columns-2">
                    <div className="break-after-column m-6">
                        <div className="columns-2">
                            <img
                                src={mood}
                                style={{ width: '200px', margin: '0 0 0 10px' }}
                                alt="company mood graph"
                            ></img>
                            <h2 className="text-3xl my-3">Company Mood!</h2>
                            <h3 className="text-2xl font-bold">
                                {goals.companyMood}
                            </h3>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="border-2 border-black rounded-xl text-center py-4 my-3 w-1/2">
                                <div className="mx-3 pb-2">
                                    <h2 className="text-xl font-bold">
                                        Employee Sleep Quality Goals
                                    </h2>
                                    <h3 className="text-primary-4 text-xl font-extrabold">
                                        55% Completion
                                    </h3>
                                    <p className="mt-3">
                                        Total{' '}
                                        {goals.sleepHoursThisMonth.toLocaleString()}{' '}
                                        out of{' '}
                                        {goals.sleepHoursGoal.toLocaleString()}{' '}
                                        hours of sleep.
                                    </p>
                                </div>
                            </div>
                            <div className="border-2 border-black rounded-xl text-center py-4 my-3 w-1/2">
                                <div className="mx-3 pb-2">
                                    <h2 className="text-xl font-bold">
                                        Monthly Client Tasks Met
                                    </h2>
                                    <h3 className="text-primary-4 text-xl font-extrabold mt-7">
                                        63% Completion
                                    </h3>
                                    <p className="mt-3">
                                        Successfully completed {goals.tasksMet}{' '}
                                        of {goals.tasksGoal} targeted tasks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5">
                            Check out ways to improve your company numbers by
                            checking the report.
                        </p>
                        <div className="mt-3">
                            <Link
                                to={`/admin/${userId}/report`}
                                className="button-dark-rounded px-10 py-3 font-normal"
                            >
                                SEE REPORT
                            </Link>
                        </div>
                    </div>
                    <div className="bg-accent-background border-accent-1 border-2 rounded-md m-6">
                        <div className="flex relative justify-center px-3 py-1">
                            <h2 className="text-2xl">Your Employees</h2>
                            <div className="absolute right-5 mt-2">
                                <DropDownMenuButton options={menuOptions} />
                            </div>
                        </div>
                        <hr className="h-px border-0 bg-black" />
                        <div className="flex justify-center px-3">
                            <Link
                                to="/register"
                                className="button-dark-rounded my-6 w-full ml-auto"
                            >
                                Register A New Employee
                            </Link>
                        </div>
                        <div className="overflow-y-auto h-96">
                            <EmployeesList />
                        </div>
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
