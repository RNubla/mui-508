"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BasicCard from "@/components/BasicCard";
import Grid from "@mui/material/Unstable_Grid2";
import HeroCenter from "@/components/Hero";
import CategoryTab from "@/components/CategoryTab";
import Search from "@/components/Search";
import { FormControl } from "@mui/material";
export default function Home() {
	return (
		<main className={styles.main}>
			<Grid container spacing={2}>
				<Grid xs={12}>
					<HeroCenter />
				</Grid>
				<Grid xs={12}>
					<CategoryTab />
					<FormControl fullWidth sx={{ m: 1 }}>
						<Search />
					</FormControl>
				</Grid>
				{[1, 2, 3, 4, 5, 6, 7].map((value) => (
					<Grid xs={12} md={6} lg={4}>
						<BasicCard />
					</Grid>
				))}
			</Grid>
		</main>
	);
}
