import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
