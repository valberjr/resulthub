'use client';

import React, { forwardRef } from 'react';
import Button from './Button';

type DialogProps = {
  id: string;
  title: string;
  content: string | React.ReactNode;
};

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ id, title, content }, ref) => {
    return (
      <dialog id={id} ref={ref} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              label="✕"
            />
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{content}</div>
        </div>
      </dialog>
    );
  }
);

export default Dialog;
