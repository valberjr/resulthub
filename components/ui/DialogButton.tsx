'use client';

import React from 'react';
import Button from './Button';

type DialogButtonProps = {
  id: string;
  title: string;
  content: string | React.ReactNode;
  buttonLabel: string;
};

const DialogButton = ({
  id,
  title,
  content,
  buttonLabel,
}: DialogButtonProps) => {
  return (
    <>
      <Button
        label={buttonLabel}
        className="btn"
        onClick={() =>
          (document.getElementById(`${id}`) as HTMLFormElement).showModal()
        }
      />
      <dialog id={id} className="modal">
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
    </>
  );
};

export default DialogButton;
