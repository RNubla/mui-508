import Grid from "@mui/material/Unstable_Grid2";
import { BasicCard } from "./BasicCard";
import { CardType } from "@/utils/types";

interface CardTypeList extends CardType {
	id: number;
}

interface CardFiltersProps {
	query: string;
	cardList: CardTypeList[];
}

export const CardFilters: React.FC<CardFiltersProps> = ({
	query,
	cardList,
}) => {
	const filteredCards = cardList.filter((card) => {
		return card.tags.some((tag) => tag.includes(query));
	});

	if (filteredCards.length === 0) {
		return "Not Found";
	}
	return filteredCards.map((card) => (
		<Grid key={card.id} xs={12} md={6} lg={4}>
			<BasicCard
				title={card.title}
				subtitle={card.subtitle}
				link={card.link}
				tags={card.tags}
			/>
		</Grid>
	));
};
