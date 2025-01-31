// @ts-ignore
import React, { PropsWithChildren } from 'react';

type ModalProps = {

};

export default function Modal(props: PropsWithChildren<ModalProps>){
    
    return (
        <div id="default-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}