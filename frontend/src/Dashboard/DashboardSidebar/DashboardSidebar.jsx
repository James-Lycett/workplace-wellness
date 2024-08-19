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
import logo from '../../images/circle.svg'
import { userLogout } from '../../utils/api'

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
            <div className="md:hidden">
                <Sidebar
                    className="w-full flex flex-col justify-center list-none"
                    aria-label="Small Screen Sidebar"
                >
                    <Sidebar.Collapse
                        label={
                            <div className="flex items-center space-x-3">
                                <img
                                    src={logo}
                                    alt="Workplace Wellness logo"
                                    className="h-8 w-8"
                                />
                                <span className="text-base sm:text-xl font-bold">
                                    Workplace Wellness
                                </span>
                            </div>
                        }
                        className="text-base sm:text-xl"
                    >
                        <Sidebar.ItemGroup>
                            {userIsAdmin && (
                                <>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiOutlineIdentification}
                                        className="text-sm md:text-base"
                                        onClick={(e) =>
                                            handleNavigation(e, 'user')
                                        }
                                    >
                                        Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiTable}
                                        className="text-sm md:text-base"
                                        onClick={(e) =>
                                            handleNavigation(e, 'admin')
                                        }
                                    >
                                        Employees
                                    </Sidebar.Item>
                                </>
                            )}
                            {view === 'user' && (
                                <>
                                    <Sidebar.Item
                                        href="#"
                                        onClick={() => openModal('activity')}
                                        icon={HiDocumentReport}
                                        className="text-sm md:text-base"
                                    >
                                        LOG NEW ACTIVITY
                                    </Sidebar.Item>
                                    <Sidebar.Collapse
                                        icon={HiAcademicCap}
                                        label="Resources"
                                        className="text-sm md:text-base"
                                    >
                                        <Sidebar.Item
                                            href="/tips/sleep"
                                            target="_blank"
                                            icon={HiEmojiSad}
                                            className="text-sm md:text-base"
                                        >
                                            Sleep Disorders Guide
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="/tips/fitness"
                                            target="_blank"
                                            icon={HiSpeakerphone}
                                            className="text-sm md:text-base"
                                        >
                                            Physical Fitness Guide
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="/tips/meditation"
                                            target="_blank"
                                            icon={HiLightBulb}
                                            className="text-sm md:text-base"
                                        >
                                            Meditation Guide
                                        </Sidebar.Item>
                                    </Sidebar.Collapse>
                                </>
                            )}
                            {view === 'admin' && (
                                <Sidebar.Item
                                    href="#"
                                    icon={HiOutlinePlus}
                                    className="text-sm md:text-base"
                                    onClick={() => openModal('newEmployee')}
                                >
                                    Add A New Employee
                                </Sidebar.Item>
                            )}
                            <Sidebar.Item
                                href="/"
                                icon={HiLogout}
                                className="text-sm md:text-base"
                            >
                                Sign Out
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Collapse>
                </Sidebar>
            </div>
            <div className="hidden md:block">
                <Sidebar
                    className="w-full flex flex-col justify-center"
                    aria-label={
                        view === 'admin' ? 'Admin Sidebar' : 'User Sidebar'
                    }
                >
                    <Sidebar.Logo
                        href="#"
                        img={logo}
                        imgAlt="Workplace Wellness logo"
                    >
                        <span className="text-base sm:font-bold">
                            Workplace Wellness
                        </span>
                    </Sidebar.Logo>
                    <Sidebar.Items className="flex flex-col justify-between ">
                        <div>
                            <Sidebar.ItemGroup>
                                {userIsAdmin ? (
                                    <>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiOutlineIdentification}
                                            className="text-sm md:text-base"
                                            onClick={(e) =>
                                                handleNavigation(e, 'user')
                                            }
                                        >
                                            Profile
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            href="#"
                                            icon={HiTable}
                                            className="text-sm md:text-base"
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
                                            className="text-sm md:text-base"
                                        >
                                            LOG NEW ACTIVITY
                                        </Sidebar.Item>
                                        <Sidebar.Collapse
                                            icon={HiAcademicCap}
                                            label="Resources"
                                            className="text-sm md:text-base"
                                        >
                                            <Sidebar.Item
                                                href="/tips/sleep"
                                                target="_blank"
                                                icon={HiEmojiSad}
                                                className="text-sm md:text-base"
                                            >
                                                Sleep Disorders Guide
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="/tips/fitness"
                                                target="_blank"
                                                icon={HiSpeakerphone}
                                                className="text-sm md:text-base"
                                            >
                                                Physical Fitness Guide
                                            </Sidebar.Item>
                                            <Sidebar.Item
                                                href="/tips/meditation"
                                                target="_blank"
                                                icon={HiLightBulb}
                                                className="text-sm md:text-base"
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
                                        className="text-sm md:text-base"
                                        onClick={() => openModal('newEmployee')}
                                    >
                                        Add A New Employee
                                    </Sidebar.Item>
                                ) : null}
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item
                                        href="/"
                                        onClick={() => userLogout()}
                                        icon={HiLogout}
                                        className="text-sm md:text-base"
                                    >
                                        Sign Out
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.ItemGroup>
                        </div>
                        <div></div>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}
