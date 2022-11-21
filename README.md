# swagger-ui-with-checklist
> Adds checklist to any API endpoint/operation in `swagger-ui`.

Developed as an internal tool to add checklist for API security tests.

Made with: `vite`, `react` and `swagger-ui` (`swagger-ui-react`).

Still a **#WIP**.

To-do:
- [x] Add a basic checklist.
- [ ] Implement logic for `post`ing form data if `Save` button is clicked.
- [ ] Integrate a server (express) to receive form data (checklist) and add to the spec file.
- [ ] Add `Dockerfile` and `docker-compose.yml` to build docker image for docker/k8s deployment.
- [ ] Add topbar/url field to manually load spec file.