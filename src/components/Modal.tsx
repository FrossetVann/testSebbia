import React, { PropsWithChildren } from 'react';
import style from '../css/style.module.css';

interface IModalProps {
  title: string;
  onSubmit?: () => void;
  onClose?: () => void;

}


const Modal = ({title, children}: PropsWithChildren<IModalProps>) => {
  return (
    <div className={style.modal_bg}>
      <div className={style.modal_block}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal