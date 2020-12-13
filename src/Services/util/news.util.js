/* eslint-disable import/prefer-default-export */
export const newsData = (data) => {
const { articles } = data;
const [mainHeading, subHead1, subHead2,...others] = articles;
return {
    mainHeading,
    subHeading:[ subHead1, subHead2],
    otherNews: others
}
}