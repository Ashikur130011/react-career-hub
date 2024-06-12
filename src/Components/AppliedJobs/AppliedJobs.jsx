import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJob)
        }
        else if(filter === "remote"){
            const remoteJob = appliedJob.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJob)
        }
        else if(filter === "onsite"){
            const onsiteJob = appliedJob.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsiteJob)
        }
    }
    useEffect( () => {
        const storedJobIds= getStoredJobApplication();
        if(jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobs.includes(job.id)) 
            const jobApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobApplied.push(job)
                }
            }
            setAppliedJob(jobApplied)
            setDisplayJobs(jobApplied)
        }

    }, [])
    return (
        <div>
            <h1>Applied Jobs are Here{appliedJob.length}</h1>
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={() => handleJobsFilter('onsite')}><a>On Site</a></li>
  </ul>
</details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;