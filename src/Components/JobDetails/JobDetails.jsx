import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
 
    const idInt = parseInt(id)
    // const job = jobs.find(job => job.id == id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJobs = () => {
        saveJobApplication(idInt)
        toast("Applied Successfully")
    }
    return (
        <div className="mt-16">
            <h1 className="font-bold text-xl">Job Details</h1>
            <div className="grid md:grid-cols-4 gap-4 my-32 ">
                <div className=" md:col-span-3">
                    <p className="text-left mb-4"><span className="font-semibold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p className="text-left my-4"><span className="font-semibold">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <p className="text-left font-semibold">Educational Requirements: </p>
                    <p className="my-4 text-start">Complete Bachelor degree from any reputational university</p>
                    <p className="text-left font-semibold">Experiences </p>
                    <p className="my-4 text-start">2-3 Years in the field</p>
                </div>
                {/* side bar */}
                <div className="border text-start ">
                    <h1 className="m-4 font-bold">Job Details</h1>
                    <p className="m-4 font-bold">Salary: {job.salary}</p>
                    <p className="m-4 font-bold">Job Title: {job.job_title}</p>
                    <h1 className="m-4 font-bold">Contact  Information</h1>
                    <p className="m-4 font-bold">Phone: <span>{job.contact_information.phone}</span></p>
                    <p className="m-4 font-bold">Email: {job.contact_information.email}</p>
                    <p className="m-4 font-bold">Address: {job.contact_information.address}</p>
                    <div className="justify-item-center">
                    <button onClick={handleApplyJobs} className="btn btn-primary my-4 mx-28">Apply</button>
                    </div>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default JobDetails;