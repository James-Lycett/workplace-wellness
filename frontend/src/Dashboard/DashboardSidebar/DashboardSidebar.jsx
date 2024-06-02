import React from 'react'
import { Sidebar } from 'flowbite-react'
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
import logo from './circle.svg'

export default function DashboardSidebar({ openModal, openAddEmployeeModal, userIsAdmin, view, setView }) {

    const handleNavigation = (e, newView) => {
        e.preventDefault();
        setView(newView);
        // Perform any other necessary state updates here
    };

    return (
        <>
            <div>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Logo
                        href="#"
                        img={logo}
                        imgAlt="Workplace Wellness logo"
                    >
                        Workplace Wellness
                    </Sidebar.Logo>
                    <Sidebar.Items className="flex flex-col justify-between h-[43vh]">
                        <div>
                            <Sidebar.ItemGroup className="">
                                {userIsAdmin ?
                                <>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiOutlineIdentification}
                                        onClick={(e) => handleNavigation(e, "user")}
                                    >
                                        Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiTable}
                                        onClick={(e) => handleNavigation(e, "admin")}
                                    >
                                        Employees
                                    </Sidebar.Item>
                                    <Sidebar.Collapse
                                    icon={HiUserGroup}
                                    label="Users"
                                    >
                                        <Sidebar.Item href="#" icon={HiChartPie}>
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
                                </>
                                    : null
                                }
                                <Sidebar.Item href="#" icon={HiTable}>
                                    My Logs
                                </Sidebar.Item>
                                
                            </Sidebar.ItemGroup>
                        </div>
                        <div>
                            <Sidebar.ItemGroup>
                                {view === "user" ?
                                    <Sidebar.Item
                                    href="#"
                                    onClick={() => openModal("activity")}
                                    icon={HiDocumentReport}
                                    >
                                        LOG NEW ACTIVITY
                                    </Sidebar.Item>
                                    : null
                                }
                                {view === "admin" ?
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiOutlinePlus}
                                        onClick={() => openModal("employee")}
                                    >
                                        Add A New Employee
                                    </Sidebar.Item>
                                    : null
                                }
                                <Sidebar.Item href="#" icon={HiLogout}>
                                    Sign Out
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </div>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}
