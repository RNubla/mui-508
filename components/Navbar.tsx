"use client";
import * as React from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavBarProps {
	children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Brand Name
					</Typography>
					<Button color="inherit">Notification</Button>
					<Button color="inherit">Login</Button>
					<Button color="inherit">Theme</Button>
				</Toolbar>
			</AppBar>

			<Box component={"main"} sx={{ p: 3 }}>
				{children}
			</Box>
		</Box>
	);
};
