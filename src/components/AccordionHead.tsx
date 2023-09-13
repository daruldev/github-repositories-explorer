/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ReactNode } from 'react';

interface AccordionHeadProps {
  index: number;
  children: ReactNode;
  activeElement: any;
  onClick: any;
}

const AccordionHead = (props: AccordionHeadProps) => {
  return (
    <>
      <h2 className="mb-0">
        <button
          className={`${
            props.activeElement === props.index &&
            'text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]'
          } text-primary w-full px-5 py-4 text-left text-base`}
          type="button"
          onClick={props.onClick}
        >
          <div className="flex items-center">
            <div className="w-[96%]">{props.children}</div>
            <span
              className={`${
                props.activeElement === props.index ? 'rotate-[-180deg]' : 'rotate-0'
              } ml-5 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </button>
      </h2>
    </>
  );
};

export default AccordionHead;
