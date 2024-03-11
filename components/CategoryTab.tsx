import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
function a11yProps(index: number) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	};
}
export default function CategoryTab() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example"
			>
				<Tab label="Item One" {...a11yProps(0)} />
				<Tab label="Item Two" {...a11yProps(1)} />
				<Tab label="Item Three" {...a11yProps(2)} />
			</Tabs>
		</Box>
	);
}
{
	/* <CustomTabPanel value={value} index={0}>
  Item One
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  Item Three
</CustomTabPanel> */
}
