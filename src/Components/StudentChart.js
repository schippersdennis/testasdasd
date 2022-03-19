import {
	VictoryChart,
	VictoryGroup,
	VictoryLegend,
	VictoryStack,
	VictoryAxis,
	VictoryBar,
	VictoryLine,
	VictoryTooltip,
	VictoryLabel,
} from "victory";

const Chart = ({data}) => {
	return (
		<VictoryChart height={180} padding={20} width={400}>
			<VictoryGroup offset={160 / data.length}>
				<VictoryBar
					data={data}
					x={"projectname"}
					y={"hardshiplevel"}
					style={{ data: { fill: "#223243" } }}
					barWidth={2}
					animate={{
						duration: 700,
						onLoad: { duration: 700 },
					}}
				/>

				<VictoryBar
					data={data}
					x={"projectname"}
					y={"funlevel"}
					style={{ data: { fill: "#fbf9ab" } }}
					barWidth={2}
					animate={{
						duration: 700,
						onLoad: { duration: 700 },
					}}
				/>
			</VictoryGroup>
			<VictoryAxis
				style={{
					ticks: {
						fill: "transparent",
						size: 2,
						stroke: "black",
						strokeWidth: 1,
						strokeLinecap: "round",
						strokeLinejoin: "round",
					},
				}}
				tickLabelComponent={
					<VictoryLabel
						dx={-8.5}
						dy={-6}
						style={{
							fontSize: 4,
							fill: "#223243",
						}}
						textAnchor={"start"}
					/>
				}
			/>

			<VictoryAxis
				dependentAxis
				domain={[0, 5]}
				style={{
					tickLabels: {
						fontSize: 4,
						fill: "#223243",
					},
				}}
			/>
			<VictoryLegend
				x={165}
				y={10}
				orientation="horizontal"
				style={{
					labels: {
						fontSize: 4,
						fill: "#120faa",
					},
				}}
			/>
		</VictoryChart>
	);
};

export default Chart;
