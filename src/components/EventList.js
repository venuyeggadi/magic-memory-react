import styles from './EventList.module.css';

export default function EventList({events, handleDelete}) {
    return (
        events.map((event, index) => (
            <div className={styles.card} key={event.id}>
                <h2>{index} - {event.title}</h2>
                <p>{event.location} - {event.date}</p>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
        ))
    )
}
