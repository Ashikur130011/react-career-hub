import PropTypes from 'prop-types';

const Job = ({job}) => {
    const {logo,job_title,company_name} = job
    return (
        <div>
            <h1>{company_name}</h1>
            <h3>{job_title}</h3>
            <img src={logo} alt="" />
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}
export default Job;