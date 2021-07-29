# Pluto

A light-weight app that displays a numerology report based on your birthday.

For the initial creation I focused on a more simple approach with minimal library use, practicing good folder structure and reusable components.

Included is a [`numerology mock API`](https://github.com/maariyadiminsky/numerology-mock-api) I created since there was nothing available for free matching the api I was searching for.

### See it live [here](https://pluto-liard.vercel.app/).

Please note: When you get to the results page it's possible it may take several seconds to load due to the api being loaded on Heroku. Heroku dynos go to sleep after 30 minutes on inactivity.

----
### Future improvements:
- Calendar and date libraries
- Using react-hooks, router etc.
- Typescript
- Numerology reports for 11,22,33 etc.
- Focusing on responsiveness
- Spend more time perfecting the api
- Use graphQL to make create an efficient single request with only the data needed when generating report.
- More null/undefined checks
- Loaders
- add eslint etc.