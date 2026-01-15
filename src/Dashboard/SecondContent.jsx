export default function SecondContent({ activities = [] }) {
  return (
    <div>
      <h2>Recent Activity</h2>
      <div>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index}>
              <div></div>
              <div>
                <p>{activity.action}</p>
                <p>
                  {new Date(activity.createdAt).toLocaleString()} -{" "}
                  {activity.user?.name || "System"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No recent activity</p>
        )}
      </div>
    </div>
  );
}
