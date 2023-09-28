function construct(list, container, itemRenderer) {
  const ListRenderer = {
    renderers: [],
    // container: container,
    // filterProperty: 0,
    // filterValue: 0,
    // sortBy: 0,
    // sortDir: 0,
    // clear() {},
    render() {
        MemberRenderer.render(list);
        ResultRenderer.render(list);
    },
    // filter(filterProperty, filterValue) {},
    // sort(sortBy, sortDir) {},
  };
  const MemberRenderer = {
    render(memberList) {
      document.querySelector("table#members tbody").innerHTML = "";
      for (const member of memberList) {
        const birthDate = new Date (member.birthday)
        const html = /* html */ `
    <tr>
      <td>${member.name}</td>
      <td>${member.active}</td>
      <td>${birthDate.toLocaleString("da", {
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
  };
  const ResultRenderer = {
    render(resultList, memberList) {
      document.querySelector("table#results tbody").innerHTML = "";

      for (const result of resultList) {
        const birthDate = new Date (result.date)
        const matchingMember = memberList.find(
        (member) => member.id === result.memberId)
        // const matchingMember = list.find(
        //   (member) => member.id === result.memberId
        // );
        // if (matchingMember) {
            if (matchingMember) {
          const html = /* html */ `
    <tr>
      <td>${birthDate.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}</td>
      <td>${matchingMember.name}</td>
      <td>${result.discipline}</td>
      <td>${result.type}</td>
      <td>${result.time}</td>
      </tr>`;

          document
            .querySelector("#results tbody")
            .insertAdjacentHTML("beforeend", html);
        // }
      }
    }
    },
  };

  return ListRenderer;
}

// for (const item of list) {
//     const renderer = Object.create(itemRenderer);
//     renderer.item = item;
// }

export { construct };
