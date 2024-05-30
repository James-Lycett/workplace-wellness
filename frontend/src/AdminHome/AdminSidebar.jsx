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

export default function AdminSidebar({ openModal }) {
    return (
        <>
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
                                <Sidebar.Item href="#" icon={HiOutlinePlus}>
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
        </>
    )
}
