import './Event.css';

const Event = ({ title, location, time, date }) => {
    return (
        <div className='event-container'>
            <div className='event-content'>
                <div className='title'>{title}</div>
                <div className='location'>Location: {location}</div>
                <div className='time'>Time: {time}</div>
                <div className='date'>Date: {date}</div>
            </div>
        </div>
    );
}

export default Event;