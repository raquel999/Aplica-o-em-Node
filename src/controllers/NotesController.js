const knex = require("../database/knex") 

class NotesController {
  async create(request, response) {
    const { title, description, rating, name } = request.body 
    const { user_id } = request.params 

  
    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    })

   
    const tags = [{ note_id, user_id, name }]
    await knex("tags").insert(tags)

    response.json({})
  }
}

module.exports = NotesController