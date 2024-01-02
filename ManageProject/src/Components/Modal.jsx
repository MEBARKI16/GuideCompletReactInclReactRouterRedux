import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './Button';

const Modal = forwardRef(({ children }, ref) => {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current.showModal()
        }
    }))
    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 round-md shadow-md">
            {children}
            <form method="dialog" className='mt-4 text-right'>
                <Button>Okay</Button>
            </form>
        </dialog>
        , document.getElementById("modal-root")
    )
});
export default Modal;