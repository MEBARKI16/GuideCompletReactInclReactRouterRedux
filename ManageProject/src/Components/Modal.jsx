import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(({ children }, ref) => {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current.show();
        }
    }))
    return createPortal(
        <dialog ref={dialogRef}>
            {children}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
        , document.getElementById("modal-root")
    )
});
export default Modal;