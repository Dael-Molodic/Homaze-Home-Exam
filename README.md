## Summary:

When writing the task, I tried to simulate an application on a relatively high scale, which means that sometimes my considerations in choosing the form of work and architecture were not necessarily suitable for such a small project.
For example, the use of Redex or the search method, which every time the input changes, I'm sending a request to the server and brings the data again. In this case, of course, it is correct to bring the entire object once and manipulate it.
but I wanted to simulate a more realistic situation, in which there is a large amount of projects and with every change of the input I only pull the relevant ones from the server, according to the text. Of course, such a thing requires the construction of a suitable server-side logic.

### Pay attention to the file named existing_code_improvement.js that contains the answer to the second question