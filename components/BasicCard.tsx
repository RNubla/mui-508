import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardType } from "@/utils/types";

export const BasicCard: React.FC<CardType> = ({
	title,
	subtitle,
	link,
	tags,
}) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">{subtitle}</Typography>
			</CardContent>
			<CardActions>
				<Link href={link}>
					<Button size="small">Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};
