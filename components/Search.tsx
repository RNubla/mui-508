"use client";
import { Autocomplete, TextField } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function Search() {
	const searchParams = useSearchParams();
	const pathName = usePathname();
	const { replace } = useRouter();

	const handleSearch = (search: string) => {
		console.log(`search ${search}`);
		const params = new URLSearchParams(searchParams);
		if (search) {
			params.set("query", search);
		} else {
			params.delete("query");
		}
		replace(`${pathName}?${params.toString()}`);
	};

	return (
		<TextField
			label={"Search"}
			defaultValue={searchParams.get("query")?.toString()}
			onChange={(e) => handleSearch(e.target.value)}
		/>
	);
}
