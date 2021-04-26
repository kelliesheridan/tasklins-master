export function getMood(completedToday, lateToday, createdToday, tasksDueTodayButNotCompleted, completedYesterday, completedTwoDaysAgo, projectsCreatedToday) {
	if (completedToday == 0) {
        return "Asleep";
      } else if (lateToday > 0 && completedToday > 0) {
        return "Concerned";
      } else if (completedToday >= 1 && completedToday <= 4) {
        return "Okay.";
      } else if (
        completedToday > 4 &&
        tasksDueTodayButNotCompleted == 0 &&
        createdToday >= 1 &&
        lateToday == 0
      ) {
        return "Happy";
      } else if (
        completedToday >= 1 &&
        completedToday <= 4 &&
        completedToday < 3 && completedYesterday < 3 && completedTwoDaysAgo < 3
      ) {
        return "Lonely";
      } else if (
        completedToday >= 1 &&
        completedToday <= 4 &&
        lateToday == 0 && projectsCreatedToday >= 1
      ) {
        return "Intrigued";
      } else if (
        completedToday >= 7 &&
        tasksDueTodayButNotCompleted == 0 &&
        createdToday >= 3 &&
        lateToday == 0
      ) {
        return "Thrilled";
      } else if (
        completedTwoDaysAgo >= 4 &&
        completedYesterday >= 4 &&
        completedToday >= 4 &&
        tasksDueTodayButNotCompleted >= 2 && createdToday >= 1 && lateToday <= 2
      ) {
        return "Loved";
      } else {
        return "Content";
      }
}