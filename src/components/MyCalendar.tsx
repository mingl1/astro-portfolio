import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";
interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
const myDay = new Date().getDay();

type Day = 1 | 2 | 3 | 4 | 5 | 6;
const selectLastMonths = (contributions: Activity[], shownMonths: number) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  contributions = contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();
    if (date.getFullYear() < currentYear) {
      return currentMonth + 12 - date.getMonth() < shownMonths;
    }
    return (
      monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
    );
  });
  while (new Date(contributions[0].date).getDay() != myDay) {
    contributions.shift();
  }
  return contributions;
};

export default function MyCalender() {
  const isXLScreen = useMediaQuery({ query: "(min-width: 1644px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 580px)" });
  if (isXLScreen)
    return (
      <GitHubCalendar
        username="mingl1"
        blockRadius={20}
        blockMargin={4}
        hideColorLegend
        blockSize={22}
        style={{ maxWidth: "1404px" }}
        hideMonthLabels
        transformData={(e) => selectLastMonths(e, 12)}
        hideTotalCount
        weekStart={myDay == 6 ? 0 : ((myDay + 1) as Day)}

        // theme={{
        //   light: ["hsl(0, 0%, 92%)", "firebrick"],
        //   dark: ["#333", "rgb(214, 16, 174)"],
        // }}
      />
    );
  else if (isLargeScreen)
    return (
      <GitHubCalendar
        username="mingl1"
        blockRadius={20}
        blockMargin={4}
        hideColorLegend
        blockSize={22}
        style={{ maxWidth: "1204px" }}
        transformData={(e) => selectLastMonths(e, 8)}
        weekStart={myDay == 6 ? 0 : ((myDay + 1) as Day)}
        hideMonthLabels
        hideTotalCount
      />
    );
  else if (isMediumScreen)
    return (
      <GitHubCalendar
        username="mingl1"
        blockRadius={20}
        blockMargin={4}
        hideColorLegend
        blockSize={22}
        transformData={(e) => selectLastMonths(e, 6)}
        weekStart={myDay == 6 ? 0 : ((myDay + 1) as Day)}
        hideMonthLabels
        hideTotalCount
      />
    );
  else if (isSmallScreen) {
    return (
      <GitHubCalendar
        username="mingl1"
        blockRadius={20}
        blockMargin={4}
        hideColorLegend
        blockSize={22}
        transformData={(e) => selectLastMonths(e, 4)}
        // style={{ color: "white !important" }}
        weekStart={myDay == 6 ? 0 : ((myDay + 1) as Day)}
        hideMonthLabels
        hideTotalCount
      />
    );
  } else {
    return (
      <GitHubCalendar
        username="mingl1"
        blockRadius={20}
        blockMargin={4}
        hideColorLegend
        blockSize={22}
        transformData={(e) => selectLastMonths(e, 2)}
        // style={{ color: "white !important" }}
        weekStart={myDay == 6 ? 0 : ((myDay + 1) as Day)}
        hideMonthLabels
        hideTotalCount
      />
    );
  }
}
