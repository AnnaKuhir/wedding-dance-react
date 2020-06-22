

export function getCoachesData() {
  return fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/coach')
    .then((data) => data.json())
    .then((res) => res)
}