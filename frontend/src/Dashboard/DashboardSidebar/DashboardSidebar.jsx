import React from 'react'
import { Sidebar } from 'flowbite-react'
import {
    HiLogout,
    HiOutlinePlus,
    HiOutlineIdentification,
    HiTable,
    HiDocumentReport,
    HiAcademicCap,
    HiEmojiSad,
    HiSpeakerphone,
    HiLightBulb,
} from 'react-icons/hi'
import logo from './circle.svg'

export default function DashboardSidebar({
    openModal,
    userIsAdmin,
    view,
    setView,
}) {
    // Necessary to keep page from jumping to top when view is toggled
    const handleNavigation = (e, newView) => {
        e.preventDefault()
        setView(newView)
    }

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
                            <Sidebar.ItemGroup>
                                {userIsAdmin ? (
                                    <>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiOutlineIdentification}
                                            onClick={(e) =>
                                                handleNavigation(e, 'user')
                                            }
                                        >
                                            Profile
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiTable}
                                            onClick={(e) =>
                                                handleNavigation(e, 'admin')
                                            }
                                        >
                                            Employees
                                        </Sidebar.Item>
                                    </>
                                ) : null}
                                {view === 'user' ? (
                                    <>
                                        <Sidebar.Item
                                            href="#"
                                            onClick={() =>
                                                openModal('activity')
                                            }
                                            icon={HiDocumentReport}
                                        >
                                            LOG NEW ACTIVITY
                                        </Sidebar.Item>
                                        <Sidebar.Collapse
                                            icon={HiAcademicCap}
                                            label="Resources"
                                        >
                                            <Sidebar.Item
                                                href="/tips/sleep"
                                                target="_blank"
                                                icon={HiEmojiSad}
                                            >
                                                Sleep Disorders Guide
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="/tips/fitness"
                                                target="_blank"
                                                icon={HiSpeakerphone}
                                            >
                                                Physical Fitness Guide
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="/tips/meditation"
                                                target="_blank"
                                                icon={HiLightBulb}
                                            >
                                                Meditation Guide
                                            </Sidebar.Item>
                                        </Sidebar.Collapse>
                                    </>
                                ) : null}
                                {view === 'admin' ? (
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiOutlinePlus}
                                        onClick={() => openModal('employee')}
                                    >
                                        Add A New Employee
                                    </Sidebar.Item>
                                ) : null}
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="/" icon={HiLogout}>
                                        Sign Out
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.ItemGroup>
                        </div>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}
