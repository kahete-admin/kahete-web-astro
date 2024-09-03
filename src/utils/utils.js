export function orderDataByUsername(incomingData) {
  return incomingData
    .slice()
    .sort((a, b) =>
      a.basic_user_profile.full_name.localeCompare(
        b.basic_user_profile.full_name
      )
    );
}
export function orderDataByUsernameLocal(incomingData) {
  return incomingData
    .slice()
    .sort((a, b) =>
      a.full_name.localeCompare(
        b.full_name
      )
    );
}

export function orderDataByUsernameLaConfe(incomingData) {
  return incomingData
    .slice()
    .sort((a, b) => a.username.localeCompare(b.username));
}

// ADD NULL TO SECOND PARAM IF ALL DEPARTMENTS ARE SELECTED
export function sectionTitleFilter(incomingData, filterName, isStrapi) {
  if (filterName === null && isStrapi) {
    return orderDataByUsername(incomingData);
  }
  // TODO: DELETE THIS ONCE IS SSR
  if (filterName === null && !isStrapi) {
    return orderDataByUsernameLocal(incomingData);
  }

  return isStrapi ? orderDataByUsername(incomingData).filter(
    (entry) => entry.basic_user_profile.title === filterName
  ) : orderDataByUsernameLocal(incomingData).filter(
    (entry) => entry.title === filterName
  );
}