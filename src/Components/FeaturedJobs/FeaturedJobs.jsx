import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const[jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl">Featured Jobs: {jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;