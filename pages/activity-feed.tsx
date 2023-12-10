// pages/activity-feed.tsx
import useSWR from 'swr';
import ActivityFeed from '../src/components/ActivityFeed';

const ActivityFeedPage: React.FC = () => {
  const { data: activityData } = useSWR('https://dummyjson.com/todos/1');

  return (
    <div>
      <h1>Activity Feed</h1>
      <ActivityFeed activityData={activityData} />
    </div>
  );
};

export default ActivityFeedPage;
