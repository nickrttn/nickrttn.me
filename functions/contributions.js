/* eslint-env node */
const { graphql } = require('@octokit/graphql');

const get = graphql.defaults({
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN}`,
  },
});

/**
 * @typedef { import("aws-lambda").APIGatewayEvent} APIGatewayEvent
 * @typedef { import("aws-lambda").Context} Context
 */

/**
 * @param {APIGatewayEvent} event
 * @param {Context} context
 */
exports.handler = async function (event, context) {
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

  let rects = [];
  let size;

  if (data?.user) {
    const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

    const totalRects = weeks.reduce(
      (acc, el) => acc + el.contributionDays.length,
      0,
    );

    let fit = Math.floor(Math.sqrt(totalRects));
    let col = 1;
    let row = 1;

    size = 100 / fit;

    for (let week of weeks) {
      if (row > fit) break;

      for (let day of week.contributionDays) {
        if (row > fit) break;

        rects.push({ col, row, color: day.color, key: day.date });

        if (col === fit) {
          col = 1;
          row++;
        } else {
          col++;
        }
      }
    }
  }

  // your server-side functionality
  return {
    statusCode: 200,
    body: JSON.stringify({ rects, size }),
  };
};
