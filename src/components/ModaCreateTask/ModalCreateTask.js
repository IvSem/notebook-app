import React, { useEffect, useState } from 'react';
import css from './ModalCreateTask.module.css';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

const MODAL_CREATE = document.querySelector('#modal-create');

export const ModalCreateTask = ({ isOpen, onClose, children }) => {
	const [isContentVisible, setContentVisible] = useState(false);

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				onClose(false);
			}
		};

		if (!isOpen) {
			setTimeout(() => {
				setContentVisible(false);
			}, 0);
		}

		const timeoutId = setTimeout(() => {
			setContentVisible(true);
		}, 0);

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			clearTimeout(timeoutId);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	return createPortal(
		<div
			className={clsx(css.overlay, { [css.active]: isContentVisible })}
			onClick={() => {
				onClose(false);
			}}
		>
			<div
				className={clsx(css.modalContent, { [css.active]: isContentVisible })}
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
