export const calcTopTrackPopularity = tracks => {
  const addPopularity = (total, next) => {
    total += next;
    return total;
  }

  let averageTrackPopularity = tracks.map(track => track.popularity).reduce(addPopularity, 0) / tracks.length;
  return averageTrackPopularity;
}

export default {
  calcTopTrackPopularity
};