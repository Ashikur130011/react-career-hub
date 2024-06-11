import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className='text-left'>{company_name}</p>
    <div className='flex justify-start'>
        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4'>{remote_or_onsite}</button>
        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4'>{job_type}</button>
    </div>
    <div className='flex mt-3'>
        <p className='flex'><MdLocationOn className='text-2xl mr-2'/>{location}</p>
        <p className='flex'><AiOutlineDollar className='text-2xl mr-2' />{salary}</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}
export default Job;