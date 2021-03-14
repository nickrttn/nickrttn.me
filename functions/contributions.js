/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { graphql } = require('@octokit/graphql');

const get = graphql.defaults({
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN}`,
  },
});

exports.handler = async function () {
  const data = await get(`
    query {
      user(login: "nickrttn") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `);

  const rects = [];

  if (data?.user) {
    const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

    for (const week of weeks) {
      for (const day of week.contributionDays) {
        rects.push({ color: day.color, key: day.date });
      }
    }
  }

  const size = 100 / rects.length;

  return {
    statusCode: 200,
    body: JSON.stringify({ rects, size }),
  };
};
