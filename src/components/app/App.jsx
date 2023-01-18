import { Profile } from '../profile/profile';
import { Statistics } from '../statistics/statistics';
import { FriendList } from '../FriendList/FriendList';
import user from '../../data/user.json';
import stats from '../../data/stats.json';
import friends from '../../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
