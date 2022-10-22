import user from './user.json';
import friends from './friends.json';
import data from './data.json';
import transaction from './transactions.json';

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
