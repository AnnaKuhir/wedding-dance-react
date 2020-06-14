import React from 'react';

export function getServicesData() {
  return fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/service')
    .then((data) => data.json())
    .then((res) => res)
}