"use client";
import * as React from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";

interface NavBarProps {
	children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container>
					<Toolbar disableGutters>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			{children}
		</Box>
	);
};
