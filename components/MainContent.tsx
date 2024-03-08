import { Container } from "@mui/material";
import React from "react";

interface MainContentProps {
	children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
	return <Container>{children}</Container>;
};