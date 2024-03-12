"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BasicCard } from "@/components/BasicCard";
import Grid from "@mui/material/Unstable_Grid2";
import HeroCenter from "@/components/Hero";
import CategoryTab from "@/components/CategoryTab";
import Search from "@/components/Search";
import { FormControl, Skeleton } from "@mui/material";
import { Suspense } from "react";
import { CardFilters } from "@/components/CardFilters";

interface SearchPrams {
	searchParams?: {
		query?: string;
		page?: string;
	};
}

const Home: React.FC<SearchPrams> = ({ searchParams }) => {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	const cardsList = [
		{
			id: 0,
			title: "Form",
			subtitle: "Learn about form",
			link: "/forms",
			tags: ["form", "forms"],
		},
		{
			id: 1,
			title: "Test",
			subtitle: "Learn about test",
			link: "/test",
			tags: ["test", "testing"],
		},
	];

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
				<CardFilters query={query} cardList={cardsList} />
				{/* {cardsList.map((card) => (
					<Grid key={card.id} xs={12} md={6} lg={4}>
						<BasicCard
							title={card.title}
							subtitle={card.subtitle}
							link={card.link}
							tags={card.tags}
						/>
					</Grid>
				))} */}
			</Grid>
		</main>
	);
};

export default Home;
