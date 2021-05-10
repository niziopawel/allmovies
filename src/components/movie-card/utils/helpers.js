export function formatMovieOverview(fullOverview) {
  let formattedOverview = ''

  if (fullOverview.length > 80) {
    const indexOfLastEmptyCharacter = fullOverview
      .substring(0, 80)
      .lastIndexOf(' ')

    formattedOverview = `${fullOverview.substring(
      0,
      indexOfLastEmptyCharacter
    )}...`
  } else formattedOverview = fullOverview

  return formattedOverview
}
