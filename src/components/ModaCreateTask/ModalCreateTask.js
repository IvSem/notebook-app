import React, { useEffect } from 'react';
import css from './ModalCreateTask.module.css';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

const MODAL_CREATE = document.querySelector('#modal-create');

export const ModalCreateTask = ({ isOpen, onClose, children }) => {
	console.log(':>  ModalCreateTask  isOpen:', isOpen);
	useEffect(() => {}, []);

	return createPortal(
		<div
			className={clsx(css.overlay, { [css.active]: isOpen })}
			onClick={() => {
				onClose(false);
			}}
		>
			<div
				className={clsx(css.modalContent, { [css.active]: isOpen })}
				onClick={e => {
					e.stopPropagation();
				}}
			>
				{children}
			</div>
		</div>,
		MODAL_CREATE
	);
};
