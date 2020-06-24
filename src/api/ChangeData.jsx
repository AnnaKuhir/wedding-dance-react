export function ChangeData(changedData){
  const body = JSON.stringify(changedData);
  fetch(
    "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/navigation",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
      },
      body
    }
  );
}