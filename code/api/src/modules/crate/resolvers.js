// App Imports
import models from '../../setup/models'

// Get crate by ID
export async function getById(parentValue, {crateId}) {
  const crate = await models.Crate.findOne({where: {id: crateId}})

  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
export async function getAll() {
  return await models.Crate.findAll({order: [['id', 'DESC']]})
}

// Create crate
export async function create(parentValue, {name, description}) {
  return await models.Crate.create({
    name,
    description
  })
}

// Update crate
export async function update(parentValue, {id, name, description}) {

  return await models.Crate.update(
    {
      name,
      description
    },
    {where: {id}}
  )
}

// Delete crate
export async function remove(parentValue, {id}) {
  return await models.Crate.destroy({where: {id}})
}