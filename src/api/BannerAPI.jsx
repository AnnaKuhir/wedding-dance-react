
export function getBannerData() {
  return fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info')
    .then((data) => data.json())
    .then((res) => res)
}