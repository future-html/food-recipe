import React, { ReactElement } from "react";

export const ModalContext = React.createContext({
	openModal: false,
	toggleModal: () => {},
});

const ContextModal = ({ children }: { children: ReactElement }) => {
	const [openModal, setOpenModal] = React.useState(false);
	const toggleModal = () => {
		setOpenModal((prevMode) => !prevMode);
	};
	return <ModalContext.Provider value={{ openModal, toggleModal }}>{children}</ModalContext.Provider>;
};

export default ContextModal;
