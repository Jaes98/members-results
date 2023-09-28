function construct(list, container, itemRenderer) {
  const ListRenderer = {
    renderers: [],
    container: container,
    filterProperty: 0,
    filterValue: 0,
    sortBy: 0,
    sortDir: 0,
    clear() {

    },
    render() {
      document.querySelector("table#members tbody").innerHTML = "";
      for (const member of list) {
        const html = /* html */ `
    <tr>
      <td>${member.name}</td>
      <td>${member.active}</td>
      <td>${member.birthday.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}</td>
      <td>${member.age}</td>
      <td>${member.ageGroup}</td>
      <td>${member.email}</td>
      </tr>`;

        document
          .querySelector("table#members tbody")
          .insertAdjacentHTML("beforeend", html);
      }
    },
    filter(filterProperty, filterValue) {

    },
    sort(sortBy, sortDir) {

    }
  };

  return ListRenderer;
}

export { construct };
