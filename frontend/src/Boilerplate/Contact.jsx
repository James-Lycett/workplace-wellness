import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="max-w-screen-md mx-4 md:mx-auto mt-8 mb-12 p-6 bg-white flex flex-col lg:px-10">
                <div className=" text-2xl sm:text-2xl text-center font-bold mb-4">
                    Contact
                </div>

                <p className="mb-4">
                    Have questions or feedback? We'd love to hear from you! Feel
                    free to reach out to Workspace Wellness using the contact
                    information below. Whether you're interested in our
                    services, have inquiries about our content, or simply want
                    to connect, our team is here to assist you.
                </p>

                <h2 className="text-xl font-bold mb-2">Contact Information</h2>

                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Email:</strong> info@workplacewellness.com
                    </li>
                    <li>
                        <strong>Phone:</strong> (555) 123-4567
                    </li>
                    <li>
                        <strong>Address:</strong>
                        <br />
                        Workspace Wellness
                        <br />
                        123 Serenity Street
                        <br />
                        Wellness City, WZ 54321
                    </li>
                </ul>

                <p>
                    For specific inquiries, you can also fill out the contact
                    form on our website, and one of our team members will get
                    back to you as soon as possible. Thank you for choosing
                    Workspace Wellness—we look forward to connecting with you!
                </p>
            </section>
        </>
    )
}

export default Contact
