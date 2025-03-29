import React from 'react'

const Contact = ({ chidi }) => {
    return (
        <div className="max-w-sm mx-3 mt-3 bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-xl font-bold">{chidi.firstName}</h2>
            <p className="text-gray-600">{chidi.lastName}</p>
            <hr className="my-2" />
            <p>
                <span className="font-semibold">Phone:</span> {chidi.phone}
            </p>
            <hr className="my-2" />
            <p>
                <span className="font-semibold text-gray-600">Address:</span> {chidi.address}
            </p>
        </div>
    )
}
export default Contact;