import styles from "./index.module.css";

function Modal({isOpen,onClose,title,children}){
    if(!isOpen) return null;

    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className="flex justify-between">
                    <h2>{title}</h2>
                    <button className={styles.closeBtn} onClick={onClose}>✖</button>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;