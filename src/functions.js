export function filterArray(array, filtersObj) {
  let filteredArray = [];
  for (const element of array) {
    // if item has a filter Id
    if (element.filterId) {
      // get the associated key
      const filterKey = Object.keys(element.filterId)[0];
      // if the filter value in the element matches the associated filter value in the filters object, add it to the filtered array
      if (element.filterId[filterKey] === filtersObj[filterKey]) {
       filteredArray.push(element);
      }
    } else {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

export function getSectionTitles(array) {
  const sectionTitles = [];
  array.forEach(function(section) {
    sectionTitles.push(section.sectionTitle);
  });
  return sectionTitles;
}
