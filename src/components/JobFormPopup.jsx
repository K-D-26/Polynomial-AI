import React , { useRef } from 'react';
import Form from './forms/Form';

const JobFormPopup = ({ job, onClose }) => {

    const modalRef = useRef()

    const handleModal = (e) => {
        if(modalRef.current === e.target) {
            onClose()
        }
    }

    return (
        <div ref={modalRef} onClick={handleModal} className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="flex flex-col items-end">
                <button onClick={onClose} className='mb-2 mt-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <Form job={job} onClose={onClose} />
            </div>
        </div>
    );
};

export default JobFormPopup;
