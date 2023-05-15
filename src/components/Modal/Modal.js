import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import clsx from 'clsx';
const MODAL_CONTAINER = document.querySelector('#modal-container');

export const Modal = ({ open, children, onClose }) => {
	const [active, setActive] = useState(false);
	const [aniClassName, setAniClassName] = useState('');
	const [contentClassName, setContentClassName] = useState('');

	const onTransitionEnd = () => {
		setAniClassName(open ? styles.enterDone : styles.exitDone);
		setContentClassName(
			open ? styles.contentEnterDone : styles.contentExitDone
		);
		if (!open) {
			setActive(false);
		}
	};

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				onClose(false);
			}
		};

		if (open) {
			setActive(true);
			setAniClassName(styles.enter);
			setContentClassName(styles.contentEnter);

			requestAnimationFrame(() => {
				setAniClassName(styles.enterActive);
				setContentClassName(styles.contentEnterActive);
			});
		} else {
			setAniClassName(styles.exit);
			setContentClassName(styles.contentExit);
			requestAnimationFrame(() => {
				setAniClassName(styles.exitActive);
				setContentClassName(styles.contentExitActive);
			});
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose, open]);

	if (!open && !active) {
		return null;
	}

	return createPortal(
		<div
			className={clsx(styles.modal, aniClassName)}
			onTransitionEnd={onTransitionEnd}
			onClick={onClose}
		>
			<div
				className={clsx(styles.modalContent, contentClassName)}
				onTransitionEnd={onTransitionEnd}
				onClick={e => {
					e.stopPropagation();
				}}
			>
				{children}
			</div>
			<div className={styles.modalCloseBtn} onClick={onClose}>
				x
			</div>
		</div>,
		MODAL_CONTAINER
	);
};
