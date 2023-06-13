import { Link, Form, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Event from '../components/artistprofile/Event';

import './Tabs.css';
import './EventsTab.css';

const EventsTab = () => {
    const data = useLoaderData();
    const auth = data.auth;
    const events = data.events

    return (
        <div id="events-tab">
            <div className='artist-nav'>
                <div className='nav-tabs'>
                    <Link to='../music' className='nav-tab'>Music</Link>
                    <Link to='../events' className='nav-tab active'>Events</Link>
                    <Link to='../community' className='nav-tab'>Community</Link>
                </div>
            </div>
            { auth ? 
            <div id='form-container'>
                <Form method='post' id='event-form'>
                    <div>New Event</div>
                    <input
                        id='event-title'
                        placeholder='Title'
                        aria-label='title'
                        type='text'
                        name='title'
                        required
                    />
                    <input
                        id='event-location'
                        placeholder='Location'
                        aria-label='location'
                        type='text'
                        name='location'
                        required
                    />
                    <input
                        id='event-time'
                        placeholder='Time'
                        aria-label='time'
                        type='time'
                        name='time'
                        required
                    />
                    <input
                        id='event-date'
                        placeholder='Date'
                        aria-label='date'
                        type='date'
                        name='date'
                        required
                    />
                    <Button id='submit-btn' variant='dark' type='submit'>Add</Button>
                </Form>
            </div>
            : <></>
            }
            <div id='events-title'>Events</div>
            <div id='events-container'>
                {events.map((e) => <Event title={e.title} location={e.location} time={e.time} date={e.date} key={e._id} />)}
            </div>
        </div>
    );
}

export default EventsTab;