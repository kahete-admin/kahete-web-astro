export function orderDataByUsername(incomingData) {
  return incomingData
    .slice()
    .sort((a, b) =>
      a.basic_user_profile.name.localeCompare(b.basic_user_profile.name)
    );
}

export function orderDataByUsernameLaConfe(incomingData) {
  return incomingData
    .slice()
    .sort((a, b) => a.username.localeCompare(b.username));
}

// ADD NULL TO SECOND PARAM IF ALL DEPARTMENTS ARE SELECTED
export function sectionTitleFilter(incomingData, filterName) {
  if (filterName === null) {
    return orderDataByUsername(incomingData);
  }

  return orderDataByUsername(incomingData).filter(
    (entry) => entry.basic_user_profile.title === filterName
  );
}
