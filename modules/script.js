import * as member from "./member.js";
import * as result from "./result.js";

import { initTabs } from "./tabs.js";

initApp();

const membersArray = [];
const resultsArray = []; 

async function initApp() {
  initTabs();
  await membersToArray();
  showMembers(membersArray);

  await resultsToArray();
  showResults(resultsArray);
}


// Fetch results og members
async function getMembers() {
  const response = await fetch("members.json");
  const data = await response.json();
  return data;
}
async function getResults() {
  const response = await fetch("results.json");
  const data = await response.json();
  return data;
}

async function membersToArray() {
    const members = await getMembers();

    for (const objects of members) {
      const memberObjects = member.construct(objects);
      membersArray.push(memberObjects);
    }
}

async function resultsToArray() {
    const results = await getResults();

    for (const objects of results) {
    const resultObjects = result.construct(objects);
    resultsArray.push(resultObjects);      
    }
}

function showMembers(members) {
  document.querySelector("table#members tbody").innerHTML = "";
  for (const member of members) {

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

      document.querySelector("table#members tbody").insertAdjacentHTML("beforeend", html)  
    }
}

function showResults(results) {
  document.querySelector("table#results tbody").innerHTML = "";
  const sortedResults = results.sort((result1, result2) => result1.time.localeCompare(result2.time))
  
  for (const result of sortedResults) {
    const matchingMember = membersArray.find(
      (member) => member.id === result.memberId
    );
    if (matchingMember) {
    const html = /* html */ `
    <tr>
      <td>${result.date.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}</td>
      <td>${memberIdToName(result.memberId)}</td>
      <td>${disciplineTranslate(result.discipline)}</td>
      <td>${typeFromResult(result.resultType)}</td>
      <td>${result.time}</td>
      </tr>`;

      document.querySelector("#results tbody").insertAdjacentHTML("beforeend", html);
    }
  }
}

function memberIdToName(memberId) {
  for (const member of membersArray) {
    if (memberId === member.id) {
      return member.name
    }
  }
}

function disciplineTranslate(discipline) {
  if (discipline === "backstroke") {
    return "Ryg";
  } else if (discipline === "breaststroke") {
    return "Bryst";
  } else if (discipline === "butterfly") {
    return "Butterfly"
  } else if (discipline === "freestyle") {
    return "Freestyle"
  }
}

function typeFromResult(resultType) {
  return resultType === "competition" ? "Stævne" : "Træning"
}