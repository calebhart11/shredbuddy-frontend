#Project 4 - Shredbuddy

## Goal: Create a full stack application that enables the user to plan snowboarding/ skiing trips.

### Technologies used:
- Python
- Django Rest
- Pip
- Bootstrap

### Daily Plan:
| Day | Goal |
|-----|------|
| 1 | Set Up Basic Running front end and back end repos |
| 2 | Render data to screen |
| 3 | Create all forms |
| 4 | Bug testing, add possible stretch goals |
| 5 | Website Styling / Responsive |
| 6 | Final debugging and styling |
| 7 | Presentation Day |

### Site Planning:
[Trello Board](https://trello.com/b/o4zv0fpa/unit-4-project)

#### Models:
![Model Image](https://i.imgur.com/6ICLeTF.png)

#### Routes:
| Endpoint | Method | Description |
|----------|--------|-------------|
| router.get('/') | GET | returns all sessions |
| router.get('/:id') | GET | returns a single session|
| router.post('/')| POST | creates a new session|
| router.put('/:id')| PUT | updates a specific session |
| router.delete('/:id') | DELETE | deletes a specific session |


### Front End Routes

/sessions - Index Route
/sessions/:id - Show Route
/sessions/:id/update - update
/sessions/create - create
/sessions/:id/delete - delete