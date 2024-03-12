"use client";
import styles from "./page.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import HeroCenter from "@/components/Hero";
import CategoryTab from "@/components/CategoryTab";
import Search from "@/components/Search";
import { FormControl } from "@mui/material";
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
			</Grid>
		</main>
	);
};

export default Home;
