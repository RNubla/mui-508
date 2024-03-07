"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BasicCard from "@/components/BasicCard";
import Grid from "@mui/material/Unstable_Grid2";
export default function Home() {
	return (
		<main className={styles.main}>
			<Grid container spacing={2}>
				{[1, 2, 3, 4, 5, 6, 7].map((value) => (
					<Grid xs={4}>
						<BasicCard />
					</Grid>
				))}
			</Grid>
		</main>
	);
}
