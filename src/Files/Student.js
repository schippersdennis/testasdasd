import ProjectFilter from "../Components/ProjectFilter";
import StudentChart from "../Components/StudentFilter";
import { data } from "./StudentData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../Components/StudentChart";

const Students = () => {
	let { name } = useParams();
	const [studentData, setStudentData] = useState(null);

	useEffect(() => {
		setStudentData(data.studentData.filter((student) => student.name === name));
	}, [name]);



	return (
		<div>
			Hello
			<h1>{`${name}'s page`}</h1>
			{studentData && <Chart data={studentData} />}
			{/* <div>
				<StudentChart projects={projects} studentName={studentName} />
			</div>
			<div>
				<ProjectFilter projects={projects} changedHandler={handleProjectCheckbox} />
			</div> */}
		</div>
	);
};

export default Students;
