export const filter_and_set = (search, resturants) => {
    const filter_data = resturants.filter((element) => {
      return element.data.name.includes(search);
    });
    return filter_data;
  };

